import * as React from "react";
import Gallery from 'react-photo-gallery';
import { ProjectBlock } from "../projects/project-block";

class Project {
   constructor(public title: string, public description: string, public imageUrl: string, public link?: string, public localLink: boolean = false) {}
}

const Projects: Project[] = [
      new Project("Yollerhorn",
                  "Yollerhorn is a tool for creators to promote their work and grow their resume in a single unified space. Our goal is to build a robust app that brings artists and fans together, while serving the individual needs of a wide variety of endeavors, from theater festivals to podcasts. Yollerhorn is currently on Version Two.",
                  "https://filedn.com/lLL0lkOxLkGHJoHpDELDETb/assets/yollerhorn.jpg",
                  "https://www.yollerhorn.com"
               ),
      new Project("Rebis Immersive",
                  "Rebis Immersive is a new theatre company dedicated to narrative driven immersive experiences. Founded with Katya Stepanov and Jesse Carrey-Beaver, workshops of the debut production of Three Sisters will begin this year.",
                  "https://filedn.com/lLL0lkOxLkGHJoHpDELDETb/assets/rebis.png",
                  "http://www.rebisimmersive.com"
               ),
      new Project("Sensational",
                  "\"The Superpowered RPG where Empathy Matters,\" Sensational is a tabletop game like Dungeons & Dragons or World of Darkness, where you play superpowered teens who can only access their abilities through a specific emotion. Following a successful Kickstarter, the game was released just before Christmas, 2017.",
                  "sensational.png",
                  "sensational",
                  true
               ),
      new Project("MedLever",
                  "MedLever provides apps to simplify the tasks associated with delivering high quality cancer care and reducing administrative and clinical burdens associated with today’s complex and siloed clinical systems. The company delivers interoperable solutions which grant better access to existing data systems.",
                  "medlever.png",
                  "http://www.medlever.com"
               )
]

export class ProjectsPage extends React.Component {
   constructor (props: {})
   {
     super(props);
   }
   render() {
      let projects = Projects
                     .map(x => <ProjectBlock
                                 title={x.title}
                                 imageUrl={x.imageUrl}
                                 description={x.description}
                                 link={x.link}
                                 localLink={x.localLink}    
                              />)
       return  <div
                  className="page">
                  <h3>Projects</h3>
                  <div className="projects-container">
                     {projects}
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
//             new projectBlock('Express-TS-Sass-Starter','../img/ets-starter.jpg', "A framework-agnostic, ready-to-deploy starter-pack for building NodeJS applications with a modern development stack.", "https://github.com/thomascmost/express-ts-sass-starter"),
//             new projectBlock("Arcana for a New Age","../img/afana.jpg", "An original deck of cards inspired by Tarot, designed for both fortunetelling and gameplay in a new twist on trick-taking games. AfaNA is still very much a work in progress, but I plan on releasing the full deck sometime in 2017."),
//             new projectBlock("MicroMassive","../img/micromassive.png", "\"Microeconomic simulations on a massive scale.\" MicroMassive is a WIP but is intended to be an accessible sandbox for simulating thousands of individual transactions in real time and observing how those behaviors change with variables."),
//             new projectBlock("???","../img/ttas-preview.jpg", "Coming Soon.")
//          ])
//       ]);
//    }
// }



// module.exports = new ProjectsPage();