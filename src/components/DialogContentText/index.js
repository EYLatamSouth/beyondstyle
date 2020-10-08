import React from 'react';
import PropTypes from 'prop-types';
import { DialogContentText as DialogContentTextMui } from '@material-ui/core';

import Theme from '../Theme';

const DialogContentText = (props) => {
  return <DialogContentTextMui {...props}>{props.children}</DialogContentTextMui>;
};

DialogContentText.propTypes = {
  children: PropTypes.node.isRequired,
};

DialogContentText.defaultProps = {
};

export default (props) => (
  <Theme>
    <DialogContentText {...props} />
  </Theme>
);
