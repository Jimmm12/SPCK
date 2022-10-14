import React from 'react'

export const Frooter = () => {
  return (
    <div>
        <section className="footer">
        <div className="box-container">
          <div className="box" data-aos="fade-up" data-aos-delay={150}>
            <a href="#" className="logo">
              {" "}
              <span>T</span>ravel <span>W</span>arrior{" "}
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, ad?
            </p>
            <div className="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-linkedin" />
            </div>
          </div>
          <div className="box" data-aos="fade-up" data-aos-delay={300}>
            <h3>quick links</h3>
            <a href="#home" className="links">
              {" "}
              <i className="fas fa-arrow-right" /> home{" "}
            </a>
            <a href="#about" className="links">
              {" "}
              <i className="fas fa-arrow-right" /> about{" "}
            </a>
            <a href="#destination" className="links">
              {" "}
              <i className="fas fa-arrow-right" /> destination{" "}
            </a>
            <a href="#services" className="links">
              {" "}
              <i className="fas fa-arrow-right" /> services{" "}
            </a>
            <a href="#gallery" className="links">
              {" "}
              <i className="fas fa-arrow-right" /> gallery{" "}
            </a>
            <a href="#blogs" className="links">
              {" "}
              <i className="fas fa-arrow-right" /> blogs{" "}
            </a>
          </div>
          <div className="box" data-aos="fade-up" data-aos-delay={450}>
            <h3>contact info</h3>
            <p>
              {" "}
              <i className="fas fa-map" /> Delhi, india{" "}
            </p>
            <p>
              {" "}
              <i className="fas fa-phone" /> +123-456-7890{" "}
            </p>
            <p>
              {" "}
              <i className="fas fa-envelope" /> travelwarrior@mail.com{" "}
            </p>
            <p>
              {" "}
              <i className="fas fa-clock" /> 7:00am - 10:00pm{" "}
            </p>
          </div>
          <div className="box" data-aos="fade-up" data-aos-delay={600}>
            <h3>newsletter</h3>
            <p>subscribe for latest updates</p>
            <form action>
              <input
                type="email"
                name
                placeholder="enter your email"
                className="email"
                id
              />
              <input type="submit" defaultValue="subscribe" className="btn" />
            </form>
          </div>
        </div>
      </section>
      <div className="credit">
        Coded by <span>The Webfix</span> | all rights reserved!
      </div>
    </div>
  )
}
export default Frooter;