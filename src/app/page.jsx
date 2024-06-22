"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import HomeContent from "@/components/HomeContent";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Service from "@/components/Service";
import "swiper/css";
import Team from "@/components/Team";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");
    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");

    menuIcon.onclick = () => {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    };

    window.onscroll = () => {
      sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navLinks.forEach((links) => {
            links.classList.remove("active");
            document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
          });
        }
      });

      /*========== sticky navbar ==========*/
      let header = document.querySelector(".header");
      header.classList.toggle("sticky", window.scrollY > 80);

      /*========== remove menu icon navbar when click navbar link (scroll) ==========*/
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
    };

    ScrollReveal({
      reset: true,
      distance: "80px",
      duration: 2000,
      delay: 200,
    });

    ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
    ScrollReveal().reveal(".services-container, .portofolio-box, .testimonial-wrapper", { origin: "bottom" });
  }, []);
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
