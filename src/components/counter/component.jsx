
import styles from "./styles.module.css";

  export const Counter = ( {value,  decrement, increment}) => {
    
    return (
      <div>
        
            <button className={styles.btnLeft}
            onClick={increment}>+</button>
            {value}
            <button className={styles.btnRight}
            onClick={decrement}>-</button>
      </div>
    );
  };