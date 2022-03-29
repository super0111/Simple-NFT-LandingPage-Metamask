import * as React from "react";
import classes from './../headerNav.module.css'
// import { useWallet } from 'use-wallet';
import Web3 from 'web3'
import detectEthereumProvider from '@metamask/detect-provider'
import TradeContext from '../../../context/TradeContext';


const WalletButton = () => {
    // const [open, setOpen] = React.useState(false);
    // const wallet = useWallet();
    // const { walletAddress, setWalletAddress, setWeb3Instance, openTransak } = React.useContext(TradeContext);
    const { walletAddress, setWalletAddress, setWeb3Instance } = React.useContext(TradeContext);

    const handleClickOpen = () => {
        if (walletAddress === "") {
            // setOpen(true);
        } else {
            setWalletAddress("");
            setWeb3Instance(null);
        }
    }

    const connectMetamask = async () => {
        try {
            const currentProvider = await detectEthereumProvider();
            console.log("sdfsdf")
            if (currentProvider) {
                let web3InstanceCopy = new Web3(currentProvider);
                setWeb3Instance(web3InstanceCopy);
                
                if (!window.ethereum.selectedAddress) {
                    await window.ethereum.request({ method: 'eth_requestAccounts' });
                }
                await window.ethereum.enable();
                let currentAddress = window.ethereum.selectedAddress;
                setWalletAddress(currentAddress);
                console.log("currentAddress", currentAddress);
            } else {
                console.log('Please install MetaMask!');
            }
        } catch (err) {
            console.log(err.message)
        }
    }

    const getAbbrWalletAddress = (walletAddress) => {
        let abbrWalletAddress = walletAddress.substring(0, 4) + "..." + walletAddress.substring(38, 42);
        return abbrWalletAddress.toUpperCase();
    }

    return (
        <>
            { walletAddress === "" && (
                <button onClick={connectMetamask} className={classes.walletBtn}>
                    <img className={classes.walletImg} src='/img/ic-ghost.2d95302a05c82ed40b0ac9ad932972d9.svg' alt=""/>
                    <span className={classes.walletBtn_m}>Connect wallet</span>
                </button>
            ) }
            { walletAddress !== "" && (
                <button onClick={handleClickOpen} className={classes.walletBtn}>
                    <img className={classes.walletImg} src='/img/ic-ghost.2d95302a05c82ed40b0ac9ad932972d9.svg' alt=""/>
                    <span className={classes.walletBtn_m}>{getAbbrWalletAddress(walletAddress)}</span>
                </button>
            ) }
        </>
    )
}
export default WalletButton