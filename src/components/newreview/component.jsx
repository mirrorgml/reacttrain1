import { useReducer } from "react";
import { Counter } from "../counter/component";
const START_DATA = {
    name: "",
    text: "",
    count: 0,
  };

  function reducer(state, { type, payload }) {
    switch (type) {
      case "setName":
        return { ...START_DATA, name: payload };
      case "setText":
        return { ...state, text: payload };
      case "setCount":
        return { ...state, count: payload };
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
        <div>
          <div>
            <span>Name</span>
            <input
          value={name}
          onChange={(event) => {
            dispatch({ type: "setName", payload: event.target.value });
          }}
        />
          </div>
          <div>
            <span>Text</span>
            <textarea
          value={text}
          onChange={(event) => {
            dispatch({ type: "setText", payload: event.target.value });
          }}
          />
          </div>
          <div>
            <span>Raiting</span>
            <Counter  />
          </div>
          <button onClick={() => dispatch({ type: "save" })}>Save</button>
          <button onClick={() => dispatch({ type: "clear" })}>Clear</button>
        </div>
    );
  }