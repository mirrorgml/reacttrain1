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

export const Restaurant = ({ name, id, menu, reviews }) => {
  const { count, decrement, increment } = useCount();

  return (
    <div>
      <div className='title'>{name} - {id}</div>

      <h3>Menu: </h3>
      {menu.length ? (
        menu.map((oMenu) => 
        <>
            <h4>{oMenu.name} - {oMenu.price} </h4>
            <ul>
                {oMenu.ingredients.map((menuItem) => (
                    <li> 
                    <div className='ingridients'>{menuItem}</div>
                    </li>
                ))
                }
            </ul>
            <h4>Add to order: </h4>
            <button onClick={increment}>+</button>
            {count}
            <button onClick={decrement}>-</button>
        </>)
        ) : (
            <div></div>
        )}
      <h3>Reviews: </h3>
      {reviews.length ? (
        reviews.map((review) => 
            <li>
                <div>{review.text}</div>
                <div className='autors'> autor: {review.user}</div>
            </li>
        
        )
      ) : (
        <div></div>
      )}

    </div>
  );
};
