import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

import "../sass/index.scss"
import { Navigation } from "./nav"
import FeaturedImage from "./featured-image"

const Layout = ({ children }) => (
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
      <div>
            <div className="content-wrapper">
               <div className="header">
                  <Link to="/">
                    <h1 className="h1">
                      {data.site.siteMetadata.title}
                    </h1>
                  </Link>
               </div>
               <div className="page-container">
                <main>{children}</main>
               </div>
               <Navigation />
               <div className="img-wrapper">
                 <FeaturedImage />
               </div>
            </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
