import { adminDb } from "@/lib/firebase-admin";
import { Berita } from "../../types/models"; // adjusting path based on where we are
import { generateSlug } from "@/lib/utils/slugify";

const COLLECTION_NAME = "berita";
const collection = adminDb.collection(COLLECTION_NAME);

export const beritaService = {
  /**
   * Mengambil semua berita (diurutkan berdasarkan tanggal terbaru)
   */
  async getAll(): Promise<Berita[]> {
    const snapshot = await collection.orderBy("createdAt", "desc").get();
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as Berita[];
  },

  /**
   * Menyimpan berita baru
   */
  async create(data: Omit<Berita, "id" | "createdAt" | "updatedAt">): Promise<{ id: string; slug: string }> {
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
   * Memperbarui berita berdasarkan ID
   */
  async update(id: string, data: Partial<Berita>): Promise<void> {
    const updateData = {
      ...data,
      updatedAt: Date.now()
    };
    await collection.doc(id).update(updateData);
  },

  /**
   * Menghapus berita berdasarkan ID
   */
  async delete(id: string): Promise<void> {
    await collection.doc(id).delete();
  }
};
