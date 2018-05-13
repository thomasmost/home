import * as React from "react";

export class LandingPage extends React.Component {
   constructor (props: {})
   {
     super(props);
   }
   render() {
      return   <div
                  className="page">
                  <p className="landing-page-quote last-element">"Something pithy about empty space."</p>
               </div>;
   }
}