import React from "react";
import styled from "styled-components";
import photo from "../../images/spawacz.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import logo1 from "../../images/kedzia.png";
import { Link } from "react-router-dom";

const LandingContainer = styled.div`
  .mainContainer {
    background: white;
    width: 90%;
    margin: 0 auto;
    margin-top: 1em;
    margin-bottom: 1em;
    opacity: 0.8;
    padding: 1em;
    border-radius: 5%;
  }

  .header {
    width: 50%;
    height: auto;
    margin: 25px 0 auto;
  }
  h3 {
    text-align: center;
    text-shadow: grey;
    font-weight: bold;
    font-size: 21px;
    text-decoration: none;
  }
  /* Two images containers (use 50% for two, etc) */
  .column {
    float: left;
    width: 50%;
    padding: 5px;
  }
  /* Clear floats after image containers */
  .row::after {
    content: "";
    clear: both;
    display: table;
  }
  .row {
    display: flex;
    width: 80%;
    margin: 0 auto;
  }

  p {
    text-align: justify;
    text-shadow: gray;
    font-size: 20px;
  }

  .column {
    flex: 40%;
    padding: 5px;
  }
  .photo-item {
    width: 100%;
  }
  .fb-txt {
    text-align: center;
    font-weight: bold;
  }
  /* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 720px) {
    .column {
      width: 100%;
    }
    .row {
      display: block;
      width: 80%;
      margin: 0 auto;
    }
    .fb-txt {
      text-align: center;
      font-weight: bold;
    }
  }
  @media screen and (min-width: 1020px) {
    .header {
      width: 30%;
    }
  }
`;

export const Landing = () => {
  return (
    <LandingContainer>
      <div className="mainContainer">
        <Link to="/">
          <img className="header" src={logo1} />
        </Link>
        <h3>Zapraszamy do odwiedzenia naszej strony!</h3>
        <div className="row">
          <div className="column">
            <p>
              Nasza firma została założona w październiku 2013 roku. Pomysł
              narodził się w małym garażu. Z czasem widać było spore
              zainteresowanie naszą działalnością i ciągły wzrost nowych
              klientów. Postanowiliśmy się więc rozbudować i w ten sposób
              poszerzyć zakres naszych usług. Wszystko co robimy jest z myślą o
              naszych odbiorcach. Staramy się by każdy z nich był zadowolony.
              Wszystkie nasze maszyny wykonujemy bardzo dokładnie z dużą
              dbałością o szczegóły. Jakość i trwałość naszych usług podwyższa
              fakt, że wszystkie elementy są piaskowane. Nasza firma wykonuje
              również specjalne zamówienia naszych klientów lub oferujemy
              maszyny przez nas już wykonane, które znajdziecie państwo na
              naszej stronie.
            </p>
          </div>
          <div className="column">
            <img className="photo-item" src={photo} />
          </div>
        </div>
        <a href="https://www.facebook.com/">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <br />
        <h7 className="fb-txt">Odwiedź naszą stronę Facebook-ową!</h7>
      </div>
    </LandingContainer>
  );
};
