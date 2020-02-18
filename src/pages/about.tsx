import * as React from "react";
import Layout from "../components/layout";

export const About = () => (
  <Layout>
    <h3>About</h3>
    <div className="content-block">
      <p>
        I am an actor, writer, and developer.
      </p>
      <p>
        I graduated from Carnegie Mellon University in 2014, and I work as a software engineer at <a href="https://emburse.com/">Emburse</a>.
      </p>
      <p>
        I am passionate about immersive theater; I appeared in Quantum Theatre's production of <em>Tamara</em>, 
        as well as The Speakeasy Society's <em>Kansas Collection</em> and <em>Johnny Cycle</em>. I wrote the play <em><a href="https://www.romans.nyc">Romans</a></em>.
      </p>
      <p>
        I am the creator of the storytelling podcast, <em><a href="https://www.thomastellsastory.com">Thomas Tells a Story</a></em>.
      </p>
      <p>
        I have been playing tabletop roleplaying games since I was 13 and running campaigns since 15. I co-created the superhero RPG <em><a href="https://www.rooftops.city">Rooftops</a></em> with Darren Caulley and kickstarted <em><a href="https://www.kickstarter.com/projects/tcmoore/sensational-a-superpowered-rpg-where-empathy-matte">Sensational</a></em> in 2017. 
      </p>
  </div>
</Layout>
);

export default About;
