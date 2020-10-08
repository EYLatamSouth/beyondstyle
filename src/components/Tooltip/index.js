import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Tooltip as MuiToooltip } from '@material-ui/core';
import Theme from '../Theme';

const useStyles = makeStyles((theme) => ({
  tooltip: (props) => ({
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.light,
    wordWrap: 'break-word',
    maxWidth: 85,
    fontSize: theme.typography.pxToRem(12),
    fontWeight: 'normal',
    letteSpacing: '0.004em',
    lineHeight: theme.typography.pxToRem(20),
    textAlign: 'center'
  })
}));

const Tooltip = (props) => {
  const classes = useStyles();

  return (
    <MuiToooltip
      classes={{
        tooltip: classes.tooltip
      }}
      {...props}
    />
  );
};

Tooltip.propTypes = {
  classes: PropTypes.object,
  id: PropTypes.string,
  placement: PropTypes.oneOf([
    'bottom-end',
    'bottom-start',
    'bottom',
    'left-end',
    'left-start',
    'left',
    'right-end',
    'right-start',
    'right',
    'top-end',
    'top-start',
    'top'
  ]),
  title: PropTypes.node.isRequired
};

Tooltip.defaultProps = {
  placement: 'bottom'
};

export default (props) => (
  <Theme>
    <Tooltip {...props} />
  </Theme>
);
