import styled from "@emotion/styled";
import React from "react";

import Layout from "../components/layout";

export const Quote = styled.p`
  margin-top: 200px;
  font-size: 2.4em !important;

  @media screen and (max-width: 600px) {
    font-size: 2em !important;
  }
`;
const IndexPage = () => (
  <Layout title="Home">
    <Quote>"Something pithy about empty space."</Quote>
  </Layout>
);

export default IndexPage;
