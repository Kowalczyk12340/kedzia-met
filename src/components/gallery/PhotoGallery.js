import React from "react";
import styled from "styled-components";
import Gallery from "react-grid-gallery";

const GalleryContainer = styled.div`
  h1 {
    text-align: center;
    text-shadow: grey;
    font-weight: bold;
    font-size: 44px;
    background: #e52d27; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #b31217,
      #e52d27
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #b31217,
      #e52d27
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    width: 100%;
    height: 80px;
    color: white;
    margin: 0 auto;
    margin-bottom: 30px;
  }
  h3 {
    text-align: center;
    text-shadow: grey;
    font-weight: bold;
    font-size: 18px;
    text-decoration: none;
  }
  .gallery-container {
    width: 90%;
    margin: 0 auto;
    display: grid;
  }
`;

const IMAGES = [
  {
    src: "https://imgur.com/WidgNrb.jpg",
    thumbnail: "https://imgur.com/WidgNrb.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 204,
  },
  {
    src: "https://imgur.com/Ya4j4qD.jpg",
    thumbnail: "https://imgur.com/Ya4j4qD.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: "https://imgur.com/raIiA4h.jpg",
    thumbnail: "https://imgur.com/raIiA4h.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 186,
  },
  {
    src: "https://imgur.com/ZMI0eIf.jpg",
    thumbnail: "https://imgur.com/ZMI0eIf.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 186,
  },
  {
    src: "https://imgur.com/mYqbsv9.jpg",
    thumbnail: "https://imgur.com/mYqbsv9.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 186,
  },
  {
    src: "https://imgur.com/TIKXHM2.jpg",
    thumbnail: "https://imgur.com/TIKXHM2.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 192,
  },
  {
    src: "https://imgur.com/4IBanPS.jpg",
    thumbnail: "https://imgur.com/4IBanPS.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 186,
  },
  {
    src: "https://imgur.com/WTFJQzt.jpg",
    thumbnail: "https://imgur.com/WTFJQzt.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: "https://imgur.com/07lEOAL.jpg",
    thumbnail: "https://imgur.com/07lEOAL.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 186,
  },
  {
    src: "https://imgur.com/4wcZLyP.jpg",
    thumbnail: "https://imgur.com/4wcZLyP.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://imgur.com/3JoVvK8.jpg",
    thumbnail: "https://imgur.com/3JoVvK8.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 192,
  },
  {
    src: "https://imgur.com/68xLavz.jpg",
    thumbnail: "https://imgur.com/68xLavz.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 204, //
  },
  {
    src: "https://imgur.com/i36AaKj.jpg",
    thumbnail: "https://imgur.com/i36AaKj.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 186, //
  },
  {
    src: "https://imgur.com/WepgRRf.jpg",
    thumbnail: "https://imgur.com/WepgRRf.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 186,
  },
  {
    src: "https://imgur.com/kCvyJ7K.jpg",
    thumbnail: "https://imgur.com/kCvyJ7K.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 186,
  },
  {
    src: "https://imgur.com/ehXmR3D.jpg",
    thumbnail: "https://imgur.com/ehXmR3D.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: "https://imgur.com/fyOUDS7.jpg",
    thumbnail: "https://imgur.com/fyOUDS7.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://imgur.com/P03MqYD.jpg",
    thumbnail: "https://imgur.com/P03MqYD.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: "https://imgur.com/oJiQpJB.jpg",
    thumbnail: "https://imgur.com/oJiQpJB.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://imgur.com/AfL3jo0.jpg",
    thumbnail: "https://imgur.com/AfL3jo0.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://imgur.com/kUq7lNe.jpg",
    thumbnail: "https://imgur.com/kUq7lNe.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: "https://imgur.com/bYR3crK.jpg",
    thumbnail: "https://imgur.com/bYR3crK.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://imgur.com/k0r9EQl.jpg",
    thumbnail: "https://imgur.com/k0r9EQl.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 192,
  },
  {
    src: "https://imgur.com/APo8OpN.jpg",
    thumbnail: "https://imgur.com/APo8OpN.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 204,
  },
  {
    src: "https://imgur.com/uQO7PQ7.jpg",
    thumbnail: "https://imgur.com/uQO7PQ7.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 186,
  },
  {
    src: "https://imgur.com/Hn42ogq.jpg",
    thumbnail: "https://imgur.com/Hn42ogq.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 186,
  },
  {
    src: "https://imgur.com/BDvKrQN.jpg",
    thumbnail: "https://imgur.com/BDvKrQN.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 186,
  },
  {
    src: "https://imgur.com/8984VtY.jpg",
    thumbnail: "https://imgur.com/8984VtY.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 186,
  },
  {
    src: "https://imgur.com/tVGP2EI.jpg",
    thumbnail: "https://imgur.com/tVGP2EI.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 186,
  },
  {
    src: "https://imgur.com/mRZhUOI.jpg",
    thumbnail: "https://imgur.com/mRZhUOI.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 186,
  },
  {
    src: "https://imgur.com/FLet5zW.jpg",
    thumbnail: "https://imgur.com/FLet5zW.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 186,
  },
  {
    src: "https://imgur.com/Rm5z4aS.jpg",
    thumbnail: "https://imgur.com/Rm5z4aS.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 186,
  },
  {
    src: "https://imgur.com/5QomaVQ.jpg",
    thumbnail: "https://imgur.com/5QomaVQ.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 186,
  },
  {
    src: "https://imgur.com/I6GbbTB.jpg",
    thumbnail: "https://imgur.com/I6GbbTB.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 186,
  },
  {
    src: "https://imgur.com/yZ2cTXy.jpg",
    thumbnail: "https://imgur.com/yZ2cTXy.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 186,
  },
  {
    src: "https://imgur.com/1zAMlFj.jpg",
    thumbnail: "https://imgur.com/1zAMlFj.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 186,
  },
  {
    src: "https://imgur.com/zKTZAJA.jpg",
    thumbnail: "https://imgur.com/zKTZAJA.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 186,
  },
  {
    src: "https://imgur.com/p58I14u.jpg",
    thumbnail: "https://imgur.com/p58I14u.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 186,
  },
  {
    src: "https://imgur.com/Ky8Shp9.jpg",
    thumbnail: "https://imgur.com/Ky8Shp9.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 186,
  },
  {
    src: "https://imgur.com/ln9ocwp.jpg",
    thumbnail: "https://imgur.com/ln9ocwp.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 186,
  },
  {
    src: "https://imgur.com/sTfRVIQ.jpg",
    thumbnail: "https://imgur.com/sTfRVIQ.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: "https://imgur.com/qNHM8fn.jpg",
    thumbnail: "https://imgur.com/qNHM8fn.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://imgur.com/obnqyr5.jpg",
    thumbnail: "https://imgur.com/obnqyr5.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://imgur.com/vxNuSyR.jpg",
    thumbnail: "https://imgur.com/vxNuSyR.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: "https://imgur.com/uZeHdpz.jpg",
    thumbnail: "https://imgur.com/uZeHdpz.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://imgur.com/LIx7D6r.jpg",
    thumbnail: "https://imgur.com/LIx7D6r.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://imgur.com/DZJWoEh.jpg",
    thumbnail: "https://imgur.com/DZJWoEh.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: "https://imgur.com/AmJTzLj.jpg",
    thumbnail: "https://imgur.com/AmJTzLj.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://imgur.com/tnvrbxM.jpg",
    thumbnail: "https://imgur.com/tnvrbxM.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://imgur.com/rMdIJaI.jpg",
    thumbnail: "https://imgur.com/rMdIJaI.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: "https://imgur.com/J302UaQ.jpg",
    thumbnail: "https://imgur.com/J302UaQ.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://imgur.com/x1k7grB.jpg",
    thumbnail: "https://imgur.com/x1k7grB.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
];

export const PhotoGallery = () => {
  return (
    <GalleryContainer>
      <div className="gallery-container">
        <h1>Galeria</h1>
        <Gallery images={IMAGES} />
      </div>
    </GalleryContainer>
  );
};
