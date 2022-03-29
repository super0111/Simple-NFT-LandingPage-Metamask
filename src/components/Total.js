
import classes from './Total.module.css'

const Total = (props) => {
    const totalInfoes = props.totalInfo
    console.log("totalInfoes", totalInfoes)
    return (
        <div className={classes.flexRow}>
            <div className={classes.total}>
                <img className={classes.total_img} src="/img/download (6).png" alt='img' />
                <div>
                    <div className={classes.title}>
                        Total Referrals Rewards
                    </div>
                    <div className={classes.text}>
                     AVAX
                    </div>
                </div>
            </div>
            <div className={classes.total}>
                <img className={classes.total_img} src="/img/download (6).png" alt='img' />
                <div>
                    <div className={classes.title}>
                        Total Staked
                    </div>
                    <div className={classes.text}>
                        6.432 AVAX
                    </div>
                </div>
            </div>
            <div className={classes.total}>
                <img className={classes.total_img} src="/img/download (6).png" alt='img' />
                <div>
                    <div className={classes.title}>
                        Total Users
                    </div>
                    <div className={classes.text}>
                        12
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Total;