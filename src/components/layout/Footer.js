import React from "react";
import styled from "styled-components";

const FooterItem = styled.div`
  .footerText {
    background-color: black;
    color: white;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 1rem;
    text-align: center;
    margin: 0 auto;
  }

  /* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
  @media screen and (max-width: 600px) {
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
      <div className="footerText">
        Copyright &copy; 2020 Autorski projekt i wykonanie: Artur Frącala i
        Marcin Kowalczyk
      </div>
    </FooterItem>
  );
};
