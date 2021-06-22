import React from "react";
import { Switch, Route } from "react-router-dom";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import "./css/App.css";

import NavBar from "./components/navbar/navbar";

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import LoginPage from "./pages/login/login";


class App extends React.Component {
  unsubscribeFromAuth = null;

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      this.setState({ currentUser: userAuth });

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <NavBar currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/sign-in" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App;