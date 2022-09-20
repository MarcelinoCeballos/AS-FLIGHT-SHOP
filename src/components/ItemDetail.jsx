import React, { useState } from "react";
import "../css/ItemDetail.css";
import ItemCount from "./ItemCount";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function ItemDetail({ item }) {
  const [itemCount, setItemCount] = useState(0);

  const onAdd = (qty) => {
    alert("Usted ha sumado " + qty + " productos al carrito");
    setItemCount(qty);
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
