import React from "react";
import styled from "styled-components";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1Ijoia2FtaWxrbGVzdGEiLCJhIjoiY2tiMThxdjBwMGZqYTJzcWpjeWF0d2c4ayJ9.-VfsJEB7VWDzOyW5A3heDg",
});

const ContactData = styled.div`
  .wrapper {
    overflow: hidden;
    width: 90%;
    margin: auto;
    margin-bottom: 30px;
  }

  .wrapper div {
    min-height: 200px;
    padding: 10px;
  }
  .wrapper .contact-data {
    float: left;
    margin-right: 20px;
  }
  .wrapper .map {
    overflow: hidden;
    margin: 10px;
    max-height: 600px;
  }

  @media screen and (max-width: 800px) {
    .wrapper .contact-data {
      float: none;
      margin-right: 0;
      width: auto;
    }
  }
  h1 {
    text-align: center;
    text-shadow: grey;
    font-weight: bold;
    font-size: 34px;
    text-decoration: underline;
  }
  h7 {
    text-decoration: underline;
    font-weight: bold;
    padding: 10px;
  }
  p {
    text-align: center;
    letter-spacing: initial;
    padding: 5px;
  }

  .contactDetails {
    color: black;
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 20px;
  }
`;
export const Contact = () => {
  return (
    <ContactData>
      <div className="wrapper">
        <div className="contact-data">
          <h1>Dane Kontaktowe</h1>
          <h2>ZPHU KĘDZIA-MET</h2>
          <h3>Dział modernizacji:</h3>
          <p>
            <h7>Marek Kędzia</h7>
            <br /> Numer telefonu: 608 473 406
          </p>
          <h3>Dział zamówień:</h3>
          <p>
            <h7>Mateusz Kędzia</h7>
            <br /> Numer telefonu: 739 082 982
          </p>
          <h3>Firmowy Adres E-mail:</h3>
          <a className="contactDetails" href="#">
            kedzia-met@wp.pl
          </a>
        </div>
        <div className="map">
          <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
              height: "100vh",
              width: "100vw",
            }}
            center={[18.547944, 51.738649]}
            zoom={[13]}
          >
            <Layer
              type="symbol"
              id="marker"
              layout={{ "icon-image": "marker-15" }}
            >
              <Feature coordinates={[18.547944, 51.753849]} />
            </Layer>
          </Map>
        </div>
      </div>
    </ContactData>
  );
};
