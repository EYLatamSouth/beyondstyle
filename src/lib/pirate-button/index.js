import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../layout';

const useStyles = makeStyles((theme) => {
  return {
  root: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.grey[900]
  }
}
});

const PirateButton = () => {
  const classes = useStyles();

  return (
    <Button classes={{
      root: classes.root,
    }}
    color="primary" variant="contained">
      Pirate Button!
    </Button>
  );
};

export default (props) => (
  <Layout>
    <PirateButton {...props} />
  </Layout>
);
