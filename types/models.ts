export interface Berita {
  id?: string;
  slug: string;
  author: string;
  date: string;
  title: string;
  description: string;
  image: string;
  status?: "DRAFT" | "PUBLISHED";
  createdAt?: number;
  updatedAt?: number;
}

export interface Formatif {
  id?: string;
  slug: string;
  speaker: string;
  date: string;
  title: string;
  description: string;
  image: string;
  status?: "DRAFT" | "PUBLISHED";
  createdAt?: number;
  updatedAt?: number;
}

export interface Prestasi {
  id?: string;
  nama: string;
  prestasi: string;
  deskripsi?: string;
  image?: string;
  status?: "DRAFT" | "PUBLISHED";
  createdAt?: number;
  updatedAt?: number;
}
