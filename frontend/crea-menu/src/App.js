import { useContext } from "react";
import { MenuContext } from "./context/context";
import {
  Navbar,
  Menu,
  Cart,
  Home,
  Drinks,
  Coffee,
  Tea,
  Food,
  Item,
  DrinksMenu,
} from "./components";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MenuProvider } from "./context/context";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <Router>
      <MenuProvider>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Menu">
            <Menu />
          </Route>
          <Route exact path="/Food">
            <Food />
          </Route>

          <Route exact path="/DrinksMenu">
            <DrinksMenu />
          </Route>
          <Route exact path="/Menu/DrinksMenu/Coffee">
            <Coffee />
          </Route>
          <Route exact path="/Menu/DrinksMenu/Tea">
            <Tea />
          </Route>
          <Route exact path="/Menu/DrinksMenu/Soda">
            <Drinks />
          </Route>
          <Route exact path="/Menu/DrinksMenu/ExtraRefreshing">
            <Drinks />
          </Route>
          <Route exact path="/Menu/DrinksMenu/BeerOnDraft">
            <Drinks />
          </Route>
          <Route exact path="/Menu/DrinksMenu/BeerOnBottle">
            <Drinks />
          </Route>
          <Route exact path="/Menu/DrinksMenu/Wine">
            <Drinks />
          </Route>
          <Route exact path="/Menu/DrinksMenu/Whiskey">
            <Drinks />
          </Route>
          <Route exact path="/Menu/DrinksMenu/Liqueur">
            <Drinks />
          </Route>
          <Route exact path="/Menu/DrinksMenu/Distilled">
            <Drinks />
          </Route>

          <Route exact path="/:id">
            <Item />"
          </Route>
          <Route exact path="/Cart">
            <Cart />
          </Route>
        </Switch>
      </MenuProvider>
    </Router>
  );
}

export default App;
