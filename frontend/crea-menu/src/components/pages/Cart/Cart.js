import React, { useContext, useState } from "react";
import { MenuContext } from "../../../context/context";
import { Rapper, Text } from "../../../globalStyles";
import { Holder } from "./Cart.elements";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const { cart } = useContext(MenuContext);
  console.log(cart);
  const [note, setNote] = useState("");
  const onChange = (e) => {
    setNote(e.target.value);

    console.log(note);
  };
  return (
    <Rapper>
      <Holder>
        {cart.map((item) => (
          <>
            <Text key={item[0].id}>{item[0].name}</Text>
            <label>
              Add Notes
              <input onChange={onChange} value={note} />
            </label>
            <Text>{note}</Text>
          </>
        ))}
      </Holder>
    </Rapper>
  );
};

export default Cart;
