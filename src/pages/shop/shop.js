import { React, Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { updateCollections } from "../../redux/shop/shops.actions";

import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

import CollectionsOverview from "../../components/collections-overview/collections-overview";
import CollectionPage from "../collection/collection";

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;

    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

      updateCollections(collectionsMap);
    });
  }

  componentWillUnmount() {

  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
