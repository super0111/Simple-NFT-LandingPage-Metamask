
import classes from './Refferals.module.css'
import { FcCurrencyExchange } from "react-icons/fc";

const Refferals = (props) => {
    const { withdrawFunc, amount, withdrawalAmount } = props;
    return (
        <div className={classes.flexCol}>
            <div className={classes.title}>WITHDRAW</div>
            <div className={classes.refferals}>
                <div className={classes.name}>STAKED AVAX</div>
                <div className={classes.avax_value}>{amount} AVAX</div>
                <div className={classes.bonus}>Hold Bonus</div>
                <div className={classes.bonus_value}>3% BONUS</div>
                <div className={classes.input}>
                    <div className={classes.input_name}>Available AVAX for withdrawal</div>    
                    <div className={classes.input_value}><FcCurrencyExchange />{withdrawalAmount ? Number(withdrawalAmount).toFixed(3) : "0"}</div>
                </div>
                <button className={classes.btn} onClick={withdrawFunc}>WITHDRAW</button>
            </div>
        </div>
    )
}
export default Refferals;