import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

export const About = () => (
  <Layout>
    <h3>About</h3>
    <div className="content-block">
      <p>
        I'm an actor, writer, and developer.
      </p>
      <p>
        I graduated from Carnegie Mellon University in 2014, and I currently work as a software engineer in New York.
      </p>
      <p>
        I am passionate about immersive theater; I appeared in Quantum Theatre's production of <em>Tamara</em>, 
        as well as The Speakeasy Society's <em>Kansas Collection</em> and <em>Johnny Cycle</em>. I wrote the play <em><a href="https://www.romans.nyc">Romans</a></em>.
      </p>
      <p>
        I am the creator of the storytelling podcast, <em><a href="https://www.thomastellsastory.com">Thomas Tells a Story</a></em>.
      </p>
      <nav>
        <Link to="/poetry">Short Sequences of Words</Link>
        <Link to="https://www.thomastellsastory.com/downloads">Long Sequences of Words</Link>
      </nav>
  </div>
</Layout>
);

export default About;
