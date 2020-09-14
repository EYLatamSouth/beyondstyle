import React from 'react';
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import logoInverted from './beyondlabs-logo_inverted.png';
import logoMiniInverted from './beyondlabs-logo_mini-inverted.png';

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
      <Hidden only='xs'>
        <img src={logoInverted} alt="BeyondLabs logo" width="auto" height="32" />
      </Hidden>
      <Hidden smUp>
        <img src={logoMiniInverted} alt="BeyondLabs logo" width="auto" height="32" />
      </Hidden>
    </div>
  );
}
