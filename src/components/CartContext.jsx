import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addItem = (producto, qty) => {
    setCartList(producto);
  };

  return (
    <CartContext.Provider value={{ cartList, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
