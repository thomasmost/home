import * as React from "react";
import Gallery from 'react-photo-gallery';
import { ProjectBlock } from "../projects/project-block";
import { Link } from "react-router-dom";


export class SensationalPage extends React.Component {
   constructor (props: {})
   {
     super(props);
   }
   render() {
       return  <div
                  className="page project-page">
                  <h3 style={{display: "none"}}>Sensational</h3>
                  <img src="https://filedn.com/lLL0lkOxLkGHJoHpDELDETb/assets/sensational-header.png" />
                  <div className="content-container">
                     <p>You're a 19-year-old runaway in an unfamiliar city. You have superpowers--but you can only use them when you're happy. So yeah... you might be screwed.</p>
                     <p><em>Sensational</em> is a superhero RPG unlike any other, where your character's powers can only be accessed through a specific emotion. Lift cars over your head, heal your friends, punch holes in the Moon, but only if you're sad, sickened, or surprised.</p>
                     <p>Latest Version: 1.01</p>
                     <Link className="download-link last-element" to="/sensational-download">Download</Link>
                  </div>
               </div>;
   }
}

export class SensationalDownloadPage extends React.Component {
   constructor (props: {})
   {
     super(props);
   }
   render() {
       return  <div
                  className="page project-page">
                  <h3 style={{display: "none"}}>Download Sensational</h3>
                  <img src="https://filedn.com/lLL0lkOxLkGHJoHpDELDETb/assets/sensational-header.png" />
                  <div className="content-container">
                     <p className="instructions">Recommended Donation of 5 Finney (or $5)</p>
                     <img className="qr-code" src="eth-green-qr.png" />
                     <a className="tip-jar-link" target="_blank" href="https://www.paypal.me/tip4tat">
                        <img src="paypal-logo.png" />
                     </a>
                     <a className="download-link last-element" href="https://filedn.com/lLL0lkOxLkGHJoHpDELDETb/SensationalRPG_1.01.pdf" download="Sensational_v1.01.pdf">Download</a>
                  </div>
               </div>;
   }
}


// module.exports = new ProjectsPage();