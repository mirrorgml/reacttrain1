
  export const Counter = ( {value,  decrement, increment}) => {
    
    return (
      <div>
        
            <button onClick={increment}>+</button>
            {value}
            <button onClick={decrement}>-</button>
      </div>
    );
  };