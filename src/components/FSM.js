import * as React from 'react';
import classes from './FSM.module.css'
import { FcCurrencyExchange } from "react-icons/fc";

const FSM = () => {
  return (
    <div className={classes.ftm}>
        <div className={classes.header}>
            <img className={classes.header_img} src='/img/FSM.26a08c9ac39524cc989b.png' />
            <div className={classes.title_field}>
                <div className={classes.title}>FSM</div>
                <div className={classes.title_comment}>Duration: 3 days</div>
            </div>
            <div className={classes.price_field}>
                <div className={classes.price_name}>
                    Daily Earnings : 
                    <span className={classes.ftm_value}> 4%</span>
                </div>
                <div className={classes.usd_price}>
                    Total Return :
                    <span className={classes.usd_price}> 10%</span>
                </div>
            </div>
        </div>
        <div className={classes.body}>
            <div className={classes.body_item}>
                <div className={classes.text}>In x days you will get:</div>
                <div className={classes.line}></div>
                <div className={classes.number}>10 AVAX</div>
            </div>
            <div className={classes.body_item}>
                <div className={classes.text}>Withdrawal</div>
                <div className={classes.line}></div>
                <div className={classes.number}>Any Time</div>
            </div>
            <div className={classes.amount}>
                <div className={classes.flexRow}>
                    <div className={classes.amount_name}>Amount</div>    
                    <div className={classes.balance}>Walet Balance: 0 AVAX</div>
                </div>
                <div className={classes.amount_value}><FcCurrencyExchange /> 0.0</div>
            </div>
            <div className={classes.deposit_field}>
                <button className={classes.deposit_btn}>STAKE</button>
            </div>
        </div>
    </div>
  );
};

export default FSM;
