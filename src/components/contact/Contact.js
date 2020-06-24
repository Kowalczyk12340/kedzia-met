import React, { Component } from "react";
import styled from "styled-components";
import logo1 from "../../images/kedzia.png";
import MapContainer from "./MapContainer";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ContactData = styled.div`
  h3 {
    margin: 0;
  }
  h4 {
    align-content: center;
    text-align: center;
    color: white;
    font-weight: bold;
    margin: 0 auto;
  }
  .wrapper {
    width: 100%;
    font-size: 22px;
    margin: 0 auto;
    overflow: hidden;
    max-width: 100vh;
    margin: 0;
    padding: 0;
    float: left;
    height: 100vh;
  }
  .wrapper .contact-data {
    width: 90%;
    height: 100vh;
    float: left;
    max-width: 40vh;
  }
  .wrapper .div {
    min-height: 60px;
  }
  .wrapper .contact-data .header {
    width: 70%;
    height: auto;
    margin-top: 1em;
    margin: 0 auto;
  }
  .wrapper .contact-data .info-wrapper {
    display: inline;
    padding: 8px;
    text-align: center;
    width: 60%;
  }
  .wrapper .contact-data .info {
    display: inline;
    padding: 6px;
    margin-bottom: 5px;
  }
  .wrapper .contact-data .info a {
    color: white;
  }
  .wrapper .contact-data {
    float: left;
    width: 50%;
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
    color: white;
    height: 100vh;
  }
  .map {
    float: left;
    overflow: hidden;
  }
  @media screen and (min-width: 421px) and (max-width: 570px) {
    .wrapper .contact-data {
      float: none;
      width: auto;
    }
    .wrapper .info-wrapper {
      height: 100%;
      font-size: 24px;
    }
    .wrapper .contact-data {
      height: 100%;
    }
  }

  @media screen and (max-width: 390px) {
    .wrapper .contact-data {
      float: none;
      width: auto;
    }
    .wrapper .info-wrapper {
      height: 100%;
      font-size: 24px;
    }
    .wrapper .contact-data {
      height: 100%;
    }
  }
  @media screen and (min-width: 571px) and (max-width: 800px) {
    .wrapper .contact-data {
      float: none;
      width: auto;
      margin: 0 auto;
    }
    .wrapper {
      font-size: 20px;
    }
    h4 {
      text-align: center;
    }
  }
  @media screen and (min-width: 800px) and (max-width: 960px) {
    .header {
      max-width: 300px;
      height: auto;
    }
    .wrapper {
      font-size: 20px;
    }
  }
  h1 {
    text-align: center;
    text-shadow: grey;
    font-weight: bold;
    font-size: 34px;
    text-decoration: none;
  }
  p {
    text-align: center;
    letter-spacing: initial;
    padding: 5px;
  }
  .contactDetails {
    text-decoration: none;
    cursor: pointer;
  }
`;
class Contact extends Component {
  static defaultProps = {
    center: {
      lat: 51.714031,
      lng: 18.547956,
    },
    zoom: 12,
  };

  render() {
    return (
      <ContactData>
        <div className="wrapper">
          <div className="contact-data">
            <img className="header" src={logo1} />
            <h1>ZPHU KĘDZIA-MET</h1>
            <h3>Marek Kędzia</h3>
            <div className="info-wrapper">
              <div className="info">
                <h3>Adres</h3>
                <i class="fa fa-home"></i>
                Wacławów 24
                <br />
                98-215 Goszczanów
              </div>
              <br />
              <div className="info">
                <h3>Telefon</h3>
                Modernizacja
                <br />
                <i className="fa fa-phone"></i>
                <b>608 473 406</b>
                <br />
                Zamówienia
                <br /> <i className="fa fa-phone"></i>
                <b>739 082 982</b>
              </div>
              <br />
            </div>
            <div className="info-wrapper">
              <div className="info">
                <h3>Adres E-mail</h3>
                <i class="fa fa-envelope-open-o" aria-hidden="true"></i>

                <a className="contactDetails" href="#">
                  kedzia-met@wp.pl
                </a>
              </div>
              <br />
              <div className="info">
                <h3>Dostępność</h3>
                Pon - Pt
                <br /> 8:00 - 16:00
                <br /> Sob - Ndz <br /> Nieczynne
              </div>
              <br />
            </div>
            <br />
          </div>
          <div className="map">
            <MapContainer />
          </div>
        </div>
      </ContactData>
    );
  }
}

export default Contact;
