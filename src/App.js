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
// import { BrowserRouter, Switch, Route,} from 'react-router-dom';
import Web3 from 'web3';
import axios from 'axios';
import { testnetABI as ABI } from './constant/contractABI';
import { addressSet } from './constant/addressSet';

import TradeContext from './context/TradeContext';
import { UseWalletProvider } from 'use-wallet';
import TransakSDK from "@transak/transak-sdk";
// import { CodeSandboxCircleFilled } from '@ant-design/icons';
// import { setDefaultLocale } from 'react-datepicker';

const plans = [
  [14, 80],
  [21, 75],
  [28, 70],
  [14, 80],
  [21, 75],
  [28, 70]
];

function App() {

  const [walletAddress, setWalletAddress] = React.useState("");
  const [web3Instance, setWeb3Instance] = React.useState(null);
  const [balance, setBalance] = React.useState(0);
  const [contract, setContract] = React.useState(null);
  const [account, setAccount] = React.useState('');
  const [depositHistory, setDepositHistory] = React.useState([]);
  const [stakedAmount, setStakedAmount] = React.useState(0);
  const [withdrawalAmount, setWithdralAmount] = React.useState(0);
  const settings = {
      apiKey: 'e5736e04-4b3f-429a-919d-28ef20c6f64e',  // Your API Key
      environment: 'STAGING', // STAGING/PRODUCTION
      defaultCryptoCurrency: 'BNB',
      themeColor: '#242222', // App theme color
      hostURL: window.location.origin,
      widgetHeight: "600px",
      widgetWidth: "400px",
  }

  React.useEffect(() => {
    const effect = async () => {
      await loadWeb3();
      await getBalance();
      // await convert2USD();
      
      // await getUserDepositInfo();
      
    }
    effect();
  }, []);

  React.useEffect(() => {
    const effect = async () => {
      let _contract = await loadContract();
      setContract(_contract);
    }
    effect();
  }, [account]);
  React.useEffect(() => {
    const effect = async () => {
      
      if(!contract || !account) return;

      let _history = [];
      if(account && account)
      await contract.methods.getUserAmountOfDeposits(account).call()
      .then(async (res)=>{
        for(let i = 0; i < res; i++ ) {
          await contract.methods.getUserDepositInfo(account,i).call()
          .then(res=>{
            _history.push(res);
          })
          .catch(err=>{
            console.log(err);
          })
        }
      })
      .catch(err=>{
        console.log(err);
      });
      setDepositHistory(_history);

      await contract.methods.getUserTotalDeposits(account).call()
      .then(_stakedAmount => {
        setStakedAmount(window.web3.utils.fromWei(_stakedAmount, 'ether'));
      })
      .catch(err=>{
        console.log(err);
      });
      await contract.methods.getUserDividends(account).call()
      .then(res=>{
        console.log(res);
        setWithdralAmount(window.web3.utils.fromWei(res.toString(),'ether'));
      })
      .catch(err=>{
        console.log(err);
      })
    }
    effect();
    
  }, [ contract ]);
  
  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
    }
  }
  const loadContract = async () => {
    const contractAddress = addressSet.testnet;
    return await new window.web3.eth.Contract(ABI, contractAddress);
  }
  const getBalance = async () => {
    // const web3 = new Web3(new Web3.providers.HttpProvider(testnet));
    // const web3 = new Web3(new Web3.providers.HttpProvider());
    // var balance = await web3.eth.getBalance(walletAddress); //Will give value in.
    // balance = web3.toDecimal(balance);
    // console.log(balance);
    var accounts = await window.web3.eth.getAccounts();
    setAccount(accounts[0]);
    let balance = await window.web3.eth.getBalance(accounts[0])
    const ethBalance = window.web3.utils.fromWei(balance, 'ether')
    setBalance(ethBalance);
    // .then(console.log);
  }
  const convert2USD = async (value) => {
    await axios.get(
      "http://api.cryptonator.com/api/full/avax-usd",
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          "Access-Control-Allow-Headers": 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
          // 'Access-Control-Allow-Origin': '*',
        }
      }
      )
    .then(res=> {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }
  const stake = async (plan, _value) => {
    console.log('stake: plan is ', plan);
    let value = window.web3.utils.toWei(_value.toString(), 'ether');
    // const pls = [0,1,2,3,4,5];
    // console.log(value); return;
    await contract.methods.invest(account, plan).send({value: value, from: account})
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }
  const withdraw = async () => {
    await contract.methods.withdraw().send({from: account})
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
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
            <FSM balance={balance} stake={stake} plan={plans[0]} plan_id={0}/>
            <FSM balance={balance} stake={stake} plan={plans[1]} plan_id={1} />
            <FSM balance={balance} stake={stake} plan={plans[2]} plan_id={2} />
          </div>
          <div className={classes.flexRow}>
            <FSM  balance={balance} stake={stake} plan={plans[3]} plan_id={3} />
            <FSM  balance={balance} stake={stake} plan={plans[4]} plan_id={4} />
            <FSM  balance={balance} stake={stake} plan={plans[5]} plan_id={5} />
          </div>
          <div className={classes.flexRow}>
            <Total />
            <Total />
            <Total />
          </div>
          <div className={classes.flexRow}>
            <Refferals withdrawFunc={withdraw} amount={stakedAmount} withdrawalAmount={withdrawalAmount}/>
            <Withdraw />
          </div>
          <div className={classes.flexRow}>
            <Deposit history={depositHistory} />
          </div>
          <div className={classes.footer}>
            Built for L1 tokens fans by Fantasic Team
            <img className={classes.footer_img} src="/img/download (8).png" alt=''/>
            2022
          </div>
        </div>
      </TradeContext.Provider>
    </UseWalletProvider>
  );
}

export default App;
