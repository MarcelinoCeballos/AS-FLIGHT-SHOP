import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import Button from "@mui/material/Button";
import {
  serverTimestamp,
  setDoc,
  doc,
  collection,
  updateDoc,
  increment,
} from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

function CartBreakDown() {
  const context = useContext(CartContext);
  const subTotal = context.calculateSubTotal();
  const tax = subTotal * 0.21;
  const total = subTotal + tax;

  const test = useContext(CartContext);

  const emitirOrden = async () => {
    let itemsForDB = test.cartList.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: item.qty,
    }));

    let order = {
      buyer: {
        name: "Guido Pache",
        email: "guido@pache.com",
        phone: "1122334455",
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
    test.removeAllItems();
    itemsForDB.map(async (item) => {
      const itemRefQty = doc(db, "productos", item.id);
      await updateDoc(itemRefQty, {
        stock: increment(-item.quantity),
      });
    });
  };
  return (
    <div>
      <h1>Desglose Carrito</h1>
      <p>Sub Total: $ {subTotal}</p>
      <p>Impuesto 21%: $ {tax}</p>
      <p>Total: ${subTotal + tax}</p>
      <Button variant="outlined" onClick={emitirOrden}>
        Terminar Compra
      </Button>
    </div>
  );
}

export default CartBreakDown;
