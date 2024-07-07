import { restaurants } from "../../materials/mock";
import { Restaurant } from "../restaurant/component";
import { Layout } from "../layout/component";

export const App = () => {
  
  return (
    <div className='main'>
      <Layout>
        <h1>Restaurants </h1>
        {restaurants.map(({ name, id, menu, reviews }) => (
          <Restaurant name={name} id={id} menu={menu} reviews={reviews} />
        ))}
      </Layout>
    </div>
  );
};
