import React from "react";
import styled from "styled-components";
import Gallery from "react-grid-gallery";

const GalleryContainer = styled.div`
  .gallery-container {
    width: 90%;
    margin: auto;
    margin-top: 1em;
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

export const PhotoGallery = () => {
  return (
    <GalleryContainer>
      <div className="gallery-container">
        <Gallery images={IMAGES} />
      </div>
    </GalleryContainer>
  );
};
