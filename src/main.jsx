import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { restaurants } from "../materials/mock";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <div className='main'>
// {restaurants.map((value) => (
//   <ul>
//     {
//       value.menu.map((menuItem) => (
//         <li> 
//           <div>{menuItem.name}</div>
//           <div>{menuItem.ingredients}</div>
//         </li>
//       ))
//     }
//   </ul>
// ))}
//   </div>
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className='main'>
  <div>
    <div className='title'>{restaurants[0].name}</div>
    <h3>MENU</h3>
    <ul>
      <li>
        <div>{restaurants[0].menu[0].name}</div>
        <ul >
          {restaurants[0].menu[0].ingredients.map((menuItem) => (
          <li> 
          <div className='ingridients'>{menuItem}</div>
          </li>
          ))
          }
        </ul>
      </li>

      <li>
        <div>{restaurants[0].menu[1].name}</div>
        <ul >
          {restaurants[0].menu[1].ingredients.map((menuItem) => (
          <li> 
          <div className='ingridients'>{menuItem}</div>
          </li>
          ))
          }
        </ul>
      </li>

      <li>
        <div>{restaurants[0].menu[2].name}</div>
        <ul >
          {restaurants[0].menu[2].ingredients.map((menuItem) => (
          <li> 
          <div className='ingridients'>{menuItem}</div>
          </li>
          ))
          }
        </ul>
      </li>
    </ul>
    <h3>REVIEWS</h3>
    <ul>
      <li>
        <div>{restaurants[0].reviews[0].text}</div>
        <div className='autors'> autor: {restaurants[0].reviews[0].user}</div>
      </li>
      <li>
        <div>{restaurants[0].reviews[1].text}</div>
        <div className='autors'> autor: {restaurants[0].reviews[1].user}</div>
      </li>
    </ul>
  </div>

  <div>
  <div className='title'>{restaurants[1].name}</div>
  <h3>MENU</h3>
  <ul>
    <li>
      <div>{restaurants[1].menu[0].name}</div>
      <ul >
        {restaurants[1].menu[0].ingredients.map((menuItem) => (
        <li> 
        <div className='ingridients'>{menuItem}</div>
        </li>
        ))
        }
      </ul>
    </li>

    <li>
      <div>{restaurants[1].menu[1].name}</div>
      <ul >
        {restaurants[1].menu[1].ingredients.map((menuItem) => (
        <li> 
        <div className='ingridients'>{menuItem}</div>
        </li>
        ))
        }
      </ul>
    </li>
  </ul>
  <h3>REVIEWS</h3>
  <ul>
    <li>
      <div>{restaurants[1].reviews[0].text}</div>
      <div className='autors'> autor: {restaurants[1].reviews[0].user}</div>
    </li>
    <li>
      <div>{restaurants[1].reviews[1].text}</div>
      <div className='autors'> autor: {restaurants[1].reviews[1].user}</div>
    </li>
    <li>
      <div>{restaurants[1].reviews[2].text}</div>
      <div className='autors'> autor: {restaurants[1].reviews[2].user}</div>
    </li>
  </ul>
  </div>
</div>
);