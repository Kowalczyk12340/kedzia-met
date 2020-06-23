import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import przyczepa from "../../images/przyczepa.jpg";
import przyczepa1 from "../../images/przyczepa1.jpg";
import przyczepa2 from "../../images/przyczepa2.jpg";
import przyczepa3 from "../../images/przyczepa3.jpg";
import sadzarka from "../../images/sadzarka.JPG";
import sadzarka1 from "../../images/sadzarka1.JPG";
import wal from "../../images/wal.jpg";
import wal1 from "../../images/wal1.jpg";
import { Link } from "react-router-dom";

const ModernizationItem = styled.div`
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
    width: 90%;
    height: 80px;
    color: white;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  h3 {
    margin-top: 3em;
    text-align: center;
    text-shadow: grey;
    font-weight: bold;
    font-size: 28px;
    text-decoration: none;
  }
  p {
    text-align: justify;
    text-shadow: grey;
    font-weight: cursive;
    font-size: 22px;
    width: 90%;
    margin: 0 auto;
  }
  .photopage {
    width: 90%;
  }
  .add {
    color: black;
    cursor: pointer;
    text-decoration: none;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: black;
    font-weight: bold;
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
  .column {
    flex: 40%;
    padding: 5px;
  }
  .fb-txt {
    font-size: 23px;
  }
  /* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 1100px) {
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

export const Modernization = () => {
  return (
    <ModernizationItem>
      <h1>Modernizacja</h1>
      <p>
        Maszyny wykonywane są pod zamówienie klienta. Są to w większości maszyny
        modernizowane. Wszystkie elementy są dokładnie piaskowane co wpływa na
        jakość i trwałość wykonanej usługi. Szczegóły techniczne do uzgodnienia.
      </p>
      <h3>
        <Link className="add" to="/gallery" className="add">
          Przyczepy Rolnicze
        </Link>
      </h3>
      <div className="row">
        <div className="column">
          <img className="photopage" src={przyczepa} />
        </div>
        <div className="column">
          <img className="photopage" src={przyczepa2} />
        </div>
      </div>
      <h3>
        <Link className="add" to="/gallery" className="add">
          Przyczepy do Bali
        </Link>
      </h3>
      <div className="row">
        <div className="column">
          <img className="photopage" src={przyczepa1} />
        </div>
        <div className="column">
          <img className="photopage" src={przyczepa3} />
        </div>
      </div>
      <h3>
        <Link className="add" to="/gallery" className="add">
          Sadzarki
        </Link>
      </h3>
      <div className="row">
        <div className="column">
          <img className="photopage" src={sadzarka} />
        </div>
        <div className="column">
          <img className="photopage" src={sadzarka1} />
        </div>
      </div>
      <h3>
        <Link className="add" to="/gallery" className="add">
          Wały
        </Link>
      </h3>
      <div className="row">
        <div className="column">
          <img className="photopage" src={wal} />
        </div>
        <div className="column">
          <img className="photopage" src={wal1} />
        </div>
      </div>
      <h3>Zapraszamy do współpracy!</h3>
      <a href="https://m.facebook.com/K%C4%99dzia-Met-112339333860499/?ref=bookmarks">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <br />
      <h7 className="fb-txt">Odwiedź naszą stronę Facebook-ową!</h7>
      <br />
      <br />
      <br />
    </ModernizationItem>
  );
};
