//modules
import { React, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// Slectors
import { selectCurrentUser } from "./redux/user/user.selector";

// Actions
import { checkUserSession } from "./redux/user/user.actions";
//components
import NavBar from "./components/navbar/navbar";

//pages
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import LoginPage from "./pages/login/login";
import CheckoutPage from "./pages/checkout/checkout"

//styles
import "./css/App.css";

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/contact" component={HomePage} />=
        <Route exact path="/checkout" component={CheckoutPage} />

        <Route exact path="/sign-in" render={() =>
          currentUser ?
            (<Redirect to="/" />)
            :
            (<LoginPage />)}
        />

      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);