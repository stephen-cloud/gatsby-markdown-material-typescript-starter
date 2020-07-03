import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout/Layout'
import PostListing from '../components/PostListing'
import config from '../../data/SiteConfig'
import { Typography, Grid } from '@material-ui/core'

function CategoryTemplate({ data, pageContext }) {
  return (
    <Layout>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography color="inherit" variant="h6">Category: {pageContext.category}</Typography>
        </Grid>
        <Grid item xs={12}>
          <PostListing postEdges={data.allMarkdownRemark.edges} />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default CategoryTemplate

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
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
`
