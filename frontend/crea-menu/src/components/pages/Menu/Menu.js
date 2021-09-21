import React, { useContext } from "react";
import { MenuContext } from "../../../context/context";
import { Holder } from "../Cart/Cart.elements";
import { Rapper, Loading } from "../../../globalStyles";
import { FoodDrinksHolder, Images } from "./Menu.elements";

const Menu = () => {
  const { isLoading, error } = useContext(MenuContext);
  return (
    <>
      {isLoading && <Loading>Loading...</Loading>}
      {error && <p>Something went wrong...</p>}
      <Rapper>
        <FoodDrinksHolder to="/Food">
          <Images
            src="https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/218210786_10159082446415520_1876339931102565351_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=a26aad&_nc_ohc=v6UV70iJWXMAX8yqdwP&tn=cp1c4O7mCIm6P2s9&_nc_ht=scontent-ams4-1.xx&oh=0399d707ebf2fb0a6f268d0d6d2d2c32&oe=614CDD25"
            alt="food"
          />
        </FoodDrinksHolder>
        <FoodDrinksHolder to="/DrinksMenu">
          <Images
            src="https://scontent-amt2-1.xx.fbcdn.net/v/t31.18172-8/474683_10151625657625520_262095081_o.jpg?_nc_cat=105&ccb=1-5&_nc_sid=9267fe&_nc_ohc=7PeY0sEbMZQAX9FFuBt&_nc_ht=scontent-amt2-1.xx&oh=725cde85ea8d278390e42832543ef547&oe=616D7DA8"
            alt="drinks"
          />
        </FoodDrinksHolder>
      </Rapper>
    </>
  );
};

export default Menu;
