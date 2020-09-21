import React from 'react';
import PropTypes from 'prop-types';
import { DialogContentText as DialogContentTextMui } from '@material-ui/core';

import Layout from '../Layout';

const DialogContentText = (props) => {
  return <DialogContentTextMui {...props}>{props.children}</DialogContentTextMui>;
};

DialogContentText.propTypes = {
  children: PropTypes.node.isRequired,
};

DialogContentText.defaultProps = {
};

export default (props) => (
  <Layout>
    <DialogContentText {...props} />
  </Layout>
);
