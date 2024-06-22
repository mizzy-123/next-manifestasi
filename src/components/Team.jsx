"use client";

import { useEffect } from "react";
import Swiper from "swiper";

export default function Team() {
  useEffect(() => {
    let swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 50,
      loop: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);
  return (
    <div class="testimonial-container">
      <h2 class="heading">
        Our <span>Team</span>
      </h2>

      <div class="testimonial-wrapper">
        <div class="testimonial-box mySwiper">
          <div class="testimonial-content swiper-wrapper">
            <div class="testimonial-slide swiper-slide">
              <img src="/images/ilham.JPG" alt="" />
              <h3>Ilham</h3>
              <p>Pelayanan jasanya bagus, orangnya ramah bintang 5 lah pokoknya</p>
            </div>
            <div class="testimonial-slide swiper-slide">
              <img src="/images/naufal.jpg" alt="" />
              <h3>Naufal</h3>
              <p>Hasilnya bagus sesuai selera, rekomended</p>
            </div>
            <div class="testimonial-slide swiper-slide">
              <img src="/images/eka.png" alt="" />
              <h3>Eka</h3>
              <p>Kinerja bagus, fast respon</p>
            </div>
          </div>

          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
}
