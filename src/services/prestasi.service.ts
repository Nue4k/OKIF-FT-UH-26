import { adminDb } from "@/lib/firebase-admin";
import { Prestasi } from "../../types/models";

const COLLECTION_NAME = "prestasi";
const collection = adminDb.collection(COLLECTION_NAME);

export const prestasiService = {
  /**
   * Mengambil semua prestasi.
   */
  async getAll(isAdmin: boolean = false): Promise<Prestasi[]> {
    let query: FirebaseFirestore.Query = collection.orderBy("createdAt", "desc");
    
    if (!isAdmin) {
      query = query.where("status", "==", "PUBLISHED");
    }

    const snapshot = await query.get();
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as Prestasi[];
  },

  async getById(id: string): Promise<Prestasi | null> {
    const doc = await collection.doc(id).get();
    if (!doc.exists) return null;
    
    const data = doc.data() as Prestasi;
    
    // Jika bukan admin dan status bukan PUBLISHED, kita asumsikan detailnya tidak bisa diakses publik
    // Namun getById di sini bisa jadi dipanggil admin. Logika admin/publik biasanya di route.ts.
    return { id: doc.id, ...data };
  },

  async create(data: Omit<Prestasi, "id" | "createdAt" | "updatedAt">): Promise<{ id: string }> {
    const now = Date.now();
    
    const newData = {
      ...data,
      status: data.status || "PUBLISHED",
      createdAt: now,
      updatedAt: now,
    };

    const docRef = await collection.add(newData);
    return { id: docRef.id };
  },

  async update(id: string, data: Partial<Prestasi>): Promise<void> {
    const updateData: any = {
      ...data,
      updatedAt: Date.now()
    };
    await collection.doc(id).update(updateData);
  },

  async delete(id: string): Promise<void> {
    await collection.doc(id).delete();
  }
};
