import ItemList from "./ItemList";
import productos from "../utils/productos";
import React, { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  const [datos, setDatos] = useState([]);
  const { id } = useParams();

  //ComponentDidMount
  useEffect(() => {
    if (id) {
      customFetch(
        2000,
        productos.filter((item) => item.categoryId == id)
      )
        .then((data) => setDatos(data))
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    } else {
      customFetch(2000, productos)
        .then((data) => setDatos(data))
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }
  }, [id]);

  return (
    <div>
      <ItemList datosProductos={datos} />
    </div>
  );
}

export default ItemListContainer;
