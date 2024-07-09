import { useCount } from "./hooks";
import { Counter } from "./component";

export const CounterContainer = () => {
    const { count, decrement, increment } = useCount();
    return (
       <Counter value={count} decrement={decrement} increment={increment} />
    );
  };