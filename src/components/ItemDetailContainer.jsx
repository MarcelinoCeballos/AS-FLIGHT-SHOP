import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
import productos from "../utils/productos";
import { useParams } from "react-router-dom";

function ItemDetailContainer(props) {
  const [datos, setDatos] = useState({});
  const { id } = useParams();

  useEffect(() => {
    customFetch(
      2000,
      productos.find((item) => item.id == id)
    )
      .then((result) => setDatos(result))
      .catch((err) => console.log(err));
  }, [id]);

  return <ItemDetail item={datos} />;
}

export default ItemDetailContainer;
