
import classes from './Total.module.css'

const Total = () => {
    return (
        <div className={classes.total}>
            <img className={classes.total_img} src="/img/download (6).png" />
            <div>
                <div className={classes.title}>
                    Total Referrals Rewards
                </div>
                <div className={classes.text}>
                    12 AVAX
                </div>
            </div>
        </div>
    )
}
export default Total;