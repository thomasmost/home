import * as React from "react";

import { TcmFooter } from "./components/tcm-footer";
import { Link } from "react-router-dom";

import { Navigation } from "./components/nav"

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
                  <div>
                     <Navigation />
                  </div>
                  <div className="img-wrapper">
                     <img src="./img2.png" />
                  </div>
               </div>
         </div>
      )
   }
}
