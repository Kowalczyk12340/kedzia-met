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
  }
  .wrapper .contact-data .header {
    width: 16em;
    height: auto;
    margin-top: 1em;
  }

  .wrapper .contact-data .info {
    float: left;
    padding: 2em;
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
      max-height: 700px;
    }
    .wrapper .info-wrapper {
      max-height: 400px;
    }
    .contact-data {
      max-height: 700px;
    }
  }

  @media screen and (max-width: 570px) {
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
  @media screen and (max-width: 400px) {
    .header {
      max-width: 250px;
      height: auto;
    }
  }

  @media screen and (min-width: 570px) and (max-width: 800px) {
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
      max-height: 400px;
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
    margin-bottom: 20px;
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
            <div className="info-wrapper">
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
