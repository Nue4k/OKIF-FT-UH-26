import { adminDb } from "@/lib/firebase-admin";
import { Berita } from "../../types/models";
import { generateSlug } from "@/lib/utils/slugify";

const COLLECTION_NAME = "berita";
const collection = adminDb.collection(COLLECTION_NAME);

export const beritaService = {
  /**
   * Mengambil semua berita.
   * Jika isAdmin false, hanya ambil yang berstatus PUBLISHED.
   */
  async getAll(isAdmin: boolean = false): Promise<Berita[]> {
    let query: FirebaseFirestore.Query = collection.orderBy("createdAt", "desc");
    
    if (!isAdmin) {
      query = query.where("status", "==", "PUBLISHED");
    }

    const snapshot = await query.get();
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as Berita[];
  },

  /**
   * Mengambil berita berdasarkan slug (Untuk halaman detail publik)
   */
  async getBySlug(slug: string): Promise<Berita | null> {
    const snapshot = await collection
      .where("slug", "==", slug)
      .where("status", "==", "PUBLISHED")
      .limit(1)
      .get();

    if (snapshot.empty) return null;

    const doc = snapshot.docs[0];
    return { id: doc.id, ...doc.data() } as Berita;
  },

  /**
   * Mengambil berita berdasarkan ID (Untuk edit admin)
   */
  async getById(id: string): Promise<Berita | null> {
    const doc = await collection.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() } as Berita;
  },

  /**
   * Menyimpan berita baru
   */
  async create(data: Omit<Berita, "id" | "createdAt" | "updatedAt">): Promise<{ id: string; slug: string }> {
    const now = Date.now();
    let slug = generateSlug(data.title);
    
    // Pastikan slug unik
    let slugExists = true;
    let counter = 1;
    let uniqueSlug = slug;

    while (slugExists) {
      const snapshot = await collection.where("slug", "==", uniqueSlug).get();
      if (snapshot.empty) {
        slugExists = false;
      } else {
        uniqueSlug = `${slug}-${counter}`;
        counter++;
      }
    }

    const newData = {
      ...data,
      slug: uniqueSlug,
      status: data.status || "PUBLISHED", // Default to published if not provided
      createdAt: now,
      updatedAt: now,
    };

    const docRef = await collection.add(newData);
    return { id: docRef.id, slug: uniqueSlug };
  },

  /**
   * Memperbarui berita berdasarkan ID
   */
  async update(id: string, data: Partial<Berita>): Promise<void> {
    const updateData: any = {
      ...data,
      updatedAt: Date.now()
    };

    // Jika judul diupdate, kita MUNGKIN ingin update slug, tapi biasanya slug dibiarkan tetap
    // agar URL lama tidak mati. Kita asumsikan slug tidak diubah otomatis di sini.

    await collection.doc(id).update(updateData);
  },

  /**
   * Menghapus berita berdasarkan ID
   */
  async delete(id: string): Promise<void> {
    await collection.doc(id).delete();
  }
};
