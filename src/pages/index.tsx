import React, { useEffect } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout/Layout";
import PostListing from "../components/PostListing";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import { makeStyles, Theme, ThemeProvider } from "@material-ui/core";
import themes from "../theme";

type ThemeMode = "light" | "dark";

const Index = ({ data }) => {
  return (
    <Layout>
      <main>
        <Helmet title={config.siteTitle} />
        <SEO />
        <PostListing postEdges={data.allMarkdownRemark.edges} />
      </main>
    </Layout>
  );
};

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
            categories
          }
        }
      }
    }
  }
`;
