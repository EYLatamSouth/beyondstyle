import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Divider as MuiDivider } from '@material-ui/core';
import Layout from '../Layout';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.divider
  }
}));

const Divider = (props) => {
  const classes = useStyles();

  return (
    <MuiDivider
      {...props}
      classes={{ ...classes }}
      orientation={props.orientation}
    />
  );
};

Divider.propTypes = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical'])
};

Divider.defaultProps = {
  orientation: 'horizontal'
};

export default (props) => (
  <Layout>
    <Divider {...props} />
  </Layout>
);
