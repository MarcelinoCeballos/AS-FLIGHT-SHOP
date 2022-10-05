import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import "../css/ItemDetail.css";
import { firestoreFetchOne } from "../utils/firestoreFetch";

function ItemDetailContainer(props) {
  const [datos, setDatos] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    firestoreFetchOne(idItem)
      .then((result) => {
        setDatos(result);
        console.log(result);
      })
      .catch((err) => console.log(err));
  }, [idItem]);

  return <ItemDetail item={datos} />;
}

export default ItemDetailContainer;
