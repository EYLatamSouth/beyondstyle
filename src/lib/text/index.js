import React from 'react';
import Typography from '@material-ui/core/Typography';
import Layout from '../layout';
import PropTypes from 'prop-types';

const Text = (props) => {

  return (
    <Typography {...props}>
    {props.children}
  </Typography>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
}

export default (props) => (
  <Layout>
    <Text {...props}></Text>
  </Layout>
);
