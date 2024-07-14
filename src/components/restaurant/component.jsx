import { useState } from 'react'
import { Menu } from '../menu/component'
import { Review } from '../review/component'
import { Newreview } from '../newreview/component'
import styles from './styles.module.css'

export const Restaurant = ({ name, id, menu, reviews }) => {
  return (
    <div key={id} >
      <div className={styles.title}>{name}</div>
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
