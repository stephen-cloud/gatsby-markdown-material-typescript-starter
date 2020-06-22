import React from 'react'
import { Typography, Grid, Button } from '@material-ui/core'
import Categories from './Categories'
import Layout from '../layout/Layout'

const PostListing = ({ postEdges }) => {
  const getPostList = () => {
    const postList = []
    postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        categories: postEdge.node.frontmatter.categories,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      })
    })
    return postList
  }

  const postList = getPostList()

  return (
    <>
      <Grid container spacing={5}>
        {/* Your post list here. */
          postList.map(post => (
            <Grid item xs={12} md={6}>
              <article >
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Button color="primary" href={post.path} key={post.title}>
                      <Typography variant="h5">
                        {post.title}
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="caption">
                      {post.date} &mdash; <span>{post.categories.join(' / ')}</span>{' '} &mdash; {post.timeToRead} Min Read{' '}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">{post.excerpt}</Typography>
                  </Grid>
                </Grid>
              </article>
            </Grid>
          ))
        }
      </Grid>
    </>
  )
}

export default PostListing
