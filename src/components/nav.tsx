import React from "react"

import { Link } from "gatsby";
import { ReactSVG } from "react-svg";


export const Navigation = () =>  (
  <div className="nav-wrapper">
    <a href="https://www.yollerhorn.com/thomas" target="_blank">
        <ReactSVG src="yollerhorn.svg"/>
    </a>
    <a href="https://www.instagram.com/thomascmost" target="_blank">
        <ReactSVG src="/images/instagram.svg"/>
    </a>
    <a href="https://www.twitter.com/thomascmost" target="_blank">
        <ReactSVG src="/images/twitter.svg"/>
    </a>
    <Link to="/about">
        <ReactSVG src="info.svg"/>
    </Link>
    <Link to="/projects">
        <ReactSVG src="projects.svg"/>
    </Link>
    <Link to="/more">
        <ReactSVG src="arrow.svg"/>
    </Link>
    {false && <Link to="/gallery">Unfettered Narcissism</Link>}
  </div>
);