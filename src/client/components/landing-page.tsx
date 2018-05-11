import * as React from "react";

export class LandingPage extends React.Component {
   constructor (props: {})
   {
     super(props);
   }
   render() {
       return  <div
                  className="page">
                  <p className="landing-page-quote">"Something about empty space."</p>
               </div>;
   }
}