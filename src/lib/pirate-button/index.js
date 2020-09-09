import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';
import { myTheme } from '../../theme/palette';


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
    <ThemeProvider theme={myTheme}>
      <Button {...props} color="secondary" className={classes.normalSize}>
        Pirate Button!
      </Button>
    </ThemeProvider>
  );
};

export default PirateButton;