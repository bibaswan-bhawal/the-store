//modules
import { React, Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { createStructuredSelector } from "reselect";

//Redux actions
import { setCurrentUser } from "./redux/user/user.actions"

// Slectors
import { selectCurrentUser } from "./redux/user/user.selector";

//components
import NavBar from "./components/navbar/navbar";

//pages
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import LoginPage from "./pages/login/login";
import CheckoutPage from "./pages/checkout/checkout"

//styles
import "./css/App.css";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/contact" component={HomePage} />=
          <Route exact path="/checkout" component={CheckoutPage} />

          <Route exact path="/sign-in" render={() =>
            this.props.currentUser ?
              (<Redirect to="/" />)
              :
              (<LoginPage />)}
          />

        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);