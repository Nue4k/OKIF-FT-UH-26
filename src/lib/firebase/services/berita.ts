import { db } from "../config";
import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  orderBy,
  Timestamp
} from "firebase/firestore";
import { Berita } from "../../../../types/models";

const COLLECTION_NAME = "berita";
const beritaCollection = collection(db, COLLECTION_NAME);

// Mengambil semua berita (Diurutkan dari yang terbaru)
export const getAllBerita = async (): Promise<Berita[]> => {
  const q = query(beritaCollection, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Berita));
};

// Menambahkan berita baru
export const addBerita = async (data: Omit<Berita, "id">) => {
  const now = Date.now();
  const newData = {
    ...data,
    createdAt: now,
    updatedAt: now,
  };
  const docRef = await addDoc(beritaCollection, newData);
  return docRef.id;
};

// Memperbarui berita
export const updateBerita = async (id: string, data: Partial<Berita>) => {
  const docRef = doc(db, COLLECTION_NAME, id);
  const updateData = {
    ...data,
    updatedAt: Date.now()
  };
  await updateDoc(docRef, updateData);
};

// Menghapus berita
export const deleteBerita = async (id: string) => {
  const docRef = doc(db, COLLECTION_NAME, id);
  await deleteDoc(docRef);
};
