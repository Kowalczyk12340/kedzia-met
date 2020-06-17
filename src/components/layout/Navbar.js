import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/kedzia.png";

const Menu = styled.div`
  /* Add a black background color to the top navigation */
  .topnav {
    background-color: #262626;
    overflow: hidden;
  }
  .topnav:hover {
    background-position: right center;
  }

  /* Style the link inside the navigation bar */
  .topnav .navlink {
    float: left;
    display: block;
    color: #d9d9d9;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    font-family: "Oswald", sans-serif;
    text-transform: uppercase;
  }

  /* Change the color of links on hover */
  .topnav .navlink:hover {
    color: #ffffff;
  }

  /* Add an active class to highlight the current page */
  .topnav .active {
    height: 24px;
    width: auto;
    padding: 10px;
    float: left;
  }

  /* Hide the link that should open and close the topnav on small screens */
  .topnav .icon {
    display: none;
  }
  /* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
  @media screen and (max-width: 700px) {
    .topnav .navlink:not(:first-child) {
      display: none;
    }
    .topnav .icon {
      float: right;
      display: block;
      color: white;
      margin-top: 10px;
      margin-right: 10px;
    }
    .topnav .active {
      margin: 0 auto;
    }
  }

  /* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
  @media screen and (max-width: 700px) {
    .topnav.responsive {
      position: relative;
    }
    .topnav.responsive .icon {
      position: absolute;
      right: 0;
      top: 0;
    }
    .topnav.responsive .navlink {
      float: none;
      display: block;
      text-align: left;
    }
  }
`;
export const Navbar = () => {
  const [toggleMenu, displayMenu] = useState(true);
  return (
    <Menu>
      <div className={toggleMenu ? "topnav" : "topnav responsive"}>
        <Link to="/">
          <img className="active" src={logo} />
        </Link>
        <Link to="/offers" className="navlink">
          Oferta
        </Link>
        <Link to="/modernization" className="navlink">
          Modernizacja
        </Link>
        <Link to="/orders" className="navlink">
          Zamówienia
        </Link>
        <Link to="/gallery" className="navlink">
          Galeria
        </Link>
        <Link to="/contact" className="navlink">
          Kontakt
        </Link>

        <Link className="icon" onClick={() => displayMenu(!toggleMenu)}>
          <i className="fa fa-bars"></i>
        </Link>
      </div>
    </Menu>
  );
};
