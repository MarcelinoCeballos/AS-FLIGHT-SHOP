import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import CartBreakDown from "./CartBreakDown";
import CartItem from "./CartItem";
import FormCart from "./FormCart";
import {
  serverTimestamp,
  setDoc,
  doc,
  collection,
  updateDoc,
  increment,
} from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

function Cart() {
  const context = useContext(CartContext);
  const [formView, setFormView] = useState(false);

  const subTotal = context.calculateSubTotal();
  const tax = subTotal * 0.21;
  const total = subTotal + tax;

  const formViewOn = () => {
    setFormView(true);
  };

  const emitirOrden = async (name, email, phone) => {
    let itemsForDB = context.cartList.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: item.qty,
    }));
    console.log(context.cartList);

    let order = {
      buyer: {
        name: name,
        email: email,
        phone: phone,
      },
      date: serverTimestamp(),
      items: itemsForDB,
      total: total,
    };
    console.log(order);
    const setNewOrder = doc(collection(db, "orders"));
    await setDoc(setNewOrder, order);
    alert(
      "Orden de compra generada con el siguiente número de guía " +
        setNewOrder.id
    );
    console.log(itemsForDB);
    context.removeAllItems();
    itemsForDB.map(async (item) => {
      const itemRefQty = doc(db, "productos", item.id);
      await updateDoc(itemRefQty, {
        stock: increment(-item.quantity),
      });
    });
    setFormView(false);
  };

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
      {formView ? (
        <FormCart
          getInfoFunction={(name, email, phone) =>
            emitirOrden(name, email, phone)
          }
        ></FormCart>
      ) : context.cartList.length ? (
        <div>
          <CartBreakDown
            subTotal={subTotal}
            tax={tax}
            total={total}
            clickEvent={formViewOn}
          />
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
