import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dewan Musyawarah Mahasiswa Informatika (DMMIF)",
  description: "Profil, fungsi, dan wewenang Dewan Musyawarah Mahasiswa Informatika Fakultas Teknik Universitas Hasanuddin (DMMIF FT-UH)."
};

export default function DmmifLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
