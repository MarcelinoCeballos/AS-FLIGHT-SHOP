import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import "../css/ItemDetail.css";
import { firestoreFetchOne } from "../utils/firestoreFetch";

function ItemDetailContainer(props) {
  const [datos, setDatos] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    firestoreFetchOne(idItem).then((result) => {
      setDatos(result).catch((err) => console.log(err));
    });
    /* async function firestoreFetchOne() {
      const docRef = doc(db, "productos", idItem);
      const docSnap = await getDoc(docRef);
      console.log(docSnap);

      if (docSnap) {
        setDatos({
          id: idItem,
          ...docSnap.data(),
        });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
 */
  }, [idItem]);

  return <ItemDetail item={datos} />;
}

export default ItemDetailContainer;
