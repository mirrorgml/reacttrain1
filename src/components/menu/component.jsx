import { CounterContainer } from "../counter/container";
export const Menu = ({ menu }) => {
    return (
      <div>
        {menu.length ? (
          menu.map((oMenu) => 
          <>
              <h4>{oMenu.name} - {oMenu.price} </h4>
              <ul>
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