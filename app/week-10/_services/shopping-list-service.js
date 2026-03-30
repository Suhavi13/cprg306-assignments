import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc, doc, query} from "firebase/firestore";

export const addItem = async (userId, item) => {
  try {
    const docRef = await addDoc(collection(db, "users", userId, "items"), item);
    return docRef.id;
  } catch (error) {
    console.error(`Error adding item to users/${userId}/items`, error);
  }
};

export const getItems = async (userId) => {
  try {
    const querySnapshot = await getDocs(collection(db, "users", userId, "items"));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error(`Error reading items for user: ${userId}`, error);
  }
};

