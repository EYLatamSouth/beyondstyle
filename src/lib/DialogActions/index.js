import React from 'react';
import PropTypes from 'prop-types';
import { DialogActions as DialogActionsMui } from '@material-ui/core';

import Layout from '../Layout';

const DialogActions = (props) => {
  return <DialogActionsMui {...props}>{props.children}</DialogActionsMui>;
};

DialogActions.propTypes = {
  children: PropTypes.node.isRequired,
};

DialogActions.defaultProps = {
};

export default (props) => (
  <Layout>
    <DialogActions {...props} />
  </Layout>
);
