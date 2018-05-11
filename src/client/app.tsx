import * as React from "react";

import { TcmFooter } from "./components/tcm-footer";
import { Link } from "react-router-dom";

export class App extends React.Component {
   constructor (props: {children: any})
   {
     super(props);
   }
   render() {
      return (
         <div>
               <div className="content-wrapper">
                  <div className="header">
                     <Link to="/"><h1 className="h1">Thomas Constantine Moore</h1></Link>
                  </div>
                  <div className="page-container">
                     {this.props.children}
                  </div>
                  <div className="nav-wrapper">
                     <Link to="/about">About</Link>
                     <Link to="/projects">Projects</Link>
                     <Link to="/gallery">Unfettered Narcissism</Link>
                  </div>
                  <div className="img-wrapper">
                     <img src="./img2.png" />
                  </div>
               </div>
               <TcmFooter />
         </div>
      )
   }
}
