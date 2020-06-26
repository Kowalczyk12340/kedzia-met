import React from "react";
import styled from "styled-components";
import photo from "../../images/spawacz.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import logo1 from "../../images/kedzia.png";
import { Link } from "react-router-dom";

const LandingContainer = styled.div`
  .container {
    width: 100%;
  }
  .content {
    background-image: url(${photo});
    width: 100%;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title {
    border-radius: 19%;
    background-color: rgba(251, 251, 251, 0.35);
    width: 100%;
  }
  h1 {
    text-align: center;
    text-shadow: grey;
    font-weight: bold;
    font-size: 100px;
    color: white;
    width: 100%;
    margin: 0;
    vertical-align: center;
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
    vertical-align: middle;
  }
  .header {
    width: 60%;
    height: auto;
    margin: 0 auto;
    display: block;
    margin-top: 1em;
  }
  h3 {
    text-align: center;
    text-shadow: grey;
    font-weight: bold;
    font-size: 41px;
    text-decoration: none;
  }
  /* Two images containers (use 50% for two, etc) */
  .column {
    margin: 0 auto;
    width: 50%;
    padding: 5px;
    display: block;
  }
  .row {
    display: grid;
    width: 90%;
    margin: 0 auto;
  }

  .photo {
    width: 100%;
    height: auto;
  }
  p {
    text-align: justify;
    text-shadow: gray;
    font-size: 26px;
  }

  .column {
    flex: 35%;
    padding: 5px;
    display: block;
    width: 80%;
  }
  .photo-item {
    width: 100%;
  }
  .fb-txt {
    margin-top: 30px;
    font-size: 23px;
    text-align: center;
    font-weight: bold;
  }
  @media screen and (max-width: 1020px) {
    h1 {
      font-size: 50px;
    }
    .header {
      width: 70%;
      height: auto;
      margin: 0 auto;
      display: block;
      margin-top: 1em;
    }
  }
  @media screen and (max-width: 1220px) and (min-width: 1020px) {
    h1 {
      font-size: 60px;
    }
    .header {
      width: 60%;
    }
  }
`;

export const Landing = () => {
  return (
    <LandingContainer>
      <div className="container">
        <div className="content">
          <div className="title">
            <h1>Zakład Produkcyjno Handlowo Usługowy</h1>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <Link to="/">
              <img className="header" src={logo1} />
            </Link>
          </div>
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
        </div>
        <a href="https://m.facebook.com/K%C4%99dzia-Met-112339333860499/?ref=bookmarks">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <br />
        <h7 className="fb-txt">Odwiedź naszą stronę Facebook-ową!</h7>
        <br />
        <br />
        <br />
      </div>
    </LandingContainer>
  );
};
