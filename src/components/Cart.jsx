import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import CartBreakDown from "./CartBreakDown";
import CartItem from "./CartItem";

function Cart() {
  const context = useContext(CartContext);

  return (
    <div>
      <h1>CARRITO</h1>
      <Button
        variant="outlined"
        onClick={() => {
          context.removeAllItems();
        }}
      >
        QUITAR TODO
      </Button>
      <Link to="/">
        <Button variant="outlined">SEGUIR COMPRANDO</Button>
      </Link>
      {context.cartList.length ? (
        <div>
          <CartBreakDown />
          <ul>
            {context.cartList.map((item) => (
              <li key={Math.random()}>
                <CartItem item={item} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Carrito vacío</p>
      )}
    </div>
  );
}

export default Cart;
