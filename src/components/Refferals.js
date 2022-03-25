
import classes from './Refferals.module.css'
import { FcCurrencyExchange } from "react-icons/fc";

const Refferals = () => {
    return (
        <div className={classes.flexCol}>
            <div className={classes.title}>WITHDRAW</div>
            <div className={classes.refferals}>
                <div className={classes.name}>STAKED AVAX</div>
                <div className={classes.avax_value}>0 AVAX</div>
                <div className={classes.bonus}>Hold Bonus</div>
                <div className={classes.bonus_value}>3% BONUS</div>
                <div className={classes.input}>
                    <div className={classes.input_name}>Available AVAX for withdrawal</div>    
                    <div className={classes.input_value}><FcCurrencyExchange />0.0</div>
                </div>
                <button className={classes.btn}>WITHDRAW</button>
            </div>
        </div>
    )
}
export default Refferals;