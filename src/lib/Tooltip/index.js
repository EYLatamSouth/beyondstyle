import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Tooltip as MuiToooltip } from '@material-ui/core';
import Layout from '../Layout';

const useStyles = makeStyles({
  root: {
    width: 500
  }
});

const Tooltip = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiToooltip {...props} />
    </div>
  );
};

Tooltip.propTypes = {};

Tooltip.defaultProps = {};

export default (props) => (
  <Layout>
    <Tooltip {...props} />
  </Layout>
);
