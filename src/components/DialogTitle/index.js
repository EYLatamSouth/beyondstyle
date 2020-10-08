import React from 'react';
import PropTypes from 'prop-types';
import { DialogTitle as DialogTitleMui } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';

import Theme from '../Theme';

const useStyles = makeStyles((theme) => ({
  root: {
    lineHeight: theme.typography.pxToRem(26),
    fontSize: theme.typography.pxToRem(16)
  }
}));

const DialogTitle = (props) => {
  const classes = useStyles();
  return (
    <DialogTitleMui
      disableTypography
      classes={{...classes}}
      {...props}
    >
      {props.children}
    </DialogTitleMui>
  );
};

DialogTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

DialogTitle.defaultProps = {
};

export default (props) => (
  <Theme>
    <DialogTitle {...props} />
  </Theme>
);
