import React from 'react'
import config from '../../data/SiteConfig'
import { Theme, makeStyles, createStyles, Typography, Grid, Link, Divider } from '@material-ui/core'

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
      <Divider />
      <Link className={classes.link} variant="caption" color="inherit" href="https://github.com/stephen-cloud/gatsby-markdown-material-typescript-starter">
        On GitHub
        </Link>
      <Link className={classes.link} variant="caption" color="inherit" href="http://gatsby-markdown-material-typescript-starter.stephen.cloud/">
        Live Demo
        </Link>
      <Typography className={classes.link} variant="caption" >{config.copyright}</Typography>
    </footer>
  )
}

export default Footer
