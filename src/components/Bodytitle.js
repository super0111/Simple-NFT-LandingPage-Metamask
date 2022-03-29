import {useEffect, useState} from 'react';
import CountUp from 'react-countup';
import classes from './Bodytitle.module.css'

const Bodytitle = (props) => {
  const amount = props.amount;
  const [totalValue, setTotalValue] = useState(0);
  // const [time, setTime] = useState(Date.now());
  function clearHandler() {
    setTotalValue(amount)
    function greet() {
      setTotalValue(0);
     }
     setTimeout(greet, 7900);
  }

  useEffect(() => {
    const interval = setInterval(() => { clearHandler() }, 8000)
    return () => {
      clearInterval(interval);
    };
  }, []);
  console .log(totalValue)

  return (
    <div className={classes.body}>
        <div className={classes.title}>Welcome to Fantasm</div>
        <div className={classes.text}>Fractional-Algorithmic Synthetic Token pegged to the value of 1 FTM on Fantom Opera</div>
        <div className={classes.total}>
            Total Value Locked
            <span className={classes.total_price}>AVAX 
                <span className={classes.total_price}>
                  <CountUp start={0} end={totalValue} duration={3} decimals={3} />
                </span>
            </span>
        </div>
    </div>
  );
};

export default Bodytitle;
