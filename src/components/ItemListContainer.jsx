import ItemList from "./ItemList";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestoreFetch } from "../utils/firestoreFetch";

function ItemListContainer(props) {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    firestoreFetch(idCategory)
      .then((result) => {
        setDatos(result);
      })
      .catch((err) => console.log(err));
  }, [idCategory]);

  return (
    <div>
      <ItemList datosProductos={datos} />
    </div>
  );
}

export default ItemListContainer;
