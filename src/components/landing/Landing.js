import React from "react";
import styled from "styled-components";
import photo from "../../images/spawacz.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import logo1 from "../../images/kedzia.png";
import { Link } from "react-router-dom";

const LandingContainer = styled.div`
  .header {
    width: 100%;
    height: auto;
    margin: 25px 0 auto;
    float: left;
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
    font-size: 20px;
  }

  .column {
    flex: 35%;
    padding: 5px;
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
`;

export const Landing = () => {
  return (
    <LandingContainer>
      <div className="mainContainer">
        <div>
          <img className="photo" src={photo} />
        </div>
        <div className="row">
          <div className="column">
            <Link to="/">
              <img className="header" src={logo1} />
            </Link>
          </div>
          <div className="column">
            <h3>PPHU KĘDZIA-MET</h3>
            <p>
              Rzetelnie wykonujemy swoją pracę, co pozwala nam się rozwijać i
              zyskiwać nowych klientów. Zapraszamy do obejrzenia naszej strony
              internetowej.
            </p>
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
