import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

import { Navigation } from "./navigation"
import FeaturedImage from "./featured-image"

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
      <div className="content-wrapper">
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
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
