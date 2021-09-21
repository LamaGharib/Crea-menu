import React, { useContext, useState } from "react";
import { MenuContext } from "../../../context/context";
import { Loading, Rapper, Text } from "../../../globalStyles";

import { CoffeeList, Item } from "./coffee.elements";

const Coffee = () => {
  const { menu, isLoading } = useContext(MenuContext);
  const coffeeItems = menu.coffee;

  return (
    <>
      <Rapper>
        {isLoading && <Loading>Loading...</Loading>}
        <CoffeeList>
          {coffeeItems.map((coffeeItem) => (
            <Item to={`/Item/${coffeeItem.id}`} key={coffeeItem.id}>
              <img src={coffeeItem.img} alt={coffeeItem.name} width="300px" />
              <Text>{coffeeItem.name}</Text>
              <Text>
                {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "EUR",
                }).format(coffeeItem.price)}
              </Text>
            </Item>
          ))}
        </CoffeeList>
      </Rapper>
    </>
  );
};

export default Coffee;
