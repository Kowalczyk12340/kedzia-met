import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import welder from "../../images/spawarka.png";

const LandingOrders = styled.div`
  h1 {
    text-align: center;
    text-shadow: grey;
    font-weight: bold;
    font-size: 34px;
    text-decoration: underline;
  }
  h3 {
    text-align: center;
    text-shadow: grey;
    font-weight: bold;
    font-size: 21px;
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
  .product {
    text-align: center;
    font-size: 20px;
    text-decoration: none;
    color: black;
    margin-top: 10px;
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
  .add {
  }
`;

export const Orders = () => {
  return (
    <LandingOrders>
      <h1>Dział Zamówień</h1>
      <div className="welder-item">
        <img className="photo-item1" src={welder} />
      </div>
      <p>
        Firma Kędzia-Met oferuje także zamawianie części na szeroką skalę. Wiele
        produktów i części jesteśmy w stanie załatwić taniej, dzięki
        wieloletniej pracy i znajomością oraz współpracą z wieloma sklepami i
        hurtowniami części.
      </p>
      <h3>Oferujemy ciekawą listę produktów, którą można u nas zamówić: </h3>
      <li className="product"> Produkt</li>
      <li className="product"> Produkt</li>
      <li className="product"> Produkt</li>
      <li className="product"> Produkt</li>
      <li className="product"> Produkt</li>
      <li className="product"> Produkt</li>
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
