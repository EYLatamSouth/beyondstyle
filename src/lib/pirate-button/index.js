import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../layout';

const PirateButton = ({ style }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      color: theme.palette[style].contrastText,
      backgroundColor: theme.palette[style].main
    },
  }))

  const classes = useStyles();

  return (
    <Button className={classes.root}
    variant="contained">
      Pirate Button!
    </Button>
  );
};

export default (props) => (
  <Layout>
    <PirateButton style="primary" {...props} />
    <PirateButton style="secondary" {...props} />
    <PirateButton style="tertiary" {...props} />
    <PirateButton style="error" {...props} />
    <PirateButton style="success" {...props} />
    <PirateButton style="grey" {...props} />
  </Layout>
);
