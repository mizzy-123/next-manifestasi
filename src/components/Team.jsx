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
    <section id="team" className="testimonial-container">
      <h2 className="heading">
        Our <span>Team</span>
      </h2>

      <div className="testimonial-wrapper">
        <div className="testimonial-box mySwiper">
          <div className="testimonial-content swiper-wrapper">
            <div className="testimonial-slide swiper-slide">
              <img src="/images/ilham.JPG" alt="" />
              <h3>Ilham</h3>
              <p>
                <span>Front End Developer</span>, dan <span>Cloud Computing</span>. Membantumu untuk membuat tampilan <span>Website</span> yang friendly, dan <span>Install Website anda sampai online</span>
              </p>
            </div>
            <div className="testimonial-slide swiper-slide">
              <img src="/images/naufal.jpg" alt="" />
              <h3>Naufal</h3>
              <p>
                <span>UI/UX Designer</span>, dan <span>Front End Developer</span>. Membantumu untuk mendesign <span>Website</span> dan <span>Aplikasi</span>, serta membuat tampilan website yang friendly
              </p>
            </div>
            <div className="testimonial-slide swiper-slide">
              <img src="/images/eka.png" alt="" />
              <h3>Eka</h3>
              <p>
                <span>Mobile Developer</span>, dan <span>Machine learning</span>. Membantumu untuk membuat <span>Aplikasi Mobile</span> dengan tampilan yang menarik, dan juga dapat membantumu untuk membuatkan <span>AI/Sistem cerdas</span>,
                di Aplikasimu
              </p>
            </div>
            <div className="testimonial-slide swiper-slide">
              <img src="/images/mizzy.JPG" alt="" />
              <h3>Mizzy</h3>
              <p>
                <span>FullStack Developer</span>. Membantumu untuk membuatkan kamu baik itu <span>Aplikasi Mobile</span> maupun <span>Website</span>
              </p>
            </div>
          </div>

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
