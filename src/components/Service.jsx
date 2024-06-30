"use client";
export default function Service() {
  return (
    <section className="services" id="services">
      <h2 className="heading">
        Our <span>Services</span>
      </h2>

      <div className="services-container">
        <div className="services-box">
          <i className="bx bx-code-alt"></i>
          <h3>Website</h3>
          <p>Kita akan membuatkan anda, atau membangun bisnis anda berupa website yang modern, baik itu website landing page, company profile, bio link, toko online dll sesuai request anda</p>
          <a href="#portfolio" className="btn">
            Read More
          </a>
        </div>
        <div className="services-box">
          <i className="bx bx-mobile-alt"></i>
          <h3>Aplikasi</h3>
          <p>Kita akan membuatkan anda, atau membangun bisnis anda berupa aplikasi mobile, baik itu android ataupun ios, sesuai dengan request anda</p>
          <a href="#portfolio" className="btn">
            Read More
          </a>
        </div>
        <div className="services-box">
          <i className="bx bx-palette"></i>
          <h3>Designer</h3>
          <p>Kita akan mendesign bisnis dan produk anda mulai dari design website, design aplikasi, design logo dll sesuai request anda</p>
          <a href="#portfolio" className="btn">
            Read More
          </a>
        </div>
        <div className="services-box">
          <i class="bx bx-task"></i>
          <h3>Joki Tugas</h3>
          <p>Kita akan membantu tugas anda, dari tugas coding/pemrograman, sampai tugas membuat website, dan aplikasi</p>
          <a href="#portfolio" className="btn">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
