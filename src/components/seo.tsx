import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

interface ISEOPropTypes {
  description?: string;
  lang?: string;
  meta?: any[];
  keywords?: string[];
  title: string;
}

function SEO({ description, lang, meta, keywords, title }: ISEOPropTypes) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        return (
          <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <link
              rel="icon"
              href="https://www.thomasconstantinemoore.com/favicon.ico"
            />
            <meta property="description">{metaDescription}</meta>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@thomascmost" />
            <meta
              property="og:url"
              content="https://www.thomasconstantinemoore.com"
            />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={metaDescription} />
            <meta
              property="og:image"
              content="https://www.thomasconstantinemoore.com/card.png"
            />

            <link rel="canonical" href="https://thomasconstantinemoore.com/" />
          </Helmet>
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
