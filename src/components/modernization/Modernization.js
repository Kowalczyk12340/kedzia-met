import React from "react";
import photo from "../../images/spawacz.png";
import styled from "styled-components";

const ModernizationItem = styled.div`
  h1 {
    text-align: center;
    text-shadow: grey;
    font-weight: bold;
    font-size: 34px;
    text-decoration: underline;
  }
  .welder {
    width: 460px;
    height: auto;
    margin: 0 auto;
  }
`;

export const Modernization = () => {
  return (
    <ModernizationItem>
      <div className="modernizationContainer">
        <h1>Dział Modernizacji</h1>
        <img className="welder" src={photo} />
      </div>
    </ModernizationItem>
  );
};
