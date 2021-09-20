import React, { useContext } from "react";
import { MenuContext } from "../../../context/context";
import { Rapper } from "../../../globalStyles";

const Cart = () => {
  const { cart } = useContext(MenuContext);
  return (
    <Rapper>
      {cart.map((item) => (
        <>item.price</>
      ))}
    </Rapper>
  );
};

export default Cart;
