import * as React from "react";
import * as ReactDOM from "react-dom";
require("./client/sass/index");

import { App } from "./client/app";

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

   // img.src = require("./client/assets/bg.jpg");

};

abstract class HaltAnd
{
    static CatchFire()
    {
      ReactDOM.render(
              <App />,
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