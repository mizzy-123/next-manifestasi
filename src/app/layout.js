import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jasa Website, Aplikasi dan Design",
  description:
    "Buatlah inovasi dengan teknologi informasi disini, dengan layanan terbaik dalam pengembangan website, aplikasi, dan desain kreatif. Kami mitra terpercaya yang menawarkan solusi, baik itu pembuatan aplikasi, website, dan juga design yang menarik",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
