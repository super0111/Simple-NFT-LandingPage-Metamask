import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './app.module.css';
import HeaderNav from './components/Header/headerNav'
import Bodytitle from './components/Bodytitle';
import FSM from './components/FSM';
import Total from './components/Total';
import Withdraw from './components/Withdraw';
import Refferals from './components/Refferals';
import Deposit from './components/Deposit';
import { BrowserRouter, Switch, Route,} from 'react-router-dom';


import TradeContext from './context/TradeContext';
import { UseWalletProvider } from 'use-wallet'
import TransakSDK from "@transak/transak-sdk";


function App() {

  const [walletAddress, setWalletAddress] = React.useState("");
  const [web3Instance, setWeb3Instance] = React.useState(null);
  const settings = {
      apiKey: 'e5736e04-4b3f-429a-919d-28ef20c6f64e',  // Your API Key
      environment: 'STAGING', // STAGING/PRODUCTION
      defaultCryptoCurrency: 'BNB',
      themeColor: '#242222', // App theme color
      hostURL: window.location.origin,
      widgetHeight: "600px",
      widgetWidth: "400px",
  }

  const openTransak = () => {
      const transak = new TransakSDK(settings);
  
      transak.init();
      // To get all the events
      transak.on(transak.ALL_EVENTS, (data) => {
          console.log(data)
      });
  
      // This will trigger when the user marks payment is made.
      transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
          console.log(orderData);
          transak.close();
      });
  }


  return (


        <UseWalletProvider
            chainId={56}
            connectors={{
                walletconnect: { rpcUrl: 'https://bsc-dataseed.binance.org/' },
            }}
        >

                    <TradeContext.Provider value={{ walletAddress, setWalletAddress, web3Instance, setWeb3Instance, openTransak }} >

                          <div className={classes.body}>
                          <HeaderNav />
                          <Bodytitle />
                          <div className={classes.flexRow}>
                            <FSM />
                            <FSM />
                            <FSM />
                          </div>
                          <div className={classes.flexRow}>
                            <FSM />
                            <FSM />
                            <FSM />
                          </div>
                          <div className={classes.flexRow}>
                            <Total />
                            <Total />
                            <Total />
                          </div>
                          <div className={classes.flexRow}>
                            <Refferals />
                            <Withdraw />
                          </div>
                          <div className={classes.flexRow}>
                            <Deposit />
                          </div>
                          <div className={classes.footer}>
                            Built for L1 tokens fans by Fantasic Team
                            <img className={classes.footer_img} src="/img/download (8).png" />
                            2022
                          </div>
                        </div>

                    </TradeContext.Provider>

        </UseWalletProvider>


   
  );
}

export default App;
