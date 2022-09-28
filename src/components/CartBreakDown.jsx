import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import Button from "@mui/material/Button";

function CartBreakDown() {
  const context = useContext(CartContext);
  const subTotal = context.calculateSubTotal();
  const tax = subTotal * 0.21;
  return (
    <div>
      <h1>Desglose Carrito</h1>
      <p>Sub Total: $ {subTotal}</p>
      <p>Impuesto 21%: $ {tax}</p>
      <p>Total: ${subTotal + tax}</p>
      <Button variant="outlined">Terminar Compra</Button>
    </div>
  );
}

export default CartBreakDown;
