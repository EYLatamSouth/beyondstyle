import React from 'react';
import PropTypes from 'prop-types';
import { Button as MuiButton } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import Theme from '../Theme';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    lineHeight: theme.typography.pxToRem(16),
    letterSpacing: '0.1em',
    fontSize: theme.typography.pxToRem(14),
    minHeight: theme.spacing(7),
    padding: `${theme.spacing(2.5)}px ${theme.spacing(3.75)}px`,
    color: theme.palette[props.style]
      ? theme.palette[props.style].main
      : theme.palette.text.primary,
    '&:hover': {
      backgroundColor: fade(
        theme.palette[props.style]
          ? theme.palette[props.style].dark
          : theme.palette.grey[300],
        0.04
      )
    },
    '&.MuiButton-text': {
      minHeight: theme.spacing(4.5),
      minWidth: theme.spacing(10.5)
    }
  }),
  label: {
    '& svg[class^="MuiSvgIcon-root-"]': {
      marginRight: 10
    }
  },
  contained: (props) => ({
    color: theme.palette[props.style]
      ? theme.palette[props.style].contrastText
      : theme.palette.contrastText,
    backgroundColor: theme.palette[props.style]
      ? theme.palette[props.style].main
      : theme.palette.grey[300],
    '&:hover': {
      backgroundColor: theme.palette[props.style]
        ? theme.palette[props.style].dark
        : theme.palette.grey[300],
      boxShadow: theme.shadows[4]
    }
  }),
  outlined: (props) => ({
    color: theme.palette[props.style]
      ? `${theme.palette[props.style].main}`
      : theme.palette.grey[300],
    backgroundColor: `transparent !important`,
    borderColor: fade(
      theme.palette[props.style]
        ? `${theme.palette[props.style].main}`
        : theme.palette.grey[300],
      0.5
    ),
    '&:hover': {
      borderColor: theme.palette[props.style]
        ? `${theme.palette[props.style].main}`
        : theme.palette.grey[300],
      backgroundColor: theme.palette[props.style]
        ? `${fade(theme.palette[props.style].main, 0.12)} !important`
        : theme.palette.grey[300]
    },
    '&.MuiButton-outlinedSecondary.Mui-disabled': {
      borderColor: theme.palette.action.disabledBackground
    }
  }),
  sizeSmall: {
    minHeight: `${theme.spacing(4.5)}px !important`,
    padding: `${theme.spacing(1.25)}px ${theme.spacing(2.25)}px !important`
  },
  sizeLarge: {
    minHeight: `${theme.spacing(8)}px !important`,
    padding: `${theme.spacing(3)}px ${theme.spacing(5)}px !important`
  }
}));

const Button = (props) => {
  const classes = useStyles({ style: props.color });
  return (
    <MuiButton
      {...props}
      classes={{ ...classes }}
      color={
        props.color === 'primary' || props.color === 'secondary'
          ? props.color
          : 'default'
      }
    >
      {props.children}
    </MuiButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

Button.defaultProps = {
  variant: 'contained',
  color: 'primary',
  size: 'medium'
};

export default (props) => (
  <Theme>
    <Button {...props} />
  </Theme>
);
