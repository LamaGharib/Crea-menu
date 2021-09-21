import React, { useContext, useState } from "react";
import { MenuContext } from "../../../context/context";
import { Text } from "../../../globalStyles";
import { Holder, Form, Button } from "./Cart.elements";
import { FaTimes } from "react-icons/fa";

const Cart = () => {
  const { cart, total, setCart, setTotal } = useContext(MenuContext);

  const [note, setNote] = useState("");
  const onChange = (e) => {
    setNote(e.target.value);
  };
  const onClick = () => {
    setCart([]);
    setTotal(0);
  };
  const removeItem = (item) => {
    setCart(cart.filter((product) => product.id !== item.id));
    setTotal((prev) => prev - item.price);
  };

  return (
    <Holder>
      {cart.map((item) => (
        <Text key="index">
          {item.name} :
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
          }).format(parseFloat(item.price))}
          <Button onClick={() => removeItem(item)}>Remove</Button>
        </Text>
      ))}
      <Form>
        <input onChange={onChange} value={note} />
      </Form>
      <Text>
        total :
        {new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "EUR",
        }).format(total)}
      </Text>
      <Text>{note}</Text>
      <Button onClick={onClick}>Pay</Button>
    </Holder>
  );
};

export default Cart;
