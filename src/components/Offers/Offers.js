import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import weld from "../../images/welding.jpg";

const OffersItem = styled.div`
  h1 {
    text-align: center;
    text-shadow: grey;
    font-weight: bold;
    font-size: 69px;
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
    margin-top: 35px;
    margin-bottom: 35px;
    height: auto;
    background-color: rgba(250, 250, 250, 0.5);
    border-radius: 5rem;
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
  .weld {
    width: 100%;
    height: auto;
  }
  .add {
    color: white;
    text-decoration: none;
    font-size: 24px;
  }
  .fb {
    background-color: rgba(250, 250, 250, 0.9);
    border-radius: 7px;
    height: 22px;
    width: 22px;
  }
  .header {
    width: 100%;
    height: auto;
    margin: 25px 0 auto;
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
    width: 15rem;
    height: 4rem;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer; /* Pointer/hand icon */
    margin: 0 auto;
  }

  .btn-group button:not(:last-child) {
    border-right: none; /* Prevent double borders */
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
  }
`;

export const Offers = () => {
  return (
    <OffersItem>
      <div className="container">
        <div>
          <img className="weld" src={weld} />
        </div>
        <h1>Zapoznaj się z naszą ofertą</h1>
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
            <Link className="add" to="#">
              Usługi Rolnicze
            </Link>
          </button>
        </div>
        <div className="description">
          <p>
            Nasza firma została założona w październiku 2013 roku. Pomysł
            narodził się w małym garażu. Z czasem widać było spore
            zainteresowanie naszą działalnością i ciągły wzrost nowych klientów.
            Postanowiliśmy się więc rozbudować i w ten sposób poszerzyć zakres
            naszych usług. Wszystko co robimy jest z myślą o naszych odbiorcach.
            Staramy się by każdy z nich był zadowolony. Wszystkie nasze maszyny
            wykonujemy bardzo dokładnie z dużą dbałością o szczegóły. Jakość i
            trwałość naszych usług podwyższa fakt, że wszystkie elementy są
            piaskowane. Nasza firma wykonuje również specjalne zamówienia
            naszych klientów lub oferujemy maszyny przez nas już wykonane, które
            znajdziecie państwo na naszej stronie.
          </p>
        </div>
        <a className="fb" href="https://www.facebook.com/">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <br />
        <h7 className="fb-txt">Odwiedź naszą stronę Facebook-ową!</h7>
      </div>
    </OffersItem>
  );
};
