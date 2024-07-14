import { CounterContainer } from "../counter/container";
import styles from "./styles.module.css";

export const Menu = ({ menu }) => {
    return (
      <div>
        {menu.length ? (
          menu.map((oMenu) => 
          <>
              <h4>{oMenu.name} - {oMenu.price} </h4>
              <ul className={styles.ulList}>
                  {oMenu.ingredients.map((ingredient) => (
                      <li> 
                      <div className='ingridients'>{ingredient}</div>
                      </li>
                  ))
                  }
              </ul>
              <h4>Add to order: </h4>
              <CounterContainer  />
          </>)
          ) : (
              <div></div>
          )}
      </div>
    );
  };