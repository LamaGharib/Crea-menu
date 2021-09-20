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
              <img
                src="https://cdn-resources.ableton.com/resources/filer_thumbnails/public/2012/10/11/crea.jpg__500x233_q85_crop_subsampling-2_upscale.jpg"
                alt={coffeeItem.name}
                width="300px"
              />
              <Text>{coffeeItem.name}</Text>
              <Text>{coffeeItem.price}</Text>
            </Item>
          ))}
        </CoffeeList>
      </Rapper>
    </>
  );
};

export default Coffee;
