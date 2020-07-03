import React from 'react'
import config from '../../data/SiteConfig'
import { Theme, makeStyles, createStyles, Typography, Grid, Link, Divider, Button } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      margin: theme.spacing(0, 2, 0, 0)
    }
  }),
);

function Footer() {
  const classes = useStyles();

  return (
    <footer>
      <Button className={classes.link} variant="contained" href="https://github.com/stephen-cloud/gatsby-markdown-material-typescript-starter">
        On GitHub
      </Button>
      <Button className={classes.link} variant="contained"  href="http://gatsby-markdown-material-typescript-starter.stephen.cloud/">
        Live Demo
      </Button>
      <Typography className={classes.link} variant="caption" >{config.copyright}</Typography>
    </footer>
  )
}

export default Footer
