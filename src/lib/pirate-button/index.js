import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  normalSize: {
    minHeight: theme.spacing(7),
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3)
  }
}));

const PirateButton = (props) => {
  const classes = useStyles();

  return (
    <Button {...props} className={classes.normalSize}>
      Pirate Button!
    </Button>
  );
};

export default PirateButton;
