import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../layout';

const Component = ({ style }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      color: theme.palette[style].contrastText,
      backgroundColor: theme.palette[style].main
    },
  }))

  const classes = useStyles();

  return (
    <Button className={classes.root} variant="conained"
    >
      Button
    </Button>
  );
};

export default (props) => (
  <Layout>
    <Component style="secondary" {...props} />
  </Layout>
);
