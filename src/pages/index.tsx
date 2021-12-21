import styled from "@emotion/styled";
import React from "react";

import Layout from "../components/layout";

const Quote = styled.p`
  margin-top: 200px;
  font-size: 2.4em !important;
`;
const IndexPage = () => (
  <Layout>
    <Quote>"Something pithy about empty space."</Quote>
  </Layout>
);

export default IndexPage;
