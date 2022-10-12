import React from "react";
import Button from "@mui/material/Button";

function CartBreakDown({ subTotal, tax, total, clickEvent }) {
  return (
    <div>
      <h1>Desglose Carrito</h1>
      <p>Sub Total: $ {subTotal}</p>
      <p>Impuesto 21%: $ {tax}</p>
      <p>Total: $ {total}</p>
      <Button variant="outlined" onClick={clickEvent}>
        Terminar Compra
      </Button>
    </div>
  );
}

export default CartBreakDown;
