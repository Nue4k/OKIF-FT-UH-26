import { adminDb } from "@/lib/firebase-admin";
import { Formatif } from "../../types/models";
import { generateSlug } from "@/lib/utils/slugify";
import { deleteImageFromCloudinary } from "@/lib/cloudinary-server";

const COLLECTION_NAME = "formatif";
const collection = adminDb.collection(COLLECTION_NAME);

export const formatifService = {
  /**
   * Mengambil semua formatif.
   */
  async getAll(isAdmin: boolean = false): Promise<Formatif[]> {
    let query: FirebaseFirestore.Query = collection.orderBy("createdAt", "desc");
    
    if (!isAdmin) {
      query = query.where("status", "==", "PUBLISHED");
    }

    const snapshot = await query.get();
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as Formatif[];
  },

  async getBySlug(slug: string): Promise<Formatif | null> {
    const snapshot = await collection
      .where("slug", "==", slug)
      .where("status", "==", "PUBLISHED")
      .limit(1)
      .get();

    if (snapshot.empty) return null;

    const doc = snapshot.docs[0];
    return { id: doc.id, ...doc.data() } as Formatif;
  },

  async getById(id: string): Promise<Formatif | null> {
    const doc = await collection.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() } as Formatif;
  },

  async create(data: Omit<Formatif, "id" | "createdAt" | "updatedAt">): Promise<{ id: string; slug: string }> {
    const now = Date.now();
    let slug = generateSlug(data.title);
    
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
      status: data.status || "PUBLISHED",
      createdAt: now,
      updatedAt: now,
    };

    const docRef = await collection.add(newData);
    return { id: docRef.id, slug: uniqueSlug };
  },

  async update(id: string, data: Partial<Formatif>): Promise<void> {
    const doc = await collection.doc(id).get();
    const oldData = doc.data() as Formatif | undefined;
    
    // Jika gambar diupdate dan gambar lamanya ada, hapus gambar lama dari Cloudinary
    if (data.image && oldData?.image && data.image !== oldData.image) {
      await deleteImageFromCloudinary(oldData.image);
    }

    const updateData: any = {
      ...data,
      updatedAt: Date.now()
    };
    await collection.doc(id).update(updateData);
  },

  async delete(id: string): Promise<void> {
    const doc = await collection.doc(id).get();
    const data = doc.data() as Formatif | undefined;
    
    // Hapus gambar dari Cloudinary terlebih dahulu
    if (data?.image) {
      await deleteImageFromCloudinary(data.image);
    }

    // Baru hapus dari Firestore
    await collection.doc(id).delete();
  }
};
