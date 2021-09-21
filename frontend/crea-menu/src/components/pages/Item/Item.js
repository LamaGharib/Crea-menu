import React, { useContext } from "react";

import { useParams } from "react-router-dom";
import { MenuContext } from "../../../context/context";
import { Rapper, Text } from "../../../globalStyles";
import { Holder, ExtraHolder, Img } from "./Item.element";

const Item = () => {
  const { menu, setCart, setTotal, cart } = useContext(MenuContext);
  const id = useParams();

  const itemArray = menu.coffee.filter((item) => {
    return item.id === id.id;
  });
  const item = itemArray[0];

  const extras = menu.extra;

  const price = parseFloat(item.price);

  const onClick = () => {
    setCart((prev) => [item, ...prev]);
    setTotal((prev) => prev + price);
    console.log(cart);
  };

  const addExtra = () => {};

  return (
    <Rapper>
      <Holder>
        <Img src={item.img} alt={item.name} />
        <Text>{item.name}</Text>
        <Text>
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
          }).format(price)}
        </Text>

        <button onClick={onClick}>select</button>
        <ExtraHolder>
          {extras.map((extra) => {
            return (
              <button key={extra.id} onClick={addExtra}>
                {extra.name} :
                {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "EUR",
                }).format(parseFloat(extra.price))}
              </button>
            );
          })}
        </ExtraHolder>
      </Holder>
    </Rapper>
  );
};

export default Item;
