import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, fade } from '@material-ui/core/styles';
import Button from '../Button';
import Layout from '../Layout';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    padding: 10,
    color: theme.palette[props.color] ? theme.palette[props.color].main : '',
    '&:hover': {
      backgroundColor: fade(
        theme.palette[props.color]
          ? theme.palette[props.color].main
          : theme.palette.action.active,
        theme.palette.action.hoverOpacity
      )
    }
  }),
  disabled: {
    color: `${fade(theme.palette.common.black, 0.38)} !important`,
    backgroundColor: `${fade(theme.palette.common.black, 0.12)} !important`,
    boxShadow: `${theme.shadows[0]} !important`
  },
  contained: (props) => ({
    color: theme.palette[props.color]
      ? theme.palette[props.color].contrastText
      : theme.palette.getContrastText(theme.palette.grey[300]),
    backgroundColor: theme.palette[props.color]
      ? theme.palette[props.color].main
      : theme.palette.grey[300],
    boxShadow: theme.shadows[2],
    borderRadius: '4px',
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.short
    }),
    '&:hover': {
      backgroundColor: theme.palette[props.color]
        ? theme.palette[props.color].dark
        : theme.palette.grey.A100,
      boxShadow: theme.shadows[4],
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: theme.shadows[2],
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
  })
}));

const ButtonWithIcon = (props) => {
  const classes = useStyles({ color: props.color });

  if (Array.isArray(props.children)) {
    return <Button {...props}>{props.children}</Button>;
  }

  if (props.variant === 'contained') {
    return (
      <IconButton
        {...props}
        classes={{
          root: classes.contained,
          disabled: classes.disabled
        }}
        color={
          props.color === 'primary' || props.color === 'secondary'
            ? props.color
            : 'default'
        }
      >
        {props.children}
      </IconButton>
    );
  }

  return (
    <IconButton
      {...props}
      classes={{
        root: classes.root,
        disabled: classes.disabled
      }}
      color={
        props.color === 'primary' || props.color === 'secondary'
          ? props.color
          : 'default'
      }
    >
      {props.children}
    </IconButton>
  );
};

ButtonWithIcon.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  variant: PropTypes.oneOf(['contained', 'outlined'])
};

ButtonWithIcon.defaultProps = {
  color: 'primary',
  variant: 'outlined'
};

export default (props) => (
  <Layout>
    <ButtonWithIcon {...props} />
  </Layout>
);
