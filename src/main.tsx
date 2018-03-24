import * as React from "react";
import * as ReactDOM from "react-dom";

import createBrowserHistory from "history/createBrowserHistory";
const history = createBrowserHistory();

import {
   Link,
   match,
   Redirect
 } from "react-router-dom";

import { Route, Router, Switch } from "react-router";

import { App } from "./client/app";
import { LandingPage } from "./client/components/landing-page";
import { AboutPage } from "./client/components/about-page";

// SASS
require("./client/sass/index");

window.onload = function loadStuff() {
  // Quit early if older browser (e.g. IE 8).
  if (!("addEventListener" in window)) {
    return;
  }

  let win = window;
  let doc = win.document;
  let img = new Image();
  let header = doc.getElementById("bg");
  let enhancedClass = "bg-loaded";

  // Assign an onLoad handler to the dummy image *before* assigning the src
  img.onload = function () {
     if (header)
     {
         header.className += " " + enhancedClass;
     }
  };
  // Finally, trigger the whole preloading chain by giving the dummy
  // image its source.

   img.src = require("./client/assets/deepspace.jpg");

};

abstract class HaltAnd
{
    static CatchFire()
    {
      ReactDOM.render(
         <Router history={history}>
            <App>
               <Switch>
                  <Route exact path="/" component={ LandingPage } />
                  {/* <Route path="contact" component={ ContactPage } /> */}
                  <Route path="/about" component={ AboutPage } />
                  {/* <Route path="users" component={ Users }>
                  <Route path="/user/:username" component={ User }/>
               </Route>*/}
               </Switch>
            </App>
         </Router>,
          document.getElementById("app")
      );

      //   var twitterLogo = require("./assets/twitter.svg");
      //   var tLogo = require("./assets/tumblr.svg");
      //   var iLogo = require("./assets/instagram.svg");
      //   var yLogo = require("./assets/yollerhorn.svg");

      //   document.getElementById("twitter-footer-link").innerHTML = twitterLogo;
      //   document.getElementById("tumblr-footer-link").innerHTML = tLogo;
      //   document.getElementById("yollerhorn-footer-link").innerHTML = yLogo;
      //   document.getElementById("instagram-footer-link").innerHTML = iLogo;
    }
}

// Components

// var stateNavigator = new StateNavigator([
//   {key: "home", route: ""},
//   {key: "contact", route: "contact"},
//   {key: "about", route: "about"},
//   {key: "projects", route: "projects"},
//   {key: "project", route: "projects/{name}", defaultTypes: {name: "string"}, trackCrumbTrail: true}
// ]);

declare var ga: any;

  ga("send", {
    hitType: "pageview",
    page: "home"
  });

HaltAnd.CatchFire();