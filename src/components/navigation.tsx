import React from "react"

import { Link } from "gatsby";
import { ReactSVG } from "react-svg";

import FeatherIcon from "./feather-icon";


export const Navigation = () =>  (
  <div className="nav-wrapper">
  <a href="https://www.instagram.com/thomascmost" target="_blank">
    <FeatherIcon name="instagram" />
  </a>
  <a href="https://www.twitter.com/thomascmost" target="_blank">
    <FeatherIcon name="twitter" />
  </a>
  <a href="https://www.linkedin.com/in/tomconmo" target="_blank">
    <FeatherIcon name="linkedin" />
  </a>
  <Link to="/about">
    <FeatherIcon name="info" />
  </Link>
  <Link to="/projects">
    <FeatherIcon name="box" />
  </Link>
  <Link to="/more">
    <FeatherIcon name="more-horizontal" />
  </Link>
  {false && <Link to="/gallery">Unfettered Narcissism</Link>}
  </div>
);