
import classes from './Deposit.module.css'

const Deposit = () => {
    return (
        <div className={classes.deposit}>
            <div className={classes.title}>DEPOSIT</div>
            <div className={classes.flexRow}>
                <div>#</div>
                <div>Plan</div>
                <div>Amouont Staked</div>
                <div>Duration</div>
                <div>Countdown</div>
            </div>
            <div className={classes.input}></div>
        </div>
    )
}
export default Deposit;