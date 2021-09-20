import React, { useContext, useState } from "react";

import { useParams } from "react-router-dom";
import { MenuContext } from "../../../context/context";
import { Rapper, Text } from "../../../globalStyles";
import { Holder } from "./Item.element";

const Item = () => {
  const [form, setForm] = useState("");
  const { menu, setCart, cart } = useContext(MenuContext);
  const id = useParams();

  const item = menu.tea.filter((item) => {
    return item.id === id.id;
  });

  const onClick = () => {
    setCart((prev) => [item, ...prev]);
    console.log(cart);
  };

  const onChange = (e) => {
    setForm(e.target.value);

    console.log(form);
  };

  return (
    <Rapper>
      <Holder>
        <Text>{item[0].name}</Text>
        <Text>{item[0].price}</Text>

        <button onClick={onClick}>select</button>
        <input onChange={onChange} value={form} />
      </Holder>
    </Rapper>
  );
};

export default Item;
