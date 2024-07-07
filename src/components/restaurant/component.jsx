import { useState } from "react";
import { Menu } from "../menu/component";
import { Review } from "../review/component";

export const Restaurant = ({ name, id, menu, reviews }) => {
  

  return (
    <div>
      <div className='title'>{name} - {id}</div>

      <h3>Menu: </h3>
      <Menu  menu={menu} />
      <h3>Reviews: </h3>
      <Review  reviews={reviews} />

    </div>
  );
};
