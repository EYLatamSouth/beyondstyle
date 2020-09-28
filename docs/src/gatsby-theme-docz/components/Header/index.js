import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Link,
  IconButton,
  SvgIcon
} from '@material-ui/core';
import { Layout } from 'beyondstyle';

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
  mainHeading: {
    marginLeft: theme.spacing(1.5)
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
    <Layout>
      <AppBar
        position='relative'
        color='primary'
        className={classes.noElevation}
      >
        <Toolbar component={Container} maxWidth={false} justify='space-between'>
          <Link href='/' color='inherit' className={classes.linkHome}>
            <Logo mini />
            <Typography
              component='h1'
              variant='h6'
              className={classes.mainHeading}
            >
              <span className={classes.bold}>Beyond</span>
              <span className={classes.thin}>Style</span>
            </Typography>
          </Link>
          <nav className={classes.mainNav}>
            <IconButton
              aria-label='GitHub repository'
              color='inherit'
              className={classes.navButton}
              component='a'
              href='https://github.com/EYLatamSouth/beyondstyle'
            >
              <SvgIcon color='inherit'>
                <path
                  d='M12,0.3C5.4,0.3,0,5.6,0,12.2c0,5.2,3.3,9.8,8.2,11.4C8.8,23.7,9,23.3,9,23v-2c-3.3,0.7-4-1.6-4-1.6
                  c-0.6-1.4-1.4-1.8-1.4-1.8C2.6,17,3.7,17,3.7,17c1.2,0,1.9,1.2,1.9,1.2c1,1.8,2.8,1.3,3.5,1c0-0.8,0.4-1.3,0.7-1.6
                  c-2.7-0.3-5.5-1.3-5.5-6c0-1.2,0.5-2.3,1.3-3.1C5.4,8.1,5,6.9,5.6,5.3c0,0,1-0.3,3.4,1.2c2-0.5,4-0.5,6,0c2.3-1.5,3.3-1.2,3.3-1.2
                  c0.6,1.6,0.2,2.8,0,3.2c0.9,0.8,1.3,1.9,1.3,3.2c0,4.6-2.8,5.6-5.5,5.9c0.5,0.4,0.9,1,0.9,2.2V23c0,0.3,0.1,0.7,0.8,0.6
                  c6.3-2.1,9.7-8.8,7.6-15.1C21.8,3.6,17.2,0.3,12,0.3'
                />
              </SvgIcon>
            </IconButton>
            <IconButton
              aria-label='npm package'
              color='inherit'
              className={classes.navButton}
              component='a'
              href='https://www.npmjs.com/package/beyondstyle'
            >
              <SvgIcon color='inherit'>
                <path d='M3,21h9V7.5h4.5V21H21V3H3V21z' />
              </SvgIcon>
            </IconButton>
          </nav>
        </Toolbar>
      </AppBar>
    </Layout>
  );
};
