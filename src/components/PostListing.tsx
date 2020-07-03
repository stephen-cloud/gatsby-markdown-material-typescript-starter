import React from "react";
import { Typography, Grid, Link, Button, Card, CardContent, CardActionArea, CardActions, makeStyles, Theme, createStyles, IconButton, Fab } from "@material-ui/core";
import ArrowForward from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    right: {
      marginLeft: "auto"
    }
  })
);

const PostListing = ({ postEdges }) => {
  const classes = useStyles()

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
                  <Card>
                    <CardContent>
                      <Typography variant="h5" color="textSecondary" gutterBottom>{post.title}</Typography>
                      <Typography variant="caption" gutterBottom> {post.date} &mdash;{" "} <span>{post.categories.join(" / ")}</span> &mdash;{" "} {post.timeToRead} Min Read{" "} </Typography>
                      <Typography variant="body1">{post.excerpt}</Typography>
                    <CardActions>
                      <Fab className={classes.right} size="medium" href={post.path} key={post.title} aria-label="view">
                        <ArrowForward />
                      </Fab>
                    </CardActions>
                    </CardContent>
                  </Card>
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
