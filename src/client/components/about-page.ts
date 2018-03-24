import React from "react";

// export class AboutPage {

//    constructor ()
//    {
//       return t('div', {className: 'subpage'}, [
//           t('div', {className: 'header-text'}, 'About'),
//           t('div', {className: 'content-block'}, [
//               t('p', null, 'Thomas is an actor, writer, and software engineer operating out of Brooklyn. Beyond theater and art, he nurtures interests in coffee-brewing, whiskey-drinking, and NASA-recommended houseplants. Thomas graduated from Carnegie Mellon University with a BFA in Acting in 2014. He co-founded and co-engineered the event networking site Yollerhorn, and he\'s currently a senior engineer with MedLever, Inc.'),
//               t('hr', null, null),
//               t('p', null, 'This site was built on NodeJS, Express, and InfernoJS using TypeScript, SASS, and Webpack.'),
//               t('p', null, [
//                 'I published a starter-kit based on the tools and architecture I landed on for this project. You can check that out ',
//                 t('a', {href: 'https://github.com/thomascmost/express-ts-sass-starter', target: '_blank'}, 'here on my GitHub'),
//                 ' if you\'re interested.']),
//               t('p', null, 'I\'d like to extend a catch-all thank you to the development community, without whom I would be in a near-continuous state of despair.')])
//         ])
//    }
// }

.
export class AboutPage extends React.Component<{}, {}> {
   render() {
       return  <div 
                  className="subPage">
                  <div className="header-text">About</div>
                  <div className="content-block">
                  </div>
               </div>;
   }
}


module.exports = new AboutPage();