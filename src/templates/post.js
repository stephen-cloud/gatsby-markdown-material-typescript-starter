import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout/Layout'
import PostTags from '../components/PostTags'
import SocialLinks from '../components/SocialLinks'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import { Typography, Grid, IconButton, makeStyles, createStyles, Fab } from '@material-ui/core'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) =>
  createStyles({
    right: {
      float: 'right'
    },
    left: {
      float: 'left'
    },
  }),
);

export default ({ data, pageContext }) => {
  const classes = useStyles()
  const { slug, nexttitle, nextslug, prevtitle, prevslug } = pageContext
  const postNode = data.markdownRemark
  const post = postNode.frontmatter
  const date = postNode.fields.date

  if (!post.id) {
    post.id = slug
  }

  return (
    <Layout>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3">{post.title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1"> {date} &mdash; {postNode.timeToRead} Min Read{' '} </Typography>
        </Grid>
        <Grid item xs={12}>
          <PostTags tags={post.tags} />
        </Grid>
        <Grid item xs={12}>
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
        </Grid>
        <Grid item xs={12}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={1}>
              <Fab className={classes.left} size="small" href={nextslug} arialabel="next">
                <NavigateBeforeIcon />
              </Fab>
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography variant="body1">
                {prevtitle}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography className={classes.right} variant="body1">
                {nexttitle}
              </Typography>
            </Grid>
            <Grid item xs={12} md={1}>
              <Fab className={classes.right} size="small" href={nextslug} arialabel="next">
                <NavigateNextIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <SocialLinks postPath={slug} postNode={postNode} />
        </Grid>
      </Grid>
    </Layout>
  )
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        categories
        tags
      }
      fields {
        slug
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
