import React, { Component } from "react";
import styled from "styled-components";
import logo1 from "../../images/kedzia.png";
import MapContainer from "./MapContainer";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ContactData = styled.div`
  h3 {
    margin: 0;
  }

  .wrapper {
    overflow: hidden;
    width: 100%;
    font-size: 24px;
    margin: 0 auto;
  }
  .wrapper .contact-data .header {
    width: 16em;
    height: auto;
    margin-top: 0.75em;
  }

  .wrapper .contact-data .info {
    float: left;
    padding: 0.5em;
  }

  .wrapper .contact-data .info a {
    color: white;
  }

  .wrapper .contact-data .info-wrapper {
    display: inline-block;
  }

  .wrapper div {
    min-height: 200px;
  }
  .wrapper .contact-data {
    float: left;
    width: 40%;
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
  .wrapper .map {
    overflow: hidden;
  }

  @media only screen and (max-width: 600px) {
    .wrapper {
      max-height: 800px;
    }
    .wrapper .info-wrapper {
      max-height: 500px;
    }
    .contact-data {
      max-height: 700px;
    }
  }

  @media screen and (min-width: 421px) and (max-width: 570px) {
    .wrapper .contact-data {
      float: none;
      margin-right: 0;
      width: auto;
      max-height: 700px;
    }
    .wrapper {
      max-height: 700px;
    }
    .wrapper .info-wrapper {
      max-height: 400px;
    }
  }
  @media screen and (min-width: 391px) and (max-width: 420px) {
    .wrapper {
      max-height: 100%;
    }
    .wrapper .contact-data {
      float: none;
      margin-right: 0;
      width: auto;
    }
    .wrapper .info-wrapper {
      min-height: 90%;
    }
    .wrapper .contact-data .info {
      font-size: 21px;
    }
    .info {
      margin: 0 auto;
      position: flex;
      display: list-item;
      width: 28%;
    }
  }
  @media screen and (max-width: 390px) {
    .wrapper .contact-data {
      float: none;
      margin-right: 0;
      width: auto;
      max-height: 1100px;
    }
    .wrapper {
      max-height: 100%;
    }
    .wrapper .info-wrapper {
      min-height: 90%;
    }
    .wrapper .contact-data .info {
      font-size: 17px;
    }
    .info {
      margin: 0 auto;
      position: flex;
      display: list-item;
      width: 28%;
    }
  }

  @media screen and (min-width: 571px) and (max-width: 800px) {
    .wrapper .contact-data {
      float: none;
      margin-right: 0;
      width: auto;
      max-height: 500px;
    }
    .wrapper {
      max-height: 500px;
    }
    .wrapper .info-wrapper {
      max-height: 500px;
    }
  }

  @media screen and (min-width: 800px) and (max-width: 960px) {
    .header {
      max-width: 300px;
      height: auto;
    }
  }

  h1 {
    text-align: center;
    text-shadow: grey;
    font-weight: bold;
    font-size: 34px;
    text-decoration: underline;
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
    margin-bottom: 10px;
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
            <h3>Marek Kędzia</h3>
            <h4>ZPHU KĘDZIA-MET</h4>
            <div className="info-wrapper">
              <div className="info">
                <h3>Adres</h3>
                <i class="fa fa-home"></i>
                Wacławów 24
                <br />
                98-215 Goszczanów
              </div>
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
              <div className="info">
                <h3>Adres E-mail</h3>
                <i class="fa fa-envelope-open-o" aria-hidden="true"></i>

                <a className="contactDetails" href="#">
                  kedzia-met@wp.pl
                </a>
              </div>
            </div>
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
