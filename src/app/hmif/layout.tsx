import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Himpunan Mahasiswa Informatika (HMIF)",
  description: "Profil, program kerja, dan struktur organisasi Himpunan Mahasiswa Informatika Fakultas Teknik Universitas Hasanuddin (HMIF FT-UH)."
};

export default function HmifLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
