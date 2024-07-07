import { useState } from "react";
import { restaurants } from "../../materials/mock";
import { Restaurant } from "../restaurant/component";
import { Layout } from "../layout/component";

export const App = () => {

const [restId, setRestId] = useState(restaurants[0].id);
const activeRest = restaurants.find((oRest) => oRest.id === restId);
// console.log(activeRest, restId);
  return (
    <div className='main'>
      <Layout>
        {restaurants.map(({ name, id }) => (
          <button onClick={() => setRestId(id)} disabled={id === restId}>{name}</button>
        ))}
        <h1>Restaurants </h1>
        {activeRest && <Restaurant name={activeRest.name} id={activeRest.id} menu={activeRest.menu} reviews={activeRest.reviews} />}
        
        {/* {restaurants.map(({ name, id, menu, reviews }) => (
          <Restaurant name={name} id={id} menu={menu} reviews={reviews} />
        ))} */}
      </Layout>
    </div>
  );
};
