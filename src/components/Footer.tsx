import React from 'react'
import config from '../../data/SiteConfig'
import { Theme, makeStyles, createStyles, Button, Link, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(13, 0)
    }
  }),
);

function Footer() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <footer>
        <Typography variant="caption" >{config.copyright}</Typography>
      </footer>
    </div>
  )
}

export default Footer
