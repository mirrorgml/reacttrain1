import { useState } from "react";

const useCount = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevState) => prevState < 5 ? prevState + 1 : prevState);
  };
  const decrement = () => {
    setCount((prevState) => prevState > 0 ? prevState - 1 : prevState);
  };

  return {
    count,
    increment,
    decrement,
  };
};

  export const Counter = () => {
    const { count, decrement, increment } = useCount();
    return (
      <div>
        <h4>Add to order: </h4>
            <button onClick={increment}>+</button>
            {count}
            <button onClick={decrement}>-</button>
      </div>
    );
  };