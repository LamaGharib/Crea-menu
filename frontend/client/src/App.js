import { Switch, Route } from "react-router-dom";
import { Drinks, Food, Tray, Navbar, Success, Canceled } from "./components";

import { MenuProvider } from "./context/context";
import { Container, GlobalStyle } from "./globalStyles";

function App() {
  return (
    <>
      <MenuProvider>
        <GlobalStyle />
        <Navbar />
        <Container>
          <Switch>
            <Route exact path="/Drinks">
              <Drinks />
            </Route>
            <Route exact path="/Food">
              <Food />
            </Route>
            <Route exact path="/Tray">
              <Tray />
            </Route>
            <Route exact path="/Success">
              <Success />
            </Route>
            <Route exact path="/Canceled">
              <Canceled />
            </Route>
          </Switch>
        </Container>
      </MenuProvider>
    </>
  );
}

export default App;
