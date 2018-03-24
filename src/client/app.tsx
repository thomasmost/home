import * as React from "react";

import createBrowserHistory from "history/createBrowserHistory";
import { TcmFooter } from "./components/tcm-footer";

const browserHistory = createBrowserHistory();

export class App extends React.Component {
   constructor (props: {})
   {
     super(props);
   }
   render() {
      return (
         <div>
               <div className="imgWrapper">
                  <img src="../img/main_sq_centered.jpg" />
               </div>
               <h1 className="h1">Thomas Constantine Moore</h1>
               <h2 className="h2">actor, developer, and polymath</h2>
               <div id="page-container">
                  {/* <Router history={ browserHistory }>
                     <Route component={ App }>
                           <IndexRoute component={ CharacterSheet }/>
                           <Route path="contact" component={ ContactPage } />
                           <Route path="about" component={ AboutPage } />
                           {/* <Route path="users" component={ Users }>
                           <Route path="/user/:username" component={ User }/>
                           </Route>
                     </Route>
                  </Router> */}
               </div>
               <div className="divider"></div>
               {/* <TcmFooter /> */}
         </div>
      )
   }
}
