import React from "react";

import { Link } from "gatsby";
import { Container, Footer, FooterImage, Header } from "../components/layout";
import SEO from "../components/seo";
import { Navigation } from "../components/navigation";

const NotFoundPage = () => (
  <Container>
    <section>
      <SEO title={"404"} />
      <Header>
        <Link to="/">
          <h1>Thomas Constantine 404</h1>
        </Link>

        <Navigation />
      </Header>
      <main>
        <h2 style={{ marginLeft: "40px", marginTop: "33vh" }}>
          There's nothing here, unfortunately...
        </h2>
      </main>
    </section>
    <Footer>
      <div>© 2021 Thomas Constantine Moore</div>
      <FooterImage />
    </Footer>
  </Container>
);

export default NotFoundPage;
