
import classes from './Withdraw.module.css'
import { BiCopy } from "react-icons/bi";
const Withdraw = () => {
    return (
        <div className={classes.flexCol}>
            <div className={classes.header_title}>REFERRAL</div>
            <div className={classes.withdraw}>
                <div className={classes.text}>You will receive: 5% from each level 1 referral deposits, 3% from each level</div>
                <div className={classes.text}>You will receive: 5% from each level 1 referral deposits, 3% from each level</div>
                <div className={classes.total_field}>
                    <div className={classes.total_item}>
                        <div className={classes.total_title}>Total Referral Earned</div>
                        <div className={classes.total_value}>10 AVAX</div>
                    </div>
                    <div className={classes.total_item}>
                        <div className={classes.total_title}>Total Referral Withdrawn</div>
                        <div className={classes.total_value}>10</div>
                    </div>
                    <div className={classes.total_item}>
                        <div className={classes.total_title}>Total Users Invited</div>
                        <div className={classes.total_value}>12</div>
                    </div>
                </div>
                <div className={classes.url}>
                    <div className={classes.input}> https://avaxfomo.finance/?ref=</div>
                    <div className={classes.icon}><BiCopy /></div>
                </div>
                <div className={classes.footer_text}>Note: You need to have at least 1 deposit to start receive earnings</div>
            </div>
        </div>
    )
}
export default Withdraw;