import React from "react";
import styled from "styled-components";

const ModernizationItem = styled.div`
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
`;

export const Modernization = () => {
  return (
    <ModernizationItem>
      <div className="modernizationContainer">
        <h1>Dział Modernizacji</h1>
        <p>
          Firma Kędzia-Met oferuje przede wszystkim profesjonalne usługi
          modernizacyjne. Jesteśmy na rynku lokalnym od 2012 roku. Oferujemy
          profesjonalne usługi w dziedzinie renowacji maszyn wszelakiego typu,
          takie jak zamiatarki, przyczepy, podgarniacze.
        </p>
        <h3>Oferujemy ciekawą listę produktów do usług modernizacyjnych: </h3>
        <li className="product"> Produkt</li>
        <li className="product"> Produkt</li>
        <li className="product"> Produkt</li>
        <li className="product"> Produkt</li>
        <li className="product"> Produkt</li>
        <li className="product"> Produkt</li>
      </div>
    </ModernizationItem>
  );
};
