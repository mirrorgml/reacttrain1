import { useReducer } from "react";
import { Counter } from "../counter/component";
import styles from './styles.module.css'
const START_DATA = {
    name: "",
    text: "",
    count: 0,
  };
  const max = 5, min = 0;

  function reducer(state, { type, payload }) {
    switch (type) {
      case "setName":
        return { ...START_DATA, name: payload };
      case "setText":
        return { ...state, text: payload };
      case "decCount":
        return { ...state, count: state.count > min ? state.count - 1 : state.count};
      case "incCount":
        return { ...state, count: state.count < max ? state.count + 1 : state.count};
      case "clear":
      case "save":
        return START_DATA;
      default:
        return state;
    }
  }
  
  const useForm = (initialValue) => {
    return useReducer(reducer, initialValue);
  };

  export const Newreview = () => {
    const [form, dispatch] = useForm(START_DATA);
    
    const { name, text, count } = form;
    return (
        <div className={styles.root}>
          <div>
            <span className={styles.caption}>Name</span>
            <input
          value={name}
          onChange={(event) => {
            dispatch({ type: "setName", payload: event.target.value });
          }}
        />
          </div>
          <div>
            <span className={styles.caption}>Text</span>
            <textarea
          value={text}
          onChange={(event) => {
            dispatch({ type: "setText", payload: event.target.value });
          }}
          />
          </div>
          <div>
            <span className={styles.caption}>Raiting</span>
            <Counter value={count} 
            increment={() => { dispatch({ type: "incCount" }); }} 
            decrement={() => { dispatch({ type: "decCount" }); }} />
          </div>
          <button className={styles.btnAction}
           onClick={() => dispatch({ type: "save" })}>Save</button>
          <button className={styles.btnAction}
          onClick={() => dispatch({ type: "clear" })}>Clear</button>
        </div>
    );
  }