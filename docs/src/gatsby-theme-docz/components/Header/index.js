import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Container, Typography, Hidden, Link } from '@material-ui/core';

import { Logo } from '../Logo';

const useStyles = makeStyles((theme) => ({
  linkHome: {
    display: 'flex',
    alignItems: 'center',
    minHeight: theme.spacing(6),
    '&:hover': {
      textDecoration: 'none'
    }
  },
  mainNav: {
    flexGrow: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  noElevation: {
    boxShadow: theme.shadows[0]
  },
  strong: {
    fontWeight: 700
  },
  thin: {
    fontWeight: 300
  }
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative" color="primary">
      <Toolbar component={Container} maxWidth={false} justify="space-between">
        <Link href="/" color="inherit" className={classes.linkHome}>
          <Logo />
          <Typography component="h1" variant="h6">
            <Hidden only='xs'>
              <span className={classes.strong}>Beyond</span>
            </Hidden>
            <span className={classes.thin}>Style</span>
          </Typography>
        </Link>
        <nav className={classes.mainNav}>
          {/* <UserMenu /> */}
        </nav>
      </Toolbar>
    </AppBar>
  )
}
