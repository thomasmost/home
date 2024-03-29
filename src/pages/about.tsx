import { OutLink } from "../components/OutLink";
import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

export const About = () => (
  <Layout title="About">
    <p>
      I'm a writer, actor, and software engineer. I created the podcast{" "}
      <OutLink href="https://www.thomastellsastory.com">
        <em>Thomas Tells a Story</em>
      </OutLink>
      . I produced a play called{" "}
      <OutLink href="https://www.romans.nyc">
        <em>Romans</em>
      </OutLink>{" "}
      at Dixon Place in 2021.
    </p>
    <p>Read something I've written:</p>
    <p>
      <Link to="/poetry">Short Sequences of Words</Link>
    </p>
    {/* <p>
      <OutLink href="https://www.thomastellsastory.com/download">
        Long Sequences of Words
      </OutLink>
    </p> */}
    <p>
      <OutLink href="https://www.usatoday.com/story/entertainment/movies/2021/04/20/oscars-husavik-saved-me-during-breakup-why-deserves-win/7245416002/">
        That USA Today piece
      </OutLink>
    </p>
  </Layout>
);

export default About;
