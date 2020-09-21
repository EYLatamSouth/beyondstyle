import React from 'react';
import PropTypes from 'prop-types';
import { DialogContent as DialogContentMui } from '@material-ui/core';

import Layout from '../Layout';

const DialogContent = (props) => {
  return <DialogContentMui {...props}>{props.children}</DialogContentMui>;
};

DialogContent.propTypes = {
  children: PropTypes.node.isRequired,
};

DialogContent.defaultProps = {
};

export default (props) => (
  <Layout>
    <DialogContent {...props} />
  </Layout>
);
