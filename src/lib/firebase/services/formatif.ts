import { db } from "../config";
import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  orderBy 
} from "firebase/firestore";
import { Formatif } from "../../../../types/models";

const COLLECTION_NAME = "formatif";
const formatifCollection = collection(db, COLLECTION_NAME);

export const getAllFormatif = async (): Promise<Formatif[]> => {
  const q = query(formatifCollection, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Formatif));
};

export const addFormatif = async (data: Omit<Formatif, "id">) => {
  const now = Date.now();
  const newData = {
    ...data,
    createdAt: now,
    updatedAt: now,
  };
  const docRef = await addDoc(formatifCollection, newData);
  return docRef.id;
};

export const updateFormatif = async (id: string, data: Partial<Formatif>) => {
  const docRef = doc(db, COLLECTION_NAME, id);
  const updateData = {
    ...data,
    updatedAt: Date.now()
  };
  await updateDoc(docRef, updateData);
};

export const deleteFormatif = async (id: string) => {
  const docRef = doc(db, COLLECTION_NAME, id);
  await deleteDoc(docRef);
};
