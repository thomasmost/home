import * as React from "react";

import { TcmFooter } from "./components/tcm-footer";

export class App extends React.Component {
   constructor (props: {children: any})
   {
     super(props);
   }
   render() {
      return (
         <div>
               <div className="img-wrapper">
                  <img src="../img/main_sq_centered.jpg" />
               </div>
               <div className="content-wrapper">
                  <div className="headings">
                     <h1 className="h1">Thomas Constantine Moore</h1>
                     <h2 className="h2">technopagan</h2>
                  </div>
                  <div id="page-container">
                     {this.props.children}
                  </div>
                  <div className="divider"></div>
               </div>
               <TcmFooter />
         </div>
      )
   }
}
