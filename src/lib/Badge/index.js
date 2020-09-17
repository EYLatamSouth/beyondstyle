import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout';

const Badge = (props) => {
  return (
    <div>
      oi
    </div>
  )
};

Badge.propTypes = {
  children: PropTypes.node.isRequired
};

export default (props) => (
  <Layout>
    <Badge {...props} />
  </Layout>
);
