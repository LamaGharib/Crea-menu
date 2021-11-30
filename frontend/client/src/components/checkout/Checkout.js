import React, { useContext, useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import fetchFromAPI from "../../fetchFromAPI";
import { MenuContext } from "../../context/context";
import { Button, Input } from "../../globalStyles";

const Checkout = () => {
  const { total } = useContext(MenuContext);
  const [email, setEmail] = useState("");
  const stripe = useStripe();

  const handleCheckout = async (e) => {
    e.preventDefault();

    const line_items = [
      {
        quantity: 1,
        price_data: {
          currency: "eur",
          unit_amount: total * 100,
          product_data: {
            name: "CREA",
            description: "menu items",
          },
        },
      },
    ];
    const response = await fetchFromAPI("create-checkout-session", {
      body: { line_items, customer_email: email },
    });
    const { sessionId } = response;
    console.log(sessionId);
    const { error } = await stripe.redirectToCheckout({ sessionId });
    if (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleCheckout}>
        <Input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="E-mail"
        />
        <Button type="submit">CHECKOUT</Button>
      </form>
    </>
  );
};

export default Checkout;
