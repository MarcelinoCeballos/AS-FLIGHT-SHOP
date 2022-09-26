import React, { useState, useContext } from "react";
import "../css/ItemDetail.css";
import ItemCount from "./ItemCount";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

function ItemDetail({ item }) {
  const [itemCount, setItemCount] = useState(0);
  const context = useContext(CartContext);

  const onAdd = (qty) => {
    setItemCount(qty);
    context.addItem(item, qty);
  };

  return (
    <div className="productDetailBox">
      <div>
        <img className="productDetailImage" src={item.image} alt={item.title} />
      </div>
      <div className="productDetailText">
        <h1>{item.title} </h1>
        <p>{item.description}</p>
        <p>{item.price}</p>
        {itemCount === 0 ? (
          <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
        ) : (
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <Button variant="outlined">IR AL CARRITO</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
