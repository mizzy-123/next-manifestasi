"use client";
export default function HomeContent() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        {/* <h3>Ahlinya bangun Website dan Aplikasi, dengan design yang friendly</h3> */}
        <h1>
          Ahlinya bangun <span>Website</span> dan <span>Aplikasi</span>, dengan design yang friendly
        </h1>
        <p>
          Tempat jasanya <span>Website</span>, dan <span>Aplikasi</span> dengan <span>harga yang terjangkau</span>, yang pastinya kepuasan anda adalah prioritas kami
        </p>

        <div className="social-media">
          <a href="#">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="https://www.instagram.com/manifestasi_tech">
            <i className="bx bxl-instagram-alt"></i>
          </a>
          <a href="#">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
        <a href="https://wa.link/bwpwbi" className="btn-logo">
          <i className="bx bxl-whatsapp"></i>
          <p>Konsultasikan sekarang</p>
        </a>
      </div>

      <div className="r-container">
        <div className="r-box">
          <div className="r-content" style={{ "--i": 0 }}>
            <i className="bx bx-code-alt"></i>
            <h3>Website</h3>
          </div>
          <div className="r-content" style={{ "--i": 1 }}>
            <i className="bx bx-mobile-alt"></i>
            <h3>Aplikasi</h3>
          </div>
          <div className="r-content" style={{ "--i": 2 }}>
            <i className="bx bx-palette"></i>
            <h3>Designer</h3>
          </div>
          <div className="circle"></div>
        </div>

        <div className="overlay"></div>

        <div className="home-img">
          <img src="/images/kartun.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}
