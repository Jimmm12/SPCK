import React from "react";

export const Home = () => {
  return (
    <div>
      {/* home section starts  */}
      <section className="home" id="home">
        <div className="content">
          <span data-aos="fade-up" data-aos-delay={150}>
            Let's Start
          </span>
          <h3 data-aos="fade-up" data-aos-delay={300}>
            World Tour With Us
          </h3>
          <p data-aos="fade-up" data-aos-delay={450}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus quia illum quod perspiciatis harum
          </p>
          <a data-aos="fade-up" data-aos-delay={600} href="#" className="btn">
            book now
          </a>
        </div>
      </section>
      {/* home section ends */}
      {/* booking form section starts  */}
      <section className="book-form" id="book-form">
        <form action>
          <div data-aos="zoom-in" data-aos-delay={150} className="inputBox">
            <span>you are planning?</span>
            <input type="text" placeholder="place name" defaultValue />
          </div>
          <div data-aos="zoom-in" data-aos-delay={300} className="inputBox">
            <span>When looking for ?</span>
            <input type="date" defaultValue />
          </div>
          <div data-aos="zoom-in" data-aos-delay={450} className="inputBox">
            <span>Total members?</span>
            <input
              type="number"
              placeholder="number of travelers"
              defaultValue
            />
          </div>
          <input
            data-aos="zoom-in"
            data-aos-delay={600}
            type="submit"
            defaultValue="find now"
            className="btn"
          />
        </form>
      </section>
      {/* booking form section ends */}
      {/* about section starts  */}
      <section className="about" id="about">
        <div
          className="video-container"
          data-aos="fade-right"
          data-aos-delay={300}
        >
          <video src="images/about.mp4" muted autoPlay loop className="video" />
        </div>
        <div className="content" data-aos="fade-left" data-aos-delay={600}>
          <span>Who we are ?</span>
          <h3>A smiling agent for you</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugit
            repellat error deserunt nam aperiam odit libero quos provident.
            Nostrum?
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>
      </section>
      {/* about section ends */}
      {/* services section starts  */}
      <section className="services" id="services">
        <div className="heading">
          <span>our services</span>
          <h1>Cost Effective</h1>
        </div>
        <div className="box-container">
          <div className="box" data-aos="zoom-in-up" data-aos-delay={150}>
            <i className="fas fa-globe" />
            <h3>worldwide</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              cumque.
            </p>
          </div>
          <div className="box" data-aos="zoom-in-up" data-aos-delay={300}>
            <i className="fas fa-hiking" />
            <h3>adventures</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              cumque.
            </p>
          </div>
          <div className="box" data-aos="zoom-in-up" data-aos-delay={450}>
            <i className="fas fa-utensils" />
            <h3>food &amp; drinks</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              cumque.
            </p>
          </div>
          <div className="box" data-aos="zoom-in-up" data-aos-delay={600}>
            <i className="fas fa-hotel" />
            <h3>affordable hotels</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              cumque.
            </p>
          </div>
          <div className="box" data-aos="zoom-in-up" data-aos-delay={750}>
            <i className="fas fa-wallet" />
            <h3>affordable price</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              cumque.
            </p>
          </div>
          <div className="box" data-aos="zoom-in-up" data-aos-delay={900}>
            <i className="fas fa-headset" />
            <h3>24/7 support</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              cumque.
            </p>
          </div>
        </div>
      </section>
      {/* services section ends */}
      {/* destination section starts  */}
      <section className="destination" id="destination">
        <div className="heading">
          <span>our destination</span>
          <h1>Keep looking up</h1>
        </div>
        <div className="box-container">
          <div className="box" data-aos="fade-up" data-aos-delay={150}>
            <div className="image">
              <img src="images/des-1.jpg" alt="" />
            </div>
            <div className="content">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              <a href="#">
                read more <i className="fas fa-angle-right" />
              </a>
            </div>
          </div>
          <div className="box" data-aos="fade-up" data-aos-delay={300}>
            <div className="image">
              <img src="images/des-2.jpg" alt="" />
            </div>
            <div className="content">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              <a href="#">
                read more <i className="fas fa-angle-right" />
              </a>
            </div>
          </div>
          <div className="box" data-aos="fade-up" data-aos-delay={450}>
            <div className="image">
              <img src="images/des-3.jpg" alt="" />
            </div>
            <div className="content">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              <a href="#">
                read more <i className="fas fa-angle-right" />
              </a>
            </div>
          </div>
          <div className="box" data-aos="fade-up" data-aos-delay={600}>
            <div className="image">
              <img src="images/des-4.jpg" alt="" />
            </div>
            <div className="content">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              <a href="#">
                read more <i className="fas fa-angle-right" />
              </a>
            </div>
          </div>
          <div className="box" data-aos="fade-up" data-aos-delay={750}>
            <div className="image">
              <img src="images/des-5.jpg" alt="" />
            </div>
            <div className="content">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              <a href="#">
                read more <i className="fas fa-angle-right" />
              </a>
            </div>
          </div>
          <div className="box" data-aos="fade-up" data-aos-delay={900}>
            <div className="image">
              <img src="images/des-6.jpg" alt="" />
            </div>
            <div className="content">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              <a href="#">
                read more <i className="fas fa-angle-right" />
              </a>
            </div>
          </div>
          <div className="box" data-aos="fade-up" data-aos-delay={1150}>
            <div className="image">
              <img src="images/des-7.jpg" alt="" />
            </div>
            <div className="content">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              <a href="#">
                read more <i className="fas fa-angle-right" />
              </a>
            </div>
          </div>
          <div className="box" data-aos="fade-up" data-aos-delay={1300}>
            <div className="image">
              <img src="images/des-8.jpg" alt="" />
            </div>
            <div className="content">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              <a href="#">
                read more <i className="fas fa-angle-right" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* destination section ends */}
      {/* gallery section starts  */}
      <section className="gallery" id="gallery">
        <div className="heading">
          <span>our gallery</span>
          <h1>Memories last forever</h1>
        </div>
        <div className="box-container">
          <div className="box" data-aos="zoom-in-up" data-aos-delay={150}>
            <img src="images/gallery-img-1.png" alt="" />
            <span>travel spot</span>
            <h3>iceland</h3>
          </div>
          <div className="box" data-aos="zoom-in-up" data-aos-delay={300}>
            <img src="images/gallery-img-2.png" alt="" />
            <span>travel spot</span>
            <h3>greenland</h3>
          </div>
          <div className="box" data-aos="zoom-in-up" data-aos-delay={450}>
            <img src="images/gallery-img-3.png" alt="" />
            <span>travel spot</span>
            <h3>alaska</h3>
          </div>
          <div className="box" data-aos="zoom-in-up" data-aos-delay={150}>
            <img src="images/gallery-img-4.png" alt="" />
            <span>travel spot</span>
            <h3>thailand</h3>
          </div>
          <div className="box" data-aos="zoom-in-up" data-aos-delay={300}>
            <img src="images/gallery-img-5.png" alt="" />
            <span>travel spot</span>
            <h3>brazil</h3>
          </div>
          <div className="box" data-aos="zoom-in-up" data-aos-delay={450}>
            <img src="images/gallery-img-6.png" alt="" />
            <span>travel spot</span>
            <h3>maldive</h3>
          </div>
          <div className="box" data-aos="zoom-in-up" data-aos-delay={150}>
            <img src="images/gallery-img-7.png" alt="" />
            <span>travel spot</span>
            <h3>iceland</h3>
          </div>
          <div className="box" data-aos="zoom-in-up" data-aos-delay={300}>
            <img src="images/gallery-img-8.png" alt="" />
            <span>travel spot</span>
            <h3>alaska</h3>
          </div>
          <div className="box" data-aos="zoom-in-up" data-aos-delay={450}>
            <img src="images/gallery-img-9.png" alt="" />
            <span>travel spot</span>
            <h3>maldive</h3>
          </div>
        </div>
      </section>
      {/* gallery section ends */}
      {/* review section starts  */}
      <section className="review">
        <div
          className="box-container"
          data-aos="fade-right"
          data-aos-delay={300}
        >
          <div className="box">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div className="user">
              <img src="images/pic-1.png" alt="" />
              <div className="info">
                <h3>john deo</h3>
                <span>designer</span>
              </div>
            </div>
          </div>
          <div className="box">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div className="user">
              <img src="images/pic-2.png" alt="" />
              <div className="info">
                <h3>john deo</h3>
                <span>designer</span>
              </div>
            </div>
          </div>
          <div className="box">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div className="user">
              <img src="images/pic-3.png" alt="" />
              <div className="info">
                <h3>john deo</h3>
                <span>designer</span>
              </div>
            </div>
          </div>
          <div className="box">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div className="user">
              <img src="images/pic-4.png" alt="" />
              <div className="info">
                <h3>john deo</h3>
                <span>designer</span>
              </div>
            </div>
          </div>
        </div>
        <div className="content" data-aos="fade-left" data-aos-delay={600}>
          <span>testimonials</span>
          <h3>good news from our clients</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            laudantium corporis fugiat quae unde perspiciatis similique ab modi
            enim consequatur aperiam cumque distinctio facilis sit, debitis
            possimus asperiores non harum.
          </p>
        </div>
      </section>
      {/* review section ends */}
      {/* banner section starts  */}
      <div className="banner">
        <div className="content" data-aos="zoom-in-up" data-aos-delay={300}>
          <span>start your adventures</span>
          <h3>Let's Explore World With Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            voluptatum praesentium amet quibusdam quam officia suscipit odio.
          </p>
          <a href="#book-form" className="btn">
            book now
          </a>
        </div>
      </div>
      {/* banner section ends */}
      {/* blogs section starts  */}
      <section className="blogs" id="blogs">
        <div className="heading">
          <span>blogs &amp; posts</span>
          <h1>Experience in words</h1>
        </div>
        <div className="box-container">
          <div className="box" data-aos="fade-up" data-aos-delay={150}>
            <div className="image">
              <img src="images/blog-1.jpg" alt="" />
            </div>
            <div className="content">
              <a href="#" className="link">
                One Mile At A Time.
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, natus!
              </p>
              <div className="icon">
                <a href="#">
                  <i className="fas fa-clock" /> 21st may, 2021
                </a>
                <a href="#">
                  <i className="fas fa-user" /> by admin
                </a>
              </div>
            </div>
          </div>
          <div className="box" data-aos="fade-up" data-aos-delay={300}>
            <div className="image">
              <img src="images/blog-2.jpg" alt="" />
            </div>
            <div className="content">
              <a href="#" className="link">
                Local Adventurer
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, natus!
              </p>
              <div className="icon">
                <a href="#">
                  <i className="fas fa-clock" /> 21st may, 2021
                </a>
                <a href="#">
                  <i className="fas fa-user" /> by admin
                </a>
              </div>
            </div>
          </div>
          <div className="box" data-aos="fade-up" data-aos-delay={450}>
            <div className="image">
              <img src="images/blog-3.jpg" alt="" />
            </div>
            <div className="content">
              <a href="#" className="link">
                The Blonde Abroad
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, natus!
              </p>
              <div className="icon">
                <a href="#">
                  <i className="fas fa-clock" /> 21st may, 2021
                </a>
                <a href="#">
                  <i className="fas fa-user" /> by admin
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
