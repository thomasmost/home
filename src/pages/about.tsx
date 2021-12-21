import { OutLink } from "@/components/OutLink";
import * as React from "react";
import Layout from "../components/layout";

export const About = () => (
  <Layout>
    <p>
      I'm a writer, actor, and software engineer. I created the podcast{" "}
      <OutLink href="https://www.thomastellsastory.com">
        <em>Thomas Tells a Story</em>
      </OutLink>
      . I recently produced my play{" "}
      <OutLink href="https://www.romans.nyc">
        <em>Romans</em>
      </OutLink>{" "}
      at Dixon Place in the Lower East Side.
    </p>
  </Layout>
);

export default About;
