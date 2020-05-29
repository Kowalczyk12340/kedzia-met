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
`;

export const Modernization = () => {
  return (
    <ModernizationItem>
      <div className="modernizationContainer">
        <h1>Dział Modernizacji</h1>
      </div>
    </ModernizationItem>
  );
};
