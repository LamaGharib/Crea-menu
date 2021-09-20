import React, { useContext } from "react";
import { MenuContext } from "../../../context/context";
import { Loading, Rapper, Text } from "../../../globalStyles";

import { TeaList, Item } from "./TeaItems.element";

const Tea = () => {
  const { menu, isLoading } = useContext(MenuContext);
  const teaItems = menu.tea;

  return (
    <>
      <Rapper>
        {isLoading && <Loading>Loading...</Loading>}
        <TeaList>
          {teaItems.map((teaItem) => (
            <Item to={`/Item/${teaItem.id}`} key={teaItem.id}>
              <img
                src="https://cdn-resources.ableton.com/resources/filer_thumbnails/public/2012/10/11/crea.jpg__500x233_q85_crop_subsampling-2_upscale.jpg"
                alt={teaItem.name}
                width="300px"
              />
              <Text>{teaItem.name}</Text>
              <Text>{teaItem.price}</Text>
            </Item>
          ))}
        </TeaList>
      </Rapper>
    </>
  );
};

export default Tea;
