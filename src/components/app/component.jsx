import React, { useCallback, useState, useContext } from "react";
import { restaurants } from "../../materials/mock";
import { Restaurant } from "../restaurant/component";
import { Layout } from "../layout/component";
import styles from "./styles.module.css";
import classnames from "classnames";

export const ThemeContext = React.createContext();

export const App = () => {
  const [restId, setRestId] = useState(restaurants[0].id);
  const activeRest = restaurants.find((oRest) => oRest.id === restId);

  const [theme, setTheme] = useState("light");
  const changeTheme = useCallback(() => {
    setTheme((prevState) => {
      return prevState === "light" ? "green" : "light";
    });
  });
  // const themeMode = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={theme}>
      <div className="main">
        <button onClick={changeTheme}>change Theme {theme} </button>
        <Layout>
          {restaurants.map(({ name, id }) => (
            <button
              className={classnames(styles.tabMame, {
                [styles.lightTabMame]: theme === "light",
                [styles.tabMame]: theme !== "light",
              })}
              onClick={() => setRestId(id)}
              disabled={id === restId}
            >
              {name}
            </button>
          ))}
          <div
            className={
              theme === "light"
                ? styles.lightRestContainer
                : styles.restContainer
            }
          >
            {activeRest && (
              <Restaurant
                name={activeRest.name}
                id={activeRest.id}
                menu={activeRest.menu}
                reviews={activeRest.reviews}
              />
            )}
          </div>
        </Layout>
      </div>
    </ThemeContext.Provider>
  );
};
