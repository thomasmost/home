import * as React from "react";

export class AboutPage extends React.Component {
   constructor (props: {})
   {
     super(props);
   }
   render() {
       return  <div
                  className="page">
                  <h3>About</h3>
                  <div className="content-block">
                     <p>
                        Thomas is an actor, writer, and developer operating out of Brooklyn.
                        Beyond theater and art, he nurtures interests in coffee-brewing, whiskey-drinking, and NASA-recommended houseplants.
                        Thomas graduated from Carnegie Mellon University in 2014, and works as a software engineer at Abacus Labs.
                        He is passionate about immersive theater, and has appeared in Quantum Theatre's production of <em>Tamara</em>, 
                        as well as The Speakeasy Society's <em>Kansas Collection</em> and <em>Johnny Cycle</em>.
                     </p>
                     <p>
                        He co-founded the event networking site Yollerhorn, and is currently developing a production of <em>Three Sisters</em> with Rebis Immersive.
                     </p>
                  </div>
               </div>;
   }
}