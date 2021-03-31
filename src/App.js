import React from "react";
import { Switch, Route } from "react-router-dom";

import "./css/App.css";

import NavBar from "./components/navbar/navbar";

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import LoginPage from "./pages/login/login";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/sign-in" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
