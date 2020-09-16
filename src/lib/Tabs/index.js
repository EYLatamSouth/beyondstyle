import React from 'react';
import PropTypes from 'prop-types';
import { Tabs as TabsMui } from '@material-ui/core';
import Layout from '../Layout';
import { makeStyles, fade } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}));

const Tabs = (props) => {
  return (
    <TabsMui
      {...props}
      indicatorColor={props.textColor}
    >
      {props.children}
    </TabsMui>
  );
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  textColor: PropTypes.oneOf(['primary', 'secondary'])
};

Tabs.defaultProps = {
  textColor: 'primary'
};

export default (props) => (
  <Layout>
    <Tabs {...props} />
  </Layout>
);
