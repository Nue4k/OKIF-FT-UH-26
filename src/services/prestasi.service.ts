import { adminDb } from "@/lib/firebase-admin";
import { Prestasi } from "../../types/models";

const COLLECTION_NAME = "prestasi";
const collection = adminDb.collection(COLLECTION_NAME);

export const prestasiService = {
  /**
   * Mengambil semua prestasi (diurutkan berdasarkan tanggal terbaru)
   */
  async getAll(): Promise<Prestasi[]> {
    const snapshot = await collection.orderBy("createdAt", "desc").get();
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as Prestasi[];
  },

  /**
   * Menyimpan prestasi baru
   */
  async create(data: Omit<Prestasi, "id" | "createdAt" | "updatedAt">): Promise<{ id: string }> {
    const now = Date.now();
    
    const newData = {
      ...data,
      createdAt: now,
      updatedAt: now,
    };

    const docRef = await collection.add(newData);
    return { id: docRef.id };
  },

  /**
   * Memperbarui prestasi berdasarkan ID
   */
  async update(id: string, data: Partial<Prestasi>): Promise<void> {
    const updateData = {
      ...data,
      updatedAt: Date.now()
    };
    await collection.doc(id).update(updateData);
  },

  /**
   * Menghapus prestasi berdasarkan ID
   */
  async delete(id: string): Promise<void> {
    await collection.doc(id).delete();
  }
};
