import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
import productos from "../utils/productos";

function ItemDetailContainer(props) {
  const [datos, setDatos] = useState({});

  useEffect(() => {
    customFetch(2000, productos[0])
      .then((result) => setDatos(result))
      .catch((err) => console.log(err));
  }, []);

  return <ItemDetail item={datos} />;
}

export default ItemDetailContainer;
