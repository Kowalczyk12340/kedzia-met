import React from "react";
import styled from "styled-components";
import logo from "../../images/kedzia.png";
import photo from "../../images/spawacz.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import logo1 from "../../images/kedzia.png";
import { Link } from "react-router-dom";

const LandingContainer = styled.div`
  .header {
    margin: 0 auto;
    width: 80%;
    height: auto;
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
`;

export const Landing = () => {
  return (
    <LandingContainer>
      <Link to="/">
        <img className="header" src={logo1} />
      </Link>
      <h3>Zapraszamy do odwiedzenia naszej strony!</h3>
      <div className="row">
        <div className="column">
          <p>
            Nasza firma zajmuje się szeroko pojętą modernizacją, mechaniką, oraz
            budową i renowacją maszyn rolniczych. Realizujemy także zamówienia
            dotyczące różnych maszyn, oraz ich części. Jesteśmy uznaną i godną
            zaufania firmą na lokalnym rynku. Więcej informacji uzyskacie
            Państwo na tej stronie internetowej lub na naszym fanpage-u na
            Facebooku, do którego odnośnik jest poniżej.
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
    </LandingContainer>
  );
};
