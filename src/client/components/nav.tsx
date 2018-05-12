import * as React from "react";

import { Link } from "react-router-dom";
import * as ReactSVG from "react-svg";


export const Navigation = () =>  <div className="nav-wrapper">
            <a href="https://www.yollerhorn.com/thomas" target="_blank">
               <ReactSVG path="yollerhorn.svg"/>
            </a>
            <a href="https://www.instagram.com/thomascmost" target="_blank">
               <ReactSVG path="instagram.svg"/>
            </a>
            <a href="https://www.twitter.com/thomascmost" target="_blank">
               <ReactSVG path="twitter.svg"/>
            </a>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/gallery">Unfettered Narcissism</Link>

         </div>