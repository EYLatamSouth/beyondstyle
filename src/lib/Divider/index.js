import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider as MuiDivider } from '@material-ui/core';
import PropTypes from 'prop-types';
import Layout from '../Layout';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    backgroundColor: theme.palette.divider
  })
}));

const Divider = (props) => {
  const classes = useStyles();

  return (
    <MuiDivider
      {...props}
      classes={{ ...classes }}
      orientation={props.orientation}
    ></MuiDivider>
  );
};

Divider.propTypes = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical'])
};

export default (props) => (
  <Layout>
    <Divider {...props} />
  </Layout>
);
