import * as React from "react";

export class AboutPage extends React.Component {
   constructor (props: {})
   {
     super(props);
   }
   render() {
       return  <div
                  className="subPage">
                  <div className="header-text">About</div>
                  <div className="content-block">
                     <p>
                        Thomas is an actor, writer, and software engineer operating out of Brooklyn.
                        Beyond theater and art, he nurtures interests in coffee-brewing, whiskey-drinking, and NASA-recommended houseplants.
                        Thomas graduated from Carnegie Mellon University with a BFA in Acting in 2014.
                        He co-founded and co-engineered the event networking site Yollerhorn,
                        and he's currently a senior engineer with MedLever, Inc.
                     </p>
                  </div>
               </div>;
   }
}