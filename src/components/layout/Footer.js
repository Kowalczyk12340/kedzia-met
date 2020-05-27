import React from "react";
import styled from "styled-components";

const FooterItem = styled.div`
  .footerText {
    background: #333;
    color: white;
    padding: 1rem;
    text-align: center;
    margin: 0 auto;
  }

  .footer-main {
    background: #333;
    color: white;
    padding: 1rem;
    text-align: center;
    margin: 0 auto;
  }

  .footer-cols {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
    padding: 2rem;
    text-align: left;
    font-size: 14px;
  }

  .footer-cols ul {
    list-style: none;
  }

  .footer-cols ul li a {
    list-style: none;
    color: white;
    text-decoration: none;
    cursor: pointer;
  }

  .footer-cols ul li:first-child {
    font-size: 1.2rem;
    padding-bottom: 0.5rem;
    border-bottom: #444 solid 1px;
    margin-bottom: 1rem;
  }

  /* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
  @media screen and (max-width: 600px) {
    .footer-main {
      display: none;
    }
    .footerText {
      margin: 0 auto;
      background: #333;
      color: white;
      padding: 0.5rem;
      text-align: center;
    }
  }
`;

export const Footer = () => {
  return (
    <FooterItem>
      <div className="footer-main">
        <div className="footer-cols">
          <ul>
            <li>Modernizacja</li>
            <li>
              <a href="#">Renowacja</a>
            </li>
            <li>
              <a href="#">Naprawianie</a>
            </li>
            <li>
              <a href="#">Modelowanie</a>
            </li>
            <li>
              <a href="#">Spawanie</a>
            </li>
            <li>
              <a href="#">Toczenie</a>
            </li>
          </ul>
          <ul>
            <li>Zamówienia</li>
            <li>
              <a href="#">Zamów części</a>
            </li>
            <li>
              <a href="#">Ciekawa oferta</a>
            </li>
            <li>
              <a href="#">Polecam</a>
            </li>
            <li>
              <a href="#">Finanse</a>
            </li>
            <li>
              <a href="#">O firmie</a>
            </li>
          </ul>
          <ul>
            <li>Galeria</li>
            <li>
              <a href="#">Zdjecia</a>
            </li>
            <li>
              <a href="#">Biznes</a>
            </li>
            <li>
              <a href="#">MAm</a>
            </li>
            <li>
              <a href="#">Fajny</a>
            </li>
            <li>
              <a href="#">Ciekawa praca</a>
            </li>
          </ul>
          <ul>
            <li>Kontakt</li>
            <li>
              <a href="#">Numer</a>
            </li>
            <li>
              <a href="#">Telefonu</a>
            </li>
            <li>
              <a href="#">Inwentaryzacja</a>
            </li>
            <li>
              <a href="#">Spotkania</a>
            </li>
            <li>
              <a href="#">Kontakt</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerText">
        Copyright &copy; 2020 Autorski projekt i wykonanie: Artur Frącala i
        Marcin Kowalczyk
      </div>
    </FooterItem>
  );
};
