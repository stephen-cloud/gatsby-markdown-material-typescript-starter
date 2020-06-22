import React from 'react'
import config from '../../data/SiteConfig'
import { AppBar, IconButton, Toolbar, Typography, Fab, Button, Theme, makeStyles, createStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';
import CallIcon from '@material-ui/icons/Call';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Brightness4SharpIcon from '@material-ui/icons/Brightness4Sharp';

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

export interface HeaderProps {
  siteTitle?: string
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

function Header({ siteTitle = '', onToggleTheme }: HeaderProps) {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" color="inherit">
        <Toolbar >
          <IconButton href="/" aria-label="home">
            <HomeIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" >
            {config.siteTitle}
          </Typography>
          <IconButton href="/about" aria-label="about">
            <HelpIcon />
          </IconButton>
          <IconButton href="/contact" aria-label="contact">
            <CallIcon />
          </IconButton>
          <IconButton href="/bio" aria-label="bio">
            <MenuBookIcon />
          </IconButton>
          <IconButton onClick={onToggleTheme} aria-label="light dark">
            <Brightness4SharpIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
