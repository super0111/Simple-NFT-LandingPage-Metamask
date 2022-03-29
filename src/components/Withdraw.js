
import classes from './Withdraw.module.css'
import { BiCopy } from "react-icons/bi";
import Clipboard from 'clipboard';

new Clipboard('#referral');

const Withdraw = (props) => {
    const { totalReferralWithdrawn } = props;
    var message = `https://avaxfomo.finance/?ref=${props.account}`
    return (
        <div className={classes.flexCol}>
            <div className={classes.header_title}>REFERRAL</div>
            <div className={classes.withdraw}>
                <div className={classes.text}>You will receive: 5% from each level 1 referral deposits, 3% from each level</div>
                <div className={classes.text}>You will receive: 5% from each level 1 referral deposits, 3% from each level</div>
                <div className={classes.total_field}>
                    <div className={classes.total_item}>
                        <div className={classes.total_title}>Total Referral Earned</div>
                        <div className={classes.total_value}>{props.referralEarned} AVAX</div>
                    </div>
                    <div className={classes.total_item}>
                        <div className={classes.total_title}>Total Referral Withdrawn</div>
                        <div className={classes.total_value}>{totalReferralWithdrawn} AVAX</div>
                    </div>
                    <div className={classes.total_item}>
                        <div className={classes.total_title}>Total Users Invited</div>
                        <div className={classes.total_value}>3</div>
                    </div>
                </div>
                <div className={classes.url}>
                    <div className={classes.input}> {message}</div>
                    <div className={classes.icon} id="referral" data-clipboard-text={message}>
                        <BiCopy />
                        <span class={classes.tooltiptext}>Copy Ref</span>
                    </div>
                </div>
                <div className={classes.footer_text}>Note: You need to have at least 1 deposit to start receive earnings</div>
            </div>
        </div>
    )
}
export default Withdraw;