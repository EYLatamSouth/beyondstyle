import React from 'react';
import PropTypes from 'prop-types';
import { Dialog as DialogMui } from '@material-ui/core';

import Layout from '../Layout';

const Dialog = (props) => {
  return <DialogMui {...props}>{props.children}</DialogMui>;
};

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
};

Dialog.defaultProps = {
};

export default (props) => (
  <Layout>
    <Dialog {...props} />
  </Layout>
);
