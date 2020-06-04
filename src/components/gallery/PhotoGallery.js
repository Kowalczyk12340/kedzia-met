import React from "react";
import styled from "styled-components";
import Gallery from "react-grid-gallery";

const GalleryContainer = styled.div`
  h1 {
    text-align: center;
    text-shadow: grey;
    font-weight: bold;
    font-size: 34px;
    text-decoration: underline;
  }
  h3 {
    text-align: center;
    text-shadow: grey;
    font-weight: bold;
    font-size: 18px;
    text-decoration: none;
    margin-top: 25px;
  }
  .gallery-container {
    width: 90%;
    margin: auto;
    margin-top: 1em;
    display: grid;
  }
`;

const IMAGES = [
  {
    src: "https://i.imgur.com/CYvCxLMg.jpg",
    thumbnail: "https://i.imgur.com/CYvCxLMg.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "Tytul",
  },
  {
    src: "https://i.imgur.com/0BAVFXA.jpg",
    thumbnail: "https://i.imgur.com/0BAVFXA.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Tytul",
  },
  {
    src: "https://i.imgur.com/Cy2ElXm.jpg",
    thumbnail: "https://i.imgur.com/Cy2ElXm.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 192,
    caption: "Tytul",
  },
  {
    src: "https://i.imgur.com/hCtDSYv.jpg",
    thumbnail: "https://i.imgur.com/hCtDSYv.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 204,
    caption: "Tytul",
  },
  {
    src: "https://i.imgur.com/QuQGnvI.jpg",
    thumbnail: "https://i.imgur.com/QuQGnvI.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 186,
    caption: "Tytul",
  },
];

const IMAGES1 = [
  {
    src: "https://i.imgur.com/CYvCxLMg.jpg",
    thumbnail: "https://i.imgur.com/CYvCxLMg.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "Tytul",
  },
  {
    src: "https://i.imgur.com/0BAVFXA.jpg",
    thumbnail: "https://i.imgur.com/0BAVFXA.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Tytul",
  },
  {
    src: "https://i.imgur.com/Cy2ElXm.jpg",
    thumbnail: "https://i.imgur.com/Cy2ElXm.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 192,
    caption: "Tytul",
  },
  {
    src: "https://i.imgur.com/hCtDSYv.jpg",
    thumbnail: "https://i.imgur.com/hCtDSYv.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 204,
    caption: "Tytul",
  },
  {
    src: "https://i.imgur.com/QuQGnvI.jpg",
    thumbnail: "https://i.imgur.com/QuQGnvI.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 186,
    caption: "Tytul",
  },
];

const IMAGES2 = [
  {
    src: "https://i.imgur.com/CYvCxLMg.jpg",
    thumbnail: "https://i.imgur.com/CYvCxLMg.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "Tytul",
  },
  {
    src: "https://i.imgur.com/0BAVFXA.jpg",
    thumbnail: "https://i.imgur.com/0BAVFXA.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Tytul",
  },
  {
    src: "https://i.imgur.com/Cy2ElXm.jpg",
    thumbnail: "https://i.imgur.com/Cy2ElXm.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 192,
    caption: "Tytul",
  },
  {
    src: "https://i.imgur.com/hCtDSYv.jpg",
    thumbnail: "https://i.imgur.com/hCtDSYv.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 204,
    caption: "Tytul",
  },
  {
    src: "https://i.imgur.com/QuQGnvI.jpg",
    thumbnail: "https://i.imgur.com/QuQGnvI.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 186,
    caption: "Tytul",
  },
];

export const PhotoGallery = () => {
  return (
    <GalleryContainer>
      <div className="gallery-container">
        <h1>Sprawdź efekty naszej pracy!</h1>
        <h3>Podgarniacze</h3>
        <Gallery images={IMAGES} />
      </div>
      <div className="gallery-container">
        <br />
        <h3>Zamiatarki</h3>
        <Gallery images={IMAGES1} />
      </div>
      <div className="gallery-container">
        <br />
        <h3>Modernizacja Maszyn</h3>
        <Gallery images={IMAGES2} />
      </div>
      <br />
      <h3>Zapraszamy do współpracy!</h3>
    </GalleryContainer>
  );
};
