import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import logo from './logo.png';

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(2)
  }
}));

export const Logo = () => {
  const classes = useStyles();

  return (
    <div className={classes.logoContainer}>
      <img src={logo} alt="BeyondLabs logo" width="auto" height="32" />
    </div>
  );
}
