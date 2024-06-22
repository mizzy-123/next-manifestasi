"use client";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="/images/kartun2.jpg" alt="" />
      </div>
      <div className="about-content">
        <h2 className="heading">
          About <span>Us</span>
        </h2>
        <h3>Penasaran dengan kita?</h3>
        <p>
          Kita adalah para developer yang bekerja sama untuk membangun serta mewujudkan bisnis anda berupa berbasis digital, atau membuatkan anda berupa Website, aplikasi, dan juga design, dengan harga yang <span>terjangkau</span>
          <br />
          <br />
          Di Era yang serba digital ini kami memahami betapa pentingnya membuat <span>Website</span> dan juga <span>Aplikasi</span> untuk Survive di dalam bisnis yang serba digital ini, Itulah mengapa kami berdedikasi untuk membantu anda
          dan memberikan layanan pembuatan Website, dan Juga Aplikasi terbaik, dan terpercaya
        </p>
        <a href="#services" className="btn">
          Read More
        </a>
      </div>
    </section>
  );
}
