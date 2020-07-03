import React from 'react'
import { Follow } from 'react-twitter-widgets'
import config from '../../data/SiteConfig'
import { Typography, Theme, Grid, Fab, createStyles, makeStyles, Button, Link } from '@material-ui/core'

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
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography >Edit Bio component or pages/bio.tsx to include your contact information.</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography >
            Originally written by <strong>{config.userName}</strong> who lives and works in San Francisco building useful things.
        </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography >
            Modified by
          <Button href="https://github.com/stephen-cloud">Stephen Harrison</Button>
          and
          <Button href="https://github.com/aromanarguello">Alejandro Roman</Button>
          who ported
          <Button href="https://www.gatsbyjs.org/starters/ammarjabakji/gatsby-markdown-blog-starter/">Gatsby Markdown Blog Starter</Button>
          to basic Material UI TypeScript.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Thank you
          <Button href="https://github.com/ammarjabakji/">Ammar Jabakji</Button>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Follow username={config.userTwitter} />
        </Grid>
        <Grid item xs={12}>
          <Button color="primary" href="https://www.linkedin.com/in/stephenharrison/">
            <img className={classes.large} src={config.userAvatar} />
          </Button>
        </Grid>
      </Grid >
    </div >
  )
}

export default Bio
