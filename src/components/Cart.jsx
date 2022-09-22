import { useContext } from "react";
import { CartContext } from "./CartContext";

function Cart() {
  const context = useContext(CartContext);

  return (
    <>
      <p>¡¡Estás en el Carrito!!</p>
      {context.cartList.map((item) => (
        <li>{item.title}</li>
      ))}
    </>
  );
}

export default Cart;
