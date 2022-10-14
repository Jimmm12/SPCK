import React from "react";
import { Link, NavLink } from 'react-router-dom';

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
          <NavLink data-aos="zoom-in-left" data-aos-delay={300} to="/">home</NavLink>
          {/* <a data-aos="zoom-in-left" data-aos-delay={450} href="#about">
            about us
          </a>
          <a data-aos="zoom-in-left" data-aos-delay={750} href="#services">
            services
          </a> */}
          
          <NavLink data-aos="zoom-in-left" data-aos-delay={600} to="/Destination">destination</NavLink>
          <NavLink data-aos="zoom-in-left" data-aos-delay={600} to="/Gallery">gallery</NavLink>
          <NavLink data-aos="zoom-in-left" data-aos-delay={600} to="/Blogs">blogs</NavLink>
          
         
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
