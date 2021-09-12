import React from "react";
import { useDispatch } from "react-redux"

import { addItem } from "../../redux/cart/cart.actions"

import ButtonInput from "../button-input/button-input";

import "./collection-item.scss";

const CollectionItem = ({ item }) => {

  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <ButtonInput invertColor onClick={() => dispatch(addItem(item))}>Add to cart</ButtonInput>
    </div>
  );
};

export default CollectionItem;
