import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h2 style={{ marginTop: '33vh'}}>There's nothing here, unfortunately...</h2>
  </Layout>
)

export default NotFoundPage
