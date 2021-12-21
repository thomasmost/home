import React from "react";

import SEO from "../components/seo";
import { Link } from "gatsby";
import { Navigation } from "../components/navigation";
import FeaturedImage from "../components/featured-image";

const NotFoundPage = () => (
  <div className="content-wrapper">
    <header>
      <Link to="/">
        <h1>Thomas Constantine 404</h1>
      </Link>
    </header>
    <div className="page-container">
      <h2 style={{ marginLeft: "40px", marginTop: "33vh" }}>
        There's nothing here, unfortunately...
      </h2>
      <main>
        <SEO title="404: Not found" />
      </main>
    </div>
    <Navigation />
    <div className="img-wrapper">
      <FeaturedImage />
    </div>
  </div>
);

export default NotFoundPage;
