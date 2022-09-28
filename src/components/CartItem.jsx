import { Button } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function CartItem({ item }) {
  const context = useContext(CartContext);
  return (
    <div>
      <h1>Producto: {item.title}</h1>
      <p>
        Precio: ${item.price} Cantidad: {item.qty}
      </p>
      <img src={item.image} alt={item.title}></img>
      <p>Precio Items{item.price * item.qty}</p>
      <Button
        variant="outlined"
        onClick={() => {
          context.removeItem(item.id);
        }}
      >
        QUITAR
      </Button>
    </div>
  );
}

export default CartItem;
