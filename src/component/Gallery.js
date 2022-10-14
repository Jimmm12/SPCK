import React from 'react';

const Gallery = () => {
  return (
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
  
  );
};

export default Gallery;
