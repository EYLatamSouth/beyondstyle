import React from 'react';
import PropTypes from 'prop-types';
import { Dialog as DialogMui } from '@material-ui/core';

import Theme from '../Theme';

const Dialog = (props) => {
  return <DialogMui {...props}>{props.children}</DialogMui>;
};

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
};

Dialog.defaultProps = {
};

export default (props) => (
  <Theme>
    <Dialog {...props} />
  </Theme>
);
