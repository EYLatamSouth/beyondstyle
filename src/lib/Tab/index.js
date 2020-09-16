import React from 'react';
import PropTypes from 'prop-types';
import { Tab as TabMui } from '@material-ui/core';
import Layout from '../Layout';

const Tab = (props) => {
  return (
    <TabMui
      {...props}
      id={`simple-tab-${props.index}`}
      aria-controls={`simple-tabpanel-${props.index}`}
    >
      {props.children}
    </TabMui>
  );
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired
};

export default (props) => (
  <Layout>
    <Tab {...props} />
  </Layout>
);
