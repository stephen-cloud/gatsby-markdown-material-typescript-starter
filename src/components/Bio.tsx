import React from 'react'
import { Follow } from 'react-twitter-widgets'
import config from '../../data/SiteConfig'
import { Typography, Theme, Grid, Fab, createStyles, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    }
  })
);

function Bio() {
  const classes = useStyles()

  return (
    <div >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1">Edit Bio component or pages/bio.tsx to include your contact information.</Typography>
        </Grid>
        <Grid item xs={12}>
          Originally written by <strong>{config.userName}</strong> who lives and works in San Francisco building useful things.
        </Grid>
        <Grid item xs={12}>
          Modified by Stephen Harrison <a href="mailto:stephen@stephen.cloud">stephen@stephen.cloud</a> who lives in Boston, MA porting <a href="https://www.gatsbyjs.org/starters/ammarjabakji/gatsby-markdown-blog-starter/">Gatsby Markdown Blog Starter</a> to basic Material UI TypeScript.
      </Grid>
        <Grid item xs={12}>
          <Follow username={config.userTwitter} />
        </Grid>
        <Grid item xs={12}>
          <a href="https://www.linkedin.com/in/stephenharrison/">
            <img className={classes.large} src={config.userAvatar} />
          </a>
        </Grid>
      </Grid >
    </div>
  )
}

export default Bio
