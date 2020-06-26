import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import formator from "../../images/formator.jpg";
import podgarniacz1 from "../../images/podgarniacz1.jpg";
import podgarniacz2 from "../../images/podgarniacz2.jpg";
import zamiatarka from "../../images/zamiatarka.jpg";
import konstrukcja from "../../images/konstrukcja.jpg";

const LandingOrders = styled.div`
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
    text-align: center;
    text-shadow: grey;
    margin: 0 auto;
    font-weight: bold;
    font-size: 28px;
    text-decoration: none;
  }
  .description {
    text-align: justify;
    text-shadow: grey;
    font-weight: cursive;
    font-size: 22px;
    width: 90%;
    display: inline-block;
    vertical-align: center;
  }
  .description1 {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  p {
    text-align: justify;
    text-shadow: grey;
    font-weight: cursive;
    font-size: 22px;
    width: 90%;
    margin: 0 auto;
    margin-left: 5%;
    margin-right: 5%;
  }
  #info-paragraph {
    margin: 0 auto;
    text-align: center;
  }
  .product {
    text-align: center;
    font-size: 20px;
    text-decoration: none;
    color: black;
    margin-top: 10px;
    margin-bottom: 15px;
  }
  .logotyp {
    height: 24px;
    width: auto;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: black;
    font-weight: bold;
  }
  .photopage {
    width: 60%;
    height: auto;
    display: flex;
    margin: 0 auto;
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
  .row1 {
    display: flex;
    width: 80%;
    margin: 0 auto;
  }
  .column {
    flex: 40%;
    padding: 5px;
  }
  .column1 {
    flex: 40%;
    padding: 5px;
    position: relative;
  }
  .centerr {
    margin: 0;
    position: absolute;
    font-size: 22px;
    top: 50%;
    left: 35%;
    vertical-align: center;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .fb-txt {
    font-size: 23px;
  }
  /* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 1220px) {
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
    .photopage {
      width: 90%;
      height: auto;
      display: flex;
      margin: 40px auto;
    }
    .column1 {
      width: 100%;
    }
    .row1 {
      display: block;
      width: 90%;
      margin: 0 auto;
    }
    .centerr {
      display: inline-block;
      position: absolute;
      margin: 20px 20px auto;
    }
  }
`;

export const Orders = () => {
  window.scrollTo(0, 0);
  return (
    <LandingOrders>
      <h1>Zamówienia</h1>
      <h3>
        <Link className="add" to="/gallery" className="add">
          Formator Zagonów
        </Link>
      </h3>
      <div className="row">
        <div className="column">
          <img className="photopage" src={formator} />
        </div>
        <div className="column">
          <p className="description">
            Maszyna służy do formowania zagonów i rozwijania agrowłókniny lub
            folii. Przeznaczona jest do uprawy truskawki, ogórka, borówki itp.
            Dodatkowo można rozwinąć wąż do nawadniania.
            <br /> <b>Parametry techniczne:</b>
            <br /> - szerokość folii, agrowłókniny – 1 m
            <br /> - szerokość zagonu w przedziale 70-80 cm <br />- wysokość
            zagonu w przedziale 10-15 cm
          </p>
        </div>
      </div>
      <h3>
        <Link className="add" to="/gallery" className="add">
          Podgarniacz Ślimakowy
        </Link>
      </h3>
      <div className="row">
        <div className="column">
          <img className="photopage" src={podgarniacz1} />
        </div>
        <div className="column">
          <p className="description">
            Maszyna przeznaczona do podgarniania paszy, której zaletą jest jej
            napowietrzanie. Podgarniacz napędzany jest silnikiem hydraulicznym.
            Mocowania między innymi na tuza przedniego, tylnego, tura i widlaka.
            Maszyna posiada regulację uchwytu oraz możliwość podgarniania na
            lewo lub prawo w zależności od wyboru klienta
            <br />
            <b>Standardowe parametry techniczne:</b>
            <br />
            – Szerokość robocza – 150 cm
            <br />
            – Szerokość całkowita - 170 cm
            <br />
            – Silnik hydrauliczny dobierany indywidualnie
            <br />
            <b>Możliwość przystosowania maszyny na potrzeby klienta.</b>
          </p>
        </div>
      </div>
      <h3>
        <Link className="add" to="/gallery" className="add">
          Podgarniacz Kołowy
        </Link>
      </h3>
      <div className="row1">
        <div className="column1">
          <img className="photopage" src={podgarniacz2} />
        </div>
        <div className="column1">
          <div className="centerr">Wykonywane pod indywidualne zamówienie.</div>
        </div>
      </div>
      <h3>
        <br />
        <br />
        <Link className="add" to="/gallery" className="add">
          Zamiatarki
        </Link>
      </h3>
      <div className="row">
        <div className="column">
          <img className="photopage" src={zamiatarka} />
        </div>
        <div className="column">
          <p className="description">
            Nasza firma oferuje również szeroki wybór zamiatarek i odmiatarek
            występujących w różnych rozmiarach i typach. Wszystkie maszyny są
            wykonywane na zlecenie według indywidualnych potrzeb. Mogą być
            wyposażone w układ zmiany kąta pracy, kosz, układ zraszania,
            szczotkę boczną oraz kompensację docisku. Więcej modeli do
            obejrzenia w zakładce{" "}
            <Link className="add" to="/contact" className="navlink">
              Galeria.
            </Link>
          </p>
        </div>
      </div>
      <h3>
        <Link className="add" to="/gallery" className="add">
          Inne nasze przykładowe konstrukcje
        </Link>
      </h3>
      <div className="row1">
        <div className="column1">
          <img className="photopage" src={konstrukcja} />
        </div>
        <div className="column1">
          <div className="centerr">Wykonywane pod indywidualne zamówienie.</div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <p id="info-paragraph">
        Więcej informacji co do zamówień uzyskacie Państwo mailowo lub
        telefonicznie, wszystkie informacje podane są w zakładce{" "}
        <Link className="add" to="/contact" className="navlink">
          Kontakt.
        </Link>
      </p>
      <br />
      <a href="https://m.facebook.com/K%C4%99dzia-Met-112339333860499/?ref=bookmarks">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <br />
      <h7 className="fb-txt">Odwiedź naszą stronę Facebook-ową!</h7>
      <br />
      <br />
      <br />
    </LandingOrders>
  );
};
