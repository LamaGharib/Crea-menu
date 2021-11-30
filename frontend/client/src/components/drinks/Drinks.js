import React, { useContext } from "react";
import { MenuContext } from "../../context/context";
import Item from "../item/Item";
import { Category } from "../../globalStyles";
const Drinks = () => {
  const { menu } = useContext(MenuContext);
  if (menu.categories == null) {
    return null;
  }
  const drinksData = menu.categories.drinks;

  const data = Object.values(drinksData);

  return (
    <>
      {data.map((item) => (
        <Category key={item.id}>
          {item.name}
          <Item item={item} />
        </Category>
      ))}
    </>
  );
};

export default Drinks;
