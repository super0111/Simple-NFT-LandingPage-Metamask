
import classes from './Deposit.module.css'

const Deposit = (props) => {
    
    const { history } = props;
    const getDateTime = (sec) => {
        let date = new Date(sec);
        let formated_date = new Intl.DateTimeFormat('en-US').format(date);
        return formated_date.toString();
    }
    const getTime = (time) => {
        let min = parseInt((time) / 60);
        let hour = 0;

        if (min >= 60) {
            hour = parseInt(min / 60);
            min = min % 60;
        }
        return (hour > 0) ? hour + ' h ' + min + ' m' : min + ' m';
    }
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
            <div className={classes.flexRow}>
                
            </div>
            <div className={classes.input}>
                {history.map((item, key) => {
                    return (
                        <div className={classes.flexRow} key={key}>
                            <div>{key+1}</div>
                            <div>{item['plan']}</div>
                            <div>{window.web3.utils.fromWei(item[2], 'ether')}</div>
                            <div>{getDateTime(item['finish'] * 1000)}</div>
                            <div>{getTime(item['finish']-item['start'])}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
export default Deposit;