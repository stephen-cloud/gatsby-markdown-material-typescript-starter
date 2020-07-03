import React from "react";
import config from "../../data/SiteConfig";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Theme,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import HelpIcon from "@material-ui/icons/Help";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import Brightness4SharpIcon from "@material-ui/icons/Brightness4Sharp";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  })
);

export interface HeaderProps {
  siteTitle?: string;
}

function Header({ siteTitle = "" }: HeaderProps) {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" href="/" aria-label="home">
            <HomeIcon />
          </IconButton>
          <Typography color="inherit" className={classes.title} variant="h6">
            {config.siteTitle}
          </Typography>
          <IconButton color="inherit" href="/about" aria-label="about">
            <HelpIcon />
          </IconButton>
          <IconButton color="inherit" href="/contact" aria-label="contact">
            <AlternateEmailIcon />
          </IconButton>
          <IconButton color="inherit" href="/bio" aria-label="bio">
            <MenuBookIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
