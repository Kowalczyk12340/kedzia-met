import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import weld from "../../images/welding.jpg";

const OffersItem = styled.div`
  .container {
    width: 100%;
  }
  .content {
    background-image: url(${weld});
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
    background-color: rgba(251, 251, 251, 0.3);
    width: 100%;
  }
  h1 {
    text-align: center;
    text-shadow: grey;
    font-weight: bold;
    font-size: 100px;
    color: black;
    width: 100%;
    margin: 0;
    vertical-align: center;
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
    vertical-align: middle;
  }
  h3 {
    text-align: center;
    text-shadow: grey;
    font-weight: bold;
    font-size: 28px;
    text-decoration: none;
    float: left;
  }
  .description {
    margin-top: 26px;
    margin-bottom: 35px;
    height: auto;
    background-color: rgba(250, 250, 250, 0.5);
    color: black;
    border-radius: 5rem;
    font-size: 24px;
  }
  p {
    text-align: justify;
    text-shadow: grey;
    font-weight: cursive;
    font-size: 20px;
    width: 90%;
    margin: 0 auto;
    padding: 20px;
  }
  .weld {
    width: 100%;
    height: auto;
  }
  .add {
    color: white;
    margin: 1em;
    text-decoration: none;
    font-size: 22px;
  }
  .add1 {
    color: black;
    text-decoration: none;
  }
  .fb {
    background-color: white;
    border-radius: 7px;
    height: 22px;
    width: 22px;
    margin: 0 auto;
  }
  .btn-group {
  }
  .btn-group button {
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
    border-radius: 3rem;
    border: none;
    color: white; /* White text */
    padding: 10px 24px; /* Some padding */
    width: 16rem;
    height: 4rem;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer; /* Pointer/hand icon */
    margin: 0.5em;
  }

  .btn-group button:not(:last-child) {
    border-right: none; /* Prevent double borders */
  }

  .add11 {
    color: white;
    cursor: pointer;
    text-decoration: none;
    font-size: 21px;
    text-align: center;
  }

  /* Clear floats (clearfix hack) */
  .btn-group:after {
    content: "";
    clear: both;
    display: table;
  }

  /* Add a background color on hover */
  .btn-group button:hover {
    background-color: white;
    color: black;
  }

  .fb-txt {
    font-size: 23px;
    color: black;
    font-weight: bold;
  }

  /* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
  @media screen and (min-width: 1220px) {
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
    p {
      font-size: 26px;
    }
  }
  @media screen and (max-width: 1020px) {
    h1 {
      font-size: 50px;
    }
    p {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 1220px) and (min-width: 1020px) {
    h1 {
      font-size: 60px;
    }
  }
`;

export const Offers = () => {
  return (
    <OffersItem>
      <div className="container">
        <div className="content">
          <div className="title">
            <h1>Zapoznaj się z naszą ofertą</h1>
          </div>
        </div>
        <div class="btn-group">
          <button>
            <Link className="add" to="/modernization">
              Modernizacja
            </Link>
          </button>
          <button>
            <Link className="add" to="/orders">
              Zamówienia
            </Link>
          </button>
          <button>
            <Link className="add" to="#">
              Spawalnictwo
            </Link>
          </button>
          <button>
            <Link className="add11" to="#">
              Obróbka Skrawania
            </Link>
          </button>
        </div>
        <div className="description">
          <p>
            Oferujemy usługi takie jak modernizacja i renowacja maszyn
            rolniczych, spawalnictwo, tokarstwo, zamawianie części potrzebnych
            dla naszych klientów oraz tworzenie konstrukcji stalowych. Wiele
            wykonanych i zrenomowanych przez nas maszyn możecie znaleźć Państwo
            w zakładce{" "}
            <Link className="add1" to="/gallery">
              Galeria
            </Link>
            .
          </p>
          <p>
            Jakość wykonanej pracy i dbałość o szczegóły przyczynia się do
            zwiększającej liczby nowych klientów.
          </p>
        </div>
        <div className="fb">
          <a href="https://m.facebook.com/K%C4%99dzia-Met-112339333860499/?ref=bookmarks">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </div>
        <br />
        <h7 className="fb-txt">Odwiedź naszą stronę Facebook-ową!</h7>
        <br />
        <br />
        <br />
      </div>
    </OffersItem>
  );
};
