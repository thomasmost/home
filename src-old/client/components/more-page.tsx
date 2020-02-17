import * as React from "react";
import { Link } from "react-router-dom";

export class MorePage extends React.Component {
   constructor (props: {})
   {
     super(props);
   }
   render() {
       return  <div
                  className="page">
                  <h3>More</h3>
                  <div className="more-container">
                     <p className="more-item">
                        <a href="/legacy">
                           Character Sheet (Old Site)
                        </a>
                     </p>
                     <p className="more-item">
                        <a href="https://filedn.com/lLL0lkOxLkGHJoHpDELDETb/professional_resume_tcmoore.pdf" download="Resume_TCMoore.pdf">
                           Resume
                        </a>
                     </p>
                     <p className="more-item">
                        <Link to="/gallery">
                           Unfettered Narcissism
                        </Link>
                     </p>
                  </div>
               </div>;
   }
}


// let projectBlock = require('./project-block')

// class ProjectsPage {

//    constructor ()
//    {
//       return t('div', {className: 'subpage'}, [
//          t('div', {className: 'header-text'}, 'Projects'),
//          t('div', {className: 'content-block'}, [
//             new projectBlock('Yollerhorn','../img/yollerhorn.jpg', 'Yollerhorn is a tool for creators to promote their work and grow their resume in a single unified space. Our goal is to build a robust app that brings artists and fans together, while serving the individual needs of a wide variety of endeavors, from theater festivals to podcasts. Version One is currently up and accepting new users.', 'https://www.yollerhorn.com'),
//             new projectBlock('Sensational','../img/sensational.png', '"The Superpowered RPG where Empathy Matters," Sensational is a tabletop game like Dungeons & Dragons or World of Darkness, where you play superpowered teens who can only access their abilities through a specific emotion. Following a successful Kickstarter, the game is now scheduled for release in September, 2017.', 'https://www.kickstarter.com/projects/tcmoore/sensational-a-superpowered-rpg-where-empathy-matte'),
//             new projectBlock('Express-TS-Sass-Starter','../img/ets-starter.jpg', "A framework-agnostic, ready-to-deploy starter-pack for building NodeJS applications with a modern development stack.", "https://github.com/thomasmost/express-ts-sass-starter"),
//             new projectBlock("Arcana for a New Age","../img/afana.jpg", "An original deck of cards inspired by Tarot, designed for both fortunetelling and gameplay in a new twist on trick-taking games. AfaNA is still very much a work in progress, but I plan on releasing the full deck sometime in 2017."),
//             new projectBlock("MicroMassive","../img/micromassive.png", "\"Microeconomic simulations on a massive scale.\" MicroMassive is a WIP but is intended to be an accessible sandbox for simulating thousands of individual transactions in real time and observing how those behaviors change with variables."),
//             new projectBlock("???","../img/ttas-preview.jpg", "Coming Soon.")
//          ])
//       ]);
//    }
// }



// module.exports = new ProjectsPage();