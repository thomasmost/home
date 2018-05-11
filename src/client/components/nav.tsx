import * as React from "react";

import { Link } from "react-router-dom";
import ReactSVG from "react-svg";

export const Navigation = () =>  <div>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/gallery">Unfettered Narcissism</Link>
            <a href="https://www.instagram.com/thomascmost">
               <ReactSVG path="instagram.svg"/>
            </a>
            <a href="https://www.twitter.com/thomascmost">
               <ReactSVG path="twitter.svg"/>
            </a>
            <a href="https://www.yollerhorn.com/thomas">
               <ReactSVG path="yollerhorn.svg"/>
            </a>
         </div>