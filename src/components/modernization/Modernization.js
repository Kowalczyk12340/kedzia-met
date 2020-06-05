import React from "react";
import styled from "styled-components";
import przyczepa from "../../images/przyczepa.jpg";
import przyczepa1 from "../../images/przyczepa1.jpg";
import sadzarka from "../../images/sadzarka.JPG";
import wal from "../../images/wal.jpg";

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
  .product {
    text-align: center;
    font-size: 20px;
    text-decoration: none;
    color: black;
    margin-top: 10px;
  }
  .photopage {
    width: 80%;
    height: auto;
    display: flex;
    margin: 0 auto;
  }
`;

export const Modernization = () => {
  return (
    <ModernizationItem>
      <div className="modernizationContainer">
        <h1>Dział Modernizacji</h1>
        <p>
          Maszyny wykonywane są pod zamówienie klienta. Są to w większości
          maszyny modernizowane. Wszystkie elementy są dokładnie piaskowane co
          wpływa na jakość i trwałość wykonanej usługi. Szczegóły techniczne do
          uzgodnienia.
        </p>
        <h3>Przyczepy Rolnicze</h3>
        <img className="photopage" src={przyczepa} />
        <h3>Przyczepy do Bali</h3>
        <img className="photopage" src={przyczepa1} />
        <h3>Sadzarka</h3>
        <img className="photopage" src={sadzarka} />
        <h3>Wały</h3>
        <img className="photopage" src={wal} />
        <h3>Zapraszamy do współpracy!</h3>
      </div>
    </ModernizationItem>
  );
};
