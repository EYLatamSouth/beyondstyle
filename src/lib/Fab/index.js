import React from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../Layout';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    color: theme.palette[props.color]
      ? theme.palette.getContrastText(theme.palette[props.color].main)
      : theme.palette.getContrastText(theme.palette.grey[300]),
    backgroundColor: theme.palette[props.color]
      ? theme.palette[props.color].main
      : theme.palette.grey[300],
    '&:hover': {
      backgroundColor: theme.palette[props.color]
        ? theme.palette[props.color].dark
        : theme.palette.grey.A100,
      boxShadow: theme.shadows[8],
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: theme.shadows[8],
        backgroundColor: theme.palette[props.color]
          ? theme.palette[props.color].dark
          : theme.palette.grey[300]
      }
    },
    '&$focusVisible': {
      boxShadow: theme.shadows[6]
    },
    '&:active': {
      boxShadow: theme.shadows[8]
    }
  }),
  // disabled: {
  //   color: `${fade(theme.palette.common.black, .38)} !important`,
  //   backgroundColor: `${fade(theme.palette.common.black, .12)} !important`,
  //   boxShadow: `${theme.shadows[0]} !important`,
  // },
  extended: {
    borderRadius: 56 / 2,
    padding: '0 22px',
    minWidth: 56,
    height: 56,
    '& .MuiSvgIcon-root': {
      marginRight: 12
    },
    '&.MuiFab-sizeMedium': {
      width: 'auto',
      padding: '0 25px',
      borderRadius: 48 / 2,
      minWidth: 48,
      height: 48
    }
  },
  label: {
    fontSize: theme.typography.pxToRem(14),
    lineHeight: theme.typography.pxToRem(16),
    letterSpacing: theme.typography.pxToRem(1.6)
  }
}));

const FloatingButton = (props) => {
  const classes = useStyles({ color: props.color });
  return (
    <Fab
      {...props}
      classes={{ ...classes }}
      size={props.size !== 'large' ? 'medium' : 'large'}
      variant={props.variant !== 'extended' ? 'round' : 'extended'}
      color={
        props.color === 'primary' || props.color === 'secondary'
          ? props.color
          : 'default'
      }
    >
      {props.children}
    </Fab>
  );
};

FloatingButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  variant: PropTypes.oneOf(['extended', 'round']),
  size: PropTypes.oneOf(['large', 'small'])
};

FloatingButton.defaultProps = {
  color: 'primary',
  variant: 'round',
  size: 'large'
};

export default (props) => (
  <Layout>
    <FloatingButton {...props} />
  </Layout>
);
