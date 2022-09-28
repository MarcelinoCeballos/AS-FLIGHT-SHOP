import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function CartWidget() {
  const context = useContext(CartContext);
  return (
    <Link to="/cart">
      <Badge badgeContent={context.calculateAllItemCart()} color="primary">
        <ShoppingCartIcon color="action" />
      </Badge>
    </Link>
  );
}

export default CartWidget;
