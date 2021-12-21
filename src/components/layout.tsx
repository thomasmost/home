import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql, Link } from "gatsby";

import { Navigation } from "./navigation";
import FeaturedImage from "./featured-image";
import styled from "@emotion/styled";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Courier New", serif;
  margin-left: 20px;
  p {
    font-size: 1.2em;
    line-height: 1.5em;
    a {
      text-decoration: underline !important;
    }
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

const Page = styled.div`
  min-height: 640px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PageContent = styled.main``;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  img {
    width: 33%;
    max-width: 400px;
    margin: 0;
  }
`;

const Layout: React.FC = ({ children }) => (
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
        <Header>
          <Link to="/">
            <h1>Thomas Constantine Moore</h1>
          </Link>

          <Navigation />
        </Header>
        <PageWrapper>
          <Page>
            <PageContent>{children}</PageContent>

            <div>© 2021 Thomas Constantine Moore</div>
          </Page>
          <FeaturedImage />
        </PageWrapper>
      </Container>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
