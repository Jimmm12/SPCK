import React from "react";

export const Header = () => {
  return (
    <div>
      {/* header section starts  */}
      <header className="header">
        <div id="menu-btn" className="fas fa-bars" />
        <a
          data-aos="zoom-in-left"
          data-aos-delay={150}
          href="#"
          className="logo"
        >
          <span>T</span>ravel <span>W</span>arrior
        </a>
        <nav className="navbar">
          <a data-aos="zoom-in-left" data-aos-delay={300} href="#home">
            home
          </a>
          <a data-aos="zoom-in-left" data-aos-delay={450} href="#about">
            about us
          </a>
          <a data-aos="zoom-in-left" data-aos-delay={750} href="#services">
            services
          </a>
          <a data-aos="zoom-in-left" data-aos-delay={600} href="#destination">
            destination
          </a>
          <a data-aos="zoom-in-left" data-aos-delay={900} href="#gallery">
            gallery
          </a>
          <a data-aos="zoom-in-left" data-aos-delay={1150} href="#blogs">
            blogs
          </a>
        </nav>
        <a
          data-aos="zoom-in-left"
          data-aos-delay={1300}
          href="#book-form"
          className="btn"
        >
          Đăng Nhập 
        </a>
      </header>
      {/* header section ends */}
    </div>
  );
};
export default Header;
