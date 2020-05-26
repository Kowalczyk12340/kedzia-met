import React, { Fragment, useState } from "react";
import ResponsiveMenu from "react-responsive-navbar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Menu = styled.div`
  /* Add a black background color to the top navigation */
  .topnav {
    background-color: #333;
    overflow: hidden;
  }

  /* Style the links inside the navigation bar */
  .topnav .navlink {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  /* Change the color of links on hover */
  .topnav .navlink:hover {
    background-color: #ddd;
    color: black;
  }

  /* Add an active class to highlight the current page */
  .topnav .active {
    background-color: #4caf50;
    float: left;
    color: white;
  }

  /* Hide the link that should open and close the topnav on small screens */
  .topnav .icon {
    display: none;
  }
  /* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
  @media screen and (max-width: 600px) {
    .topnav .navlink:not(:first-child) {
      display: none;
    }
    .topnav .icon {
      float: right;
      display: block;
    }
    .topnav .active {
      margin: 0 auto;
    }
  }

  /* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
  @media screen and (max-width: 600px) {
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
//<FontAwesomeIcon icon={faBars}
export const Navbar = () => {
  const [toggleMenu, displayMenu] = useState(true);
  return (
    <Menu>
      <div className={toggleMenu ? "topnav" : "topnav responsive"}>
        <Link to="/" className="active">
          LOGO
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
