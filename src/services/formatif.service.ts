import { adminDb } from "@/lib/firebase-admin";
import { Formatif } from "../../types/models";
import { generateSlug } from "@/lib/utils/slugify";

const COLLECTION_NAME = "formatif";
const collection = adminDb.collection(COLLECTION_NAME);

export const formatifService = {
  /**
   * Mengambil semua formatif (diurutkan berdasarkan tanggal terbaru)
   */
  async getAll(): Promise<Formatif[]> {
    const snapshot = await collection.orderBy("createdAt", "desc").get();
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as Formatif[];
  },

  /**
   * Menyimpan formatif baru
   */
  async create(data: Omit<Formatif, "id" | "createdAt" | "updatedAt">): Promise<{ id: string; slug: string }> {
    const slug = data.slug || generateSlug(data.title);
    const now = Date.now();
    
    const newData = {
      ...data,
      slug,
      createdAt: now,
      updatedAt: now,
    };

    const docRef = await collection.add(newData);
    return { id: docRef.id, slug };
  },

  /**
   * Memperbarui formatif berdasarkan ID
   */
  async update(id: string, data: Partial<Formatif>): Promise<void> {
    const updateData = {
      ...data,
      updatedAt: Date.now()
    };
    await collection.doc(id).update(updateData);
  },

  /**
   * Menghapus formatif berdasarkan ID
   */
  async delete(id: string): Promise<void> {
    await collection.doc(id).delete();
  }
};
