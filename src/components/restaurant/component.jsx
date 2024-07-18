import { useState,useContext } from 'react';
import { Menu } from '../menu/component';
import { Review } from '../review/component';
import { Newreview } from '../newreview/component';
import styles from './styles.module.css';
import { ThemeContext } from "../app/component";

export const Restaurant = ({ name, id, menu, reviews }) => {
  const themeMode = useContext(ThemeContext);
  return (
    <div key={id} >
      <div className={themeMode  === 'light' ? styles.lightTitle : styles.title}>{name}</div>
      <div className={styles.content}>
        <h3>Menu: </h3>
        <Menu menu={menu} />
        <h3>Reviews: </h3>
        <Review reviews={reviews} />
        <h3>New reviews: </h3>
        <Newreview />
      </div>
    </div>
  )
}
