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
  p {
    font-size: 1.2em;
    line-height: 1.5em;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

const Page = styled.main`
  min-height: 400px;
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
        <Page>{children}</Page>
        <div className="img-wrapper">
          <FeaturedImage />
        </div>
      </Container>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
