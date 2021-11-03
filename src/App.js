import React from "react";
import Page from "./components/Page";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Shop from "./components/Shop/Shop";
import { useSelector } from "react-redux";
import MenuBar from "./components/Header/MenuBar/MenuBar";
import Models from "./components/ModelIndividual/ModelS";
import ModelY from "./components/ModelIndividual/ModelY";
import "./App.css";
function App() {
  const user = useSelector((state) => state.user);
  const showMenu = useSelector((state) => state.showMenu);
  return (
    <>
      <Router>
        {showMenu && <MenuBar />}
        <Switch>
          <Route exact path="/">
            <Page />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route exact path="/modely">
            <ModelY/>
          </Route>
          <Route exact path="/models">
            <Models/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
