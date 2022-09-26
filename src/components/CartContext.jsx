import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addItem = (producto, qty) => {
    if (isOnCart(producto.id)) {
      let newCartList = cartList;
      let objIndex = newCartList.findIndex((item) => item.id === producto.id);
      newCartList[objIndex].qty += qty;
      setCartList(newCartList);
    } else {
      producto.qty = qty;
      setCartList([...cartList, producto]);
    }
  };

  const removeItem = (id) => {
    setCartList(cartList.filter((item) => item.id !== id));
  };
  const removeAllItems = () => {
    setCartList([]);
  };
  const isOnCart = (id) => {
    if (cartList.find((item) => item.id === id)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <CartContext.Provider
      value={{ cartList, addItem, removeAllItems, removeItem, isOnCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
