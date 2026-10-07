import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Footer from "@/components/ui/Footer";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://okifftuh.com"),
  title: {
    default: "OKIF FT-UH | Organisasi Kemahasiswaan Informatika",
    template: "%s | OKIF FT-UH",
  },
  description: "Organisasi Kemahasiswaan Informatika Fakultas Teknik Universitas Hasanuddin (OKIF FT-UH). Temukan berita, informasi kegiatan, formatif, dan prestasi mahasiswa Teknik Informatika Unhas.",
  keywords: ["OKIF", "FT-UH", "Teknik Informatika", "Unhas", "Universitas Hasanuddin", "HMIF", "DMMIF", "Mahasiswa Berprestasi", "Organisasi Mahasiswa"],
  authors: [{ name: "OKIF FT-UH" }],
  openGraph: {
    title: "OKIF FT-UH | Organisasi Kemahasiswaan Informatika",
    description: "Organisasi Kemahasiswaan Informatika Fakultas Teknik Universitas Hasanuddin.",
    url: "/",
    siteName: "OKIF FT-UH",
    images: [
      {
        url: "/hmif1.png",
        width: 800,
        height: 600,
        alt: "Logo OKIF FT-UH",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OKIF FT-UH",
    description: "Organisasi Kemahasiswaan Informatika Fakultas Teknik Universitas Hasanuddin.",
    images: ["/hmif1.png"],
  },
  icons: {
    icon: "/hmif1.png",
    shortcut: "/hmif1.png",
    apple: "/hmif1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className="h-full antialiased"
    >
      <body className={`${lato.className} min-h-full flex flex-col`}>
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
