import React from "react";

import { Link } from "gatsby";
import { ReactSVG } from "react-svg";

import FeatherIcon from "./feather-icon";
import styled from "@emotion/styled";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  font-weight: 600;
  margin: 20px;
  a {
    margin-right: 20px;
    color: black;
    font-weight: 600;
  }
`;

export const Navigation = () => (
  <Nav>
    <Link to="/about">About</Link>
    <a href="https://www.instagram.com/thomascmost" target="_blank">
      <FeatherIcon name="instagram" />
    </a>
    <a href="https://www.twitter.com/thomascmost" target="_blank">
      <FeatherIcon name="twitter" />
    </a>
    <a href="https://www.linkedin.com/in/tomconmo" target="_blank">
      <FeatherIcon name="linkedin" />
    </a>
    {/* <Link to="/projects">
    <FeatherIcon name="box" />
  </Link>
  <Link to="/more">
    <FeatherIcon name="more-horizontal" />
  </Link> */}
    {false && <Link to="/gallery">Unfettered Narcissism</Link>}
  </Nav>
);
