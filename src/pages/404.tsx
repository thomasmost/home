import React from "react";

import { Link } from "gatsby";
import Layout from "../components/layout";

const NotFoundPage = () => (
  <Layout title={"404"}>
    <Link to="/">
      <h1>Thomas Constantine 404</h1>
    </Link>
    <h2 style={{ marginLeft: "40px", marginTop: "33vh" }}>
      There's nothing here, unfortunately...
    </h2>
  </Layout>
);

export default NotFoundPage;
