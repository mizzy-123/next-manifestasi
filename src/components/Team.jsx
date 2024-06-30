"use client";

import "../css/CardTeam.css";

export default function Team() {
  return (
    <section id="team" className="testimonial-container">
      <h2 className="heading">
        Our <span>Team</span>
      </h2>
      <div className="container-team">
        <div className="team">
          <img src="/images/ilham.JPG" alt="" />
          <h3>Ilham</h3>
          <p>
            <span>Front End Developer</span>, dan <span>Cloud Computing</span>. Membantumu untuk membuat tampilan <span>Website</span> yang friendly, dan <span>Install Website anda sampai online</span>
          </p>
        </div>
        <div className="team">
          <img src="/images/naufal.jpg" alt="" />
          <h3>Naufal</h3>
          <p>
            <span>UI/UX Designer</span>, dan <span>Front End Developer</span>. Membantumu untuk mendesign <span>Website</span> dan <span>Aplikasi</span>, serta membuat tampilan website yang friendly
          </p>
        </div>
        <div className="team">
          <img src="/images/eka.png" alt="" />
          <h3>Eka</h3>
          <p>
            <span>Mobile Developer</span>, dan <span>Machine learning</span>. Membantumu untuk membuat <span>Aplikasi Mobile</span> dengan tampilan yang menarik, dan juga dapat membantumu untuk membuatkan <span>AI/Sistem cerdas</span>, di
            Aplikasimu
          </p>
        </div>
        <div className="team">
          <img src="/images/mizzy.JPG" alt="" />
          <h3>Mizzy</h3>
          <p>
            <span>FullStack Developer</span>. Membantumu untuk membuatkan kamu baik itu <span>Aplikasi Mobile</span> maupun <span>Website</span>
          </p>
        </div>
      </div>
    </section>
  );
}
