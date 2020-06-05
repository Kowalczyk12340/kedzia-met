import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
    font-size: 34px;
    text-decoration: underline;
  }
  h2 {
    text-decoration: underline;
  }
  h3 {
    text-align: center;
    text-shadow: grey;
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
  }
  p {
    text-align: justify;
    text-shadow: grey;
    font-weight: cursive;
    font-size: 22px;
    width: 90%;
    margin: 0 auto;
    padding: 20px;
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
  .welder-item {
    display: flex;
    width: 80%;
    margin: 0 auto;
  }
  .photo-item1 {
    margin: 0 auto;
    height: 250px;
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
`;

export const Orders = () => {
  return (
    <LandingOrders>
      <h1>Dział Zamówień</h1>
      <h3>Formator Zagonów</h3>
      <img className="photopage" src={formator} />
      <p className="description">
        Maszyna służy do formowania zagonów i rozwijania agrowłókniny lub folii
        .Przeznaczona jest do uprawy truskawki ogórka borówki itp. Dodatkowa
        można rozwinąć wąż do nawadniania.
        <br /> <b>Parametry techniczne:</b>
        <br /> - szerokość folii, agrowłókniny – 1m.
        <br /> - szerokość zagonu w przedziale 70-80cm. <br />- wysokość zagonu
        w przedziale 10-15cm.
      </p>
      <h3>Podgarniacz Ślimakowy</h3>
      <img className="photopage" src={podgarniacz1} />
      <p className="description">
        Maszyna przeznaczona do podgarniania paszy, której zaletą jest jej
        napowietrzanie. Podgarniacz napędzany jest silnikiem hydraulicznym.
        Mocowania między innymi na tuza przedniego, tylnego, tura i widlaka.
        Maszyna posiada regulację uchwytu oraz możliwość podgarniania na lewo
        lub prawo w zależności od wyboru klienta
        <br />
        <b>Standardowe parametry techniczne:</b>
        <br />
        – Szerokość robocza – 150 cm.
        <br />
        – Szerokość całkowita - XXX cm
        <br />
        – Silnik hydrauliczny dobierany indywidualnie
        <br />
        <b>Możliwość przystosowania maszyny na potrzeby klienta.</b>
      </p>
      <h3>Podgarniacz Kołowy</h3>
      <img className="photopage" src={podgarniacz2} />
      <p className="description">
        <h3>Wykonywany pod indywidualne zamówienie.</h3>
      </p>
      <h3>Zamiatarka</h3>
      <img className="photopage" src={zamiatarka} />
      <p className="description">
        Nasz firma oferuje również szeroki wybór zamiatarek i odmiatarek
        występujących w różnych rozmiarach i typach. Wszystkie maszyny są
        wykonywane na zlecenie według indywidualnych potrzeb. Mogą być
        wyposażone w układ zmiany kąta pracy, kosz, układ zraszania, szczotkę
        boczną oraz kompensację docisku.
      </p>
      <h3>Inne nasze przykładowe konstrukcje</h3>
      <img className="photopage" src={konstrukcja} />
      <p className="description">
        <h3>Wykonywany pod indywidualne zamówienie.</h3>
      </p>
      <p>
        I znacznie więcej! Więcej informacji co do zamówień uzyskacie Państwo
        mailowo lub telefonicznie, wszystkie informacje, podane są w zakładce{" "}
        <Link className="add" to="/contact" className="navlink">
          Kontakt
        </Link>
      </p>
    </LandingOrders>
  );
};
