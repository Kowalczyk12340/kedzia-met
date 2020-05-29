import React from "react";
import styled from "styled-components";
import welder from "../../images/spawarka.png";

const LandingOrders = styled.div`
  h1 {
    text-align: center;
    text-shadow: grey;
    font-weight: bold;
    font-size: 34px;
    text-decoration: underline;
  }
  .logotyp {
    height: 24px;
    width: auto;
  }
  .welder-item {
    display: flex;
    width: 80%;
    margin: 0 auto;
  }
  .photo-item1 {
    margin: 0 auto;
    height: 250px;
    width: auto;
  }
`;

export const Orders = () => {
  return (
    <LandingOrders>
      <h1>Dział Zamówień</h1>
      <div className="welder-item">
        <img className="photo-item1" src={welder} />
      </div>
    </LandingOrders>
  );
};
