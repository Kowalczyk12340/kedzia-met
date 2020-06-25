import React, { Component } from "react";
import styled from "styled-components";
import logo1 from "../../images/kedzia.png";
import MapContainer from "./MapContainer";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ContactData = styled.div`
  .header {
    height: auto;
    width: 15em;
  }
  .contact-data a {
    color: white;
    text-decoration: none;
  }

  .contact-data {
    padding: 10px;
    color: white;
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
  }

  @media screen and (min-width: 650px) {
    .contact-data {
      min-height: 100vh;
      float: left;
      font-size: 18px;
      margin-bottom: 30px;
    }
    .map {
      float: left;
    }
  }
  @media screen and (min-width: 366px) and (max-width: 649px) {
    .contact-data {
      font-size: 24px;
    }
  }
  @media screen and (max-width: 365px) {
    .header {
      width: 12em;
    }
    .contact-data {
      font-size: 24px;
    }
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
