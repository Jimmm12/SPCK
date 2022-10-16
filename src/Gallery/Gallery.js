import { useEffect, useState } from "react";
import ListGallery from "./listGallery";

const Gallery = () => {
  const [ListProducts, setListShopProducts] = useState([]);
  useEffect(() => {
    fetch("https://633ae6bf471b8c395577ddb4.mockapi.io/api/v1/dsad")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setListShopProducts(data);
      });
  }, []);

  return (
    <section className="gallery" id="gallery">
      <div className="heading">
        <span>our gallery</span>
        <h1>Memories last forever</h1>
      </div>
      <div className="box-container">
        {ListProducts.map((list) => {
          return (
            <ListGallery
              title={list.title}
              name={list.name}
              image={list.image}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
