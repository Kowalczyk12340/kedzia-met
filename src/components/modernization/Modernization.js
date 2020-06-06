import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import przyczepa from "../../images/przyczepa.jpg";
import przyczepa1 from "../../images/przyczepa1.jpg";
import sadzarka from "../../images/sadzarka.JPG";
import wal from "../../images/wal.jpg";
import { Link } from "react-router-dom";

const ModernizationItem = styled.div`
  .modernizationContainer {
    background: white;
    width: 90%;
    margin: 0 auto;
    margin-top: 1em;
    margin-bottom: 1em;
    opacity: 0.9;
    padding: 1em;
    border-radius: 5%;
  }

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
  .add {
    color: black;
    cursor: pointer;
    text-decoration: none;
  }
`;

export const Modernization = () => {
  return (
    <ModernizationItem>
      <div className="modernizationContainer">
        <h1>Oferta modernizacji</h1>
        <p>
          Maszyny wykonywane są pod zamówienie klienta. Są to w większości
          maszyny modernizowane. Wszystkie elementy są dokładnie piaskowane co
          wpływa na jakość i trwałość wykonanej usługi. Szczegóły techniczne do
          uzgodnienia.
        </p>
        <h3>
          <Link className="add" to="/gallery" className="add">
            Przyczepy Rolnicze
          </Link>
        </h3>
        <img className="photopage" src={przyczepa} />
        <h3>
          <Link className="add" to="/gallery" className="add">
            Przyczepy do Bali
          </Link>
        </h3>
        <img className="photopage" src={przyczepa1} />
        <h3>
          <Link className="add" to="/gallery" className="add">
            Sadzarki
          </Link>
        </h3>
        <img className="photopage" src={sadzarka} />
        <h3>
          <Link className="add" to="/gallery" className="add">
            Wały
          </Link>
        </h3>
        <img className="photopage" src={wal} />
        <h3>Zapraszamy do współpracy!</h3>
        <a href="https://www.facebook.com/">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <br />
        <h7 className="fb-txt">Odwiedź naszą stronę Facebook-ową!</h7>
      </div>
    </ModernizationItem>
  );
};
