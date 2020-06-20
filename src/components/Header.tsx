import React from 'react'
import { Link } from 'gatsby'
import config from '../../data/SiteConfig'
import { AppBar, IconButton, Toolbar, Typography, Fab, Button, Theme, makeStyles, createStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }),
);

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar >
        <Link to="/" >
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <HomeIcon />
          </IconButton>
          </Link>
          <Typography className={classes.title} variant="h6" >
            {config.siteTitle}
          </Typography>
          <Button color="inherit">
            <Link to="/about" > About </Link>
          </Button>
          <Button color="inherit">
            <Link to="/contact" > Contact </Link>
          </Button>
          <Button color="inherit">
            <Link to="/bio" > Bio </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
