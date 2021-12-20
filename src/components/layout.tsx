import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

import { Navigation } from "./navigation"
import FeaturedImage from "./featured-image"
import styled from "@emotion/styled"

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
    render={data => (
      <Container>
        <header>
          <Link to="/">
            <h1>
              {data.site.siteMetadata.title}
            </h1>
          </Link>
        </header>
        <div className="page-container">
        <main>
          {children}
        </main>
        </div>
        <Navigation />
        <div className="img-wrapper">
          <FeaturedImage />
        </div>
      </Container>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
