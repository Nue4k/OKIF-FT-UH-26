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
import { Prestasi } from "../../../../types/models";

const COLLECTION_NAME = "prestasi";
const prestasiCollection = collection(db, COLLECTION_NAME);

export const getAllPrestasi = async (): Promise<Prestasi[]> => {
  const q = query(prestasiCollection, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Prestasi));
};

export const addPrestasi = async (data: Omit<Prestasi, "id">) => {
  const now = Date.now();
  const newData = {
    ...data,
    createdAt: now,
    updatedAt: now,
  };
  const docRef = await addDoc(prestasiCollection, newData);
  return docRef.id;
};

export const updatePrestasi = async (id: string, data: Partial<Prestasi>) => {
  const docRef = doc(db, COLLECTION_NAME, id);
  const updateData = {
    ...data,
    updatedAt: Date.now()
  };
  await updateDoc(docRef, updateData);
};

export const deletePrestasi = async (id: string) => {
  const docRef = doc(db, COLLECTION_NAME, id);
  await deleteDoc(docRef);
};
