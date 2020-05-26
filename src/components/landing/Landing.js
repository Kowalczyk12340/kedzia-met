import React from "react";
import styled from "styled-components";
import logo from "../../images/kedzia.png";


const LandingContainer = styled.div `
    .logotyp
    {
      height: 24px;
      width: auto;
    }
    
`;

export const Landing = () => {
  return <LandingContainer >
      <img className = "logotyp" src = {logo} / >
    </LandingContainer>;
};