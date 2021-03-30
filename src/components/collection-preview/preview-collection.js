import React from "react";

import "./preview-collection.scss";

const PreviewCollection = ({ title, items }) => (
  <div calssName="preview-collection">
    <h1>{title}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <div key={item.id}> {item.name}</div>
        ))}
    </div>
  </div>
);

export default PreviewCollection;
