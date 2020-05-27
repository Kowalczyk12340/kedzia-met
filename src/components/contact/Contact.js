import React from "react";
import styled from "styled-components";

const ContactData = styled.div`
  h1 {
    text-align: center;
    text-shadow: grey;
    font-weight: bold;
    font-size: 34px;
    text-decoration: underline;
  }
  h7 {
    text-decoration: underline;
    font-weight: bold;
    padding: 10px;
  }
  p {
    text-align: center;
    letter-spacing: initial;
    padding: 5px;
  }

  .contactDetails {
    color: black;
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 20px;
  }
`;
export const Contact = () => {
  return (
    <ContactData>
      <div className="contact-data">
        <h1>Dane Kontaktowe</h1>
        <h2>ZPHU KĘDZIA-MET</h2>
        <h3>Dział modernizacji:</h3>
        <p>
          <h7>Marek Kędzia</h7>
          <br /> Numer telefonu: 608 473 406
        </p>
        <h3>Dział zamówień:</h3>
        <p>
          <h7>Mateusz Kędzia</h7>
          <br /> Numer telefonu: 739 082 982
        </p>
        <h3>Firmowy Adres E-mail:</h3>
        <a className="contactDetails" href="#">
          kedzia-met@wp.pl
        </a>
      </div>
    </ContactData>
  );
};
