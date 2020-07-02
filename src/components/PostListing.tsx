import React from "react";
import { Typography, Grid, Link } from "@material-ui/core";

const PostListing = ({ postEdges }) => {
  const getPostList = () => {
    const postList = postEdges.map((postEdge: any) => {
      return {
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        categories: postEdge.node.frontmatter.categories,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      };
    });

    return postList;
  };

  const postList = getPostList();

  return (
    <>
      <Grid container spacing={3}>
        {postList.map((post: any, i: number) => (
          <Grid item xs={12} md={6} key={i}>
            <article>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Link underline="none" href={post.path} key={post.title}>
                    <Typography variant="h5">{post.title}</Typography>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="caption">
                    {post.date} &mdash;{" "}
                    <span>{post.categories.join(" / ")}</span> &mdash;{" "}
                    {post.timeToRead} Min Read{" "}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">{post.excerpt}</Typography>
                </Grid>
              </Grid>
            </article>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PostListing;
