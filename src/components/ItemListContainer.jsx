import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import productos from "../utils/productos";
import React, { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";

function ItemListContainer(props) {
  const [datos, setDatos] = useState([]);

  //ComponentDidMount
  useEffect(() => {
    customFetch(2000, productos)
      .then((datos) => setDatos(productos))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ItemList datosProductos={datos} itemNumber={props.itemNumber} />
      <ItemCount inicial={1} stock={5} />
    </div>
  );
}

export default ItemListContainer;
