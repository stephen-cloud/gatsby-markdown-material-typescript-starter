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

function Header() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton href="/" color="inherit" aria-label="home">
            <HomeIcon />
          </IconButton>
          <Typography className={classes.title} color="inherit" variant="h6">
            {config.siteTitle}
          </Typography>
          <IconButton href="/about" color="inherit" aria-label="about">
            <HelpIcon />
          </IconButton>
          <IconButton href="/contact" color="inherit" aria-label="contact">
            <AlternateEmailIcon />
          </IconButton>
          <IconButton href="/bio" color="inherit" aria-label="bio">
            <MenuBookIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
