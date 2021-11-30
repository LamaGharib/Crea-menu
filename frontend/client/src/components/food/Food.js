import React, { useContext } from "react";
import { MenuContext } from "../../context/context";

import { Category } from "../../globalStyles";
import Item from "../item/Item";
import { Contain } from "./foodStyles";
const Food = () => {
  const { menu } = useContext(MenuContext);
  if (menu.categories == null) {
    return null;
  }
  const foodData = menu.categories.food;

  const data = Object.values(foodData);

  return (
    <Contain>
      {data.map((item) => (
        <Category key={item.id}>
          {item.name}
          <Item item={item} />
        </Category>
      ))}
    </Contain>
  );
};

export default Food;
