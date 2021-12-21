import React from "react";

import { Link } from "gatsby";
import {
  Container,
  Header,
  Page,
  PageContent,
  PageWrapper,
} from "../components/layout";
import SEO from "../components/seo";
import { Navigation } from "../components/navigation";
import FeaturedImage from "../components/featured-image";

const NotFoundPage = () => (
  <Container>
    <SEO title={"404"} />
    <Header>
      <Link to="/">
        <h1>Thomas Constantine 404</h1>
      </Link>

      <Navigation />
    </Header>
    <PageWrapper>
      <Page>
        <PageContent>
          <h2 style={{ marginLeft: "40px", marginTop: "33vh" }}>
            There's nothing here, unfortunately...
          </h2>
        </PageContent>

        <div>© 2021 Thomas Constantine Moore</div>
      </Page>
      <FeaturedImage />
    </PageWrapper>
  </Container>
);

export default NotFoundPage;
