export interface Berita {
  id?: string;
  author: string;
  date: string;
  title: string;
  description: string;
  image: string;
  createdAt?: number;
  updatedAt?: number;
}

export interface Formatif {
  id?: string;
  author: string;
  date: string;
  title: string;
  description: string;
  image: string;
  createdAt?: number;
  updatedAt?: number;
}

export interface Prestasi {
  id?: string;
  nama: string;
  prestasi: string;
  image: string;
  // Field tambahan untuk backend
  createdAt?: number;
  updatedAt?: number;
}
