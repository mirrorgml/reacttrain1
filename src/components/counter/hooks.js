import { useState, useCallback } from "react";

export const useCount = () => {
    const [count, setCount] = useState(0);
    const max = 5, min = 0;
  
    const increment = useCallback(() => {
      setCount( count < max ? count + 1 : count);
    },[count]);
    const decrement = useCallback(() => {
      setCount( count > min ? count - 1 : count);
    },[count]);
  
    return {
      count,
      increment,
      decrement,
    };
  };
  