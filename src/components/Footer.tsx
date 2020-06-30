import React from 'react'
import config from '../../data/SiteConfig'
import { Theme, makeStyles, createStyles, Typography, Grid, Link, Divider } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(13, 0)
    },
    link: {
      margin: theme.spacing(0, 2, 0, 0)
    }
  }),
);

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer>
        <Divider/>
        <Link className={classes.link} underline="none" href="https://github.com/stephen-cloud/gatsby-markdown-material-typescript-starter">
          <Typography variant="caption">On GitHub</Typography>
        </Link>
        <Link className={classes.link} underline="none" href="http://gatsby-markdown-material-typescript-starter.stephen.cloud/">
          <Typography variant="caption">Live Demo</Typography>
        </Link>
        <Typography className={classes.link} variant="caption" >{config.copyright}</Typography>
      </footer>
    </div>
  )
}

export default Footer
