import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import HomeContent from "@/components/HomeContent";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Service from "@/components/Service";
import "swiper/css";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main>
      <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      <Header />
      <HomeContent />
      <About />
      <Service />
      <Team />
      <Footer />
    </main>
  );
}
