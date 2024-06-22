export default function Header() {
  return (
    <header className="header">
      <img className="logo" src="/images/manifestasi2.png" width="200" />

      <nav className="navbar">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#team">Our Team</a>
      </nav>

      <div className="bx bx-menu" id="menu-icon"></div>
    </header>
  );
}
