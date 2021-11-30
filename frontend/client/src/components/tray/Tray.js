import React, { useContext, useState } from "react";
import { MenuContext } from "../../context/context";
import Formatter from "../../Formatter";
import {
  CartItem,
  Contain,
  Form,
  ItemHolder,
  Remove,
  Total,
} from "./trayStyles";
import { FaTrashAlt } from "react-icons/fa";
import Checkout from "../checkout/Checkout";
import { Button, Input } from "../../globalStyles";

const Tray = () => {
  const { total, cart, setCart, setTotal } = useContext(MenuContext);
  const [number, setNumber] = useState("");
  const [isTable, setIsTable] = useState(false);
  const [note, setNote] = useState("");
  const table = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "20",
    "21",
    "22",
    "23",
    "24",
    "30",
    "31",
    "32",
    "33",
    "34",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "50",
    "51",
    "52",
    "53",
    "45",
    "55",
    "56",
  ];
  const removeItem = (item) => {
    setCart(cart.filter((product) => product.id !== item.id));
    setTotal((prev) => prev - item.price);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const result = table.find((element) => element === number);
    if (result === undefined) {
      setNumber("");
      alert("this table number dose not exist please enter the correct number");
    } else {
      setIsTable(true);
    }
  };

  return (
    <Contain>
      {cart.map((item) => (
        <CartItem key={item.id}>
          <ItemHolder>
            {item.name.toUpperCase()} <Formatter value={item.price} />
          </ItemHolder>
          <Remove onClick={() => removeItem(item)}>
            <FaTrashAlt />
          </Remove>
        </CartItem>
      ))}

      <Total>
        TOTAL : <Formatter value={total} />
      </Total>
      <Form onSubmit={handleSubmit}>
        <Input
          type="number"
          required
          placeholder="Table Number :"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        />
        <Input
          type="text"
          onChange={(e) => setNote(e.target.value)}
          placeholder="Note :"
          value={note}
        />
        <Button>SUBMIT</Button>
      </Form>
      {isTable && <Checkout />}
    </Contain>
  );
};

export default Tray;
