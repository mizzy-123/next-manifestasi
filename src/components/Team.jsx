"use client";

import "../css/CardTeam.css";

export default function Team() {
  const dataTeam = [
    {
      name: "Ilham",
      image: "/images/ilham.JPG",
      description: `<span>Front End Developer</span>, dan <span>Cloud Computing</span>. Membantumu untuk membuat tampilan <span>Website</span> yang friendly, dan <span>Install Website anda sampai online</span>`,
    },
    {
      name: "Naufal",
      image: "/images/naufal.jpg",
      description: `<span>UI/UX Designer</span>, dan <span>Front End Developer</span>. Membantumu untuk mendesign <span>Website</span> dan <span>Aplikasi</span>, serta membuat tampilan website yang friendly`,
    },
    {
      name: "Eka",
      image: "/images/eka.png",
      description: `<span>Mobile Developer</span>, dan <span>Machine learning</span>. Membantumu untuk membuat <span>Aplikasi Mobile</span> dengan tampilan yang menarik, dan juga dapat membantumu untuk membuatkan <span>AI/Sistem cerdas</span>, di
            Aplikasimu`,
    },
    {
      name: "Kahfi",
      image: "/images/kahfi.jpeg",
      description: `<span>Mobile Developer</span>. Membantumu untuk membuat <span>Aplikasi Mobile</span> yang berkualitas`,
    },
    {
      name: "Mizzy",
      image: "/images/mizzy.JPG",
      description: `<span>FullStack Developer</span>. Membantumu untuk membuatkan kamu baik itu <span>Aplikasi Mobile</span> maupun <span>Website</span>`,
    },
  ];
  return (
    <section id="team" className="testimonial-container">
      <h2 className="heading">
        Our <span>Team</span>
      </h2>
      <div className="container-team">
        {dataTeam.map((v, i) => (
          <div className="team" key={i}>
            <img src={v.image} alt="" />
            <h3>{v.name}</h3>
            <p dangerouslySetInnerHTML={{ __html: v.description }}></p>
          </div>
        ))}
      </div>
    </section>
  );
}
