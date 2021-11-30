import React, { useContext } from "react";
import Formatter from "../../Formatter";
import { List } from "./itemStyles";
import { MenuContext } from "../../context/context";
import { v4 as uuidv4 } from "uuid";

const Item = ({ item }) => {
  const { setCart, setTotal } = useContext(MenuContext);

  return (
    <>
      {item.items.map((item) => (
        <List
          key={item.id}
          onClick={() => {
            setCart((prev) => [
              { name: item.name, price: item.price, id: uuidv4() },
              ...prev,
            ]);
            setTotal((prev) => prev + parseFloat(item.price));
          }}
        >
          <p>{item.name.toUpperCase()}</p>
          <Formatter value={item.price} />
        </List>
      ))}
    </>
  );
};

export default Item;
