import { useState } from "react";
import { restaurants } from "../../materials/mock";
import { Restaurant } from "../restaurant/component";
import { Layout } from "../layout/component";
import styles from "./styles.module.css";

export const App = () => {

const [restId, setRestId] = useState(restaurants[0].id);
const activeRest = restaurants.find((oRest) => oRest.id === restId);

  return (
    <div className='main'>
      <Layout>
        {restaurants.map(({ name, id }) => (
          <button className={styles.tabMame}
          onClick={() => setRestId(id)} 
          disabled={id === restId}>
            {name}
          </button>
        ))}
        <div className={styles.restContainer}>
        {activeRest && <Restaurant name={activeRest.name} id={activeRest.id} menu={activeRest.menu} reviews={activeRest.reviews} />}
        </div>
      </Layout>
    </div>
  );
};
