import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

import { Navigation } from "./navigation";
import FeaturedImage from "./featured-image";
import styled from "@emotion/styled";
import SEO from "./seo";
import { Footer } from "./footer";
import { Container } from "./content-container";

export const FooterImage = styled(FeaturedImage)`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Page = styled.div`
  min-height: 640px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Main = styled.main`
  width: 80%;
  @media screen and (max-width: 600px) {
    width: 100%;
    padding-right: 20px;
  }
`;

interface LayoutProps {
  title?: string;
  header?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, header }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <Container>
        <section>
          <SEO title={title || ""} />
          <Header>
            <Link to="/">
              <h1>{header || "Thomas Constantine Moore"}</h1>
            </Link>

            <Navigation />
          </Header>

          <Main>{children}</Main>
        </section>
        <Footer>
          <div>© 2021 Thomas Constantine Moore</div>
          <FooterImage />
        </Footer>
      </Container>
    )}
  />
);

export default Layout;
