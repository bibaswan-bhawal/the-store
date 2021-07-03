import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/shop/shop.selectors";

import PreviewCollection from "../../components/collection-preview/preview-collection";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...collectionProps }) => (
      <PreviewCollection key={id} {...collectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);
