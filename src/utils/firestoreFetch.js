import {
  query,
  orderBy,
  where,
  collection,
  getDocs,
  doc,
  getDoc,
} from "@firebase/firestore";
import { db } from "./firebaseConfig";

export const firestoreFetch = async (idCategory) => {
  let q;
  if (idCategory) {
    q = query(
      collection(db, "productos"),
      where("categoryId", "==", Number(idCategory))
    );
  } else {
    q = query(collection(db, "productos"), orderBy("title"));
  }
  const querySnapshot = await getDocs(q);
  const dataFromFirestore = querySnapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }));
  return dataFromFirestore;
};

export const firestoreFetchOne = async (idItem) => {
  const docRef = doc(db, "productos", idItem);
  const docSnap = await getDoc(docRef);

  if (docSnap) {
    return {
      id: idItem,
      ...docSnap.data(),
    };
  } else {
    console.log("No such document!");
  }
};
