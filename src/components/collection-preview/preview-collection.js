import React from "react";

import CollectionItem from "../collection-item/collection-item";

import "./preview-collection.scss";

const PreviewCollection = ({ title, items }) => (
  <div className="preview-collection">
    <h1 className="title"><a href={`/shop/${title.toLowerCase()}`}>{title}</a></h1>
    <div className="preview">
      {items.filter((item, idx) => idx < 4).map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))
      }
    </div>
  </div>
);

export default PreviewCollection;
