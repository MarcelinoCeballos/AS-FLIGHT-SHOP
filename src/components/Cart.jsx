import { useContext } from "react";
import { CartContext } from "./CartContext";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

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
      {context.cartList.map((item) => (
        <li key={Math.random()}>
          <h1>Producto: {item.title}</h1>
          <p>Precio: ${item.price}</p>
          <img src={item.image} alt={item.title}></img>
          <p>Cantidad: {item.qty}</p>
          <Button
            variant="outlined"
            onClick={() => {
              context.removeItem(item.id);
            }}
          >
            QUITAR
          </Button>
        </li>
      ))}
    </div>
  );
}

export default Cart;
