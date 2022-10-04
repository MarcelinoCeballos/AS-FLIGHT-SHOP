import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addItem = (item, qty) => {
    const newItem = cartList.find((producto) => producto.id === item.id);
    if (newItem === undefined) {
      item.qty = qty;
      setCartList([...cartList, item]);
    } else {
      newItem.qty += qty;
      setCartList([...cartList]);
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
  const calculateSubTotal = () => {
    let subTotalArray = cartList.map((item) => item.price * item.qty);
    return subTotalArray.reduce(
      (prevValue, currentValue) => prevValue + currentValue,
      0
    );
  };
  const calculateAllItemCart = () => {
    let allItemArray = cartList.map((item) => item.qty);
    return allItemArray.reduce(
      (prevValue, currentValue) => prevValue + currentValue,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addItem,
        removeAllItems,
        removeItem,
        isOnCart,
        calculateSubTotal,
        calculateAllItemCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
