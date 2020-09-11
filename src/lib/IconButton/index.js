import React from 'react';
import PropTypes from "prop-types"
import IconButton from '@material-ui/core/IconButton';
import Layout from '../layout';
import { makeStyles, fade } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: props => ({
    padding: 10,
    color: theme.palette[props.color] ? theme.palette[props.color].main : '',
    '&:hover': {
      backgroundColor: fade(
        theme.palette[props.color] ? theme.palette[props.color].main : theme.palette.action.active,
        theme.palette.action.hoverOpacity
      )
    },
  }),
  disabled: {
    color: `${fade(theme.palette.common.black, .38)} !important`,
    backgroundColor: `${fade(theme.palette.common.black, .12)} !important`,
    boxShadow: `${theme.shadows[0]} !important`,
  },
  contained: props => ({
    color: theme.palette[props.color] ? theme.palette.getContrastText(theme.palette[props.color].main) : theme.palette.getContrastText(theme.palette.grey[300]),
    backgroundColor: theme.palette[props.color] ? theme.palette[props.color].main : theme.palette.grey[300],
    boxShadow: theme.shadows[2],
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: theme.palette[props.color] ? theme.palette[props.color].dark : theme.palette.grey.A100,
      boxShadow: theme.shadows[4],
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: theme.shadows[2],
        backgroundColor: theme.palette[props.color] ? theme.palette[props.color].dark : theme.palette.grey[300],
      },
    },
    '&$focusVisible': {
      boxShadow: theme.shadows[6],
    },
    '&:active': {
      boxShadow: theme.shadows[8],
    },
  }),
}));

const ButtonWithIcon = (props) => {
  const classes = useStyles({ color: props.color });

  if (props.variant === 'contained') {
    return (
      <IconButton {...props} classes={{
        root: classes.contained,
        disabled: classes.disabled
      }}>
        {props.children}
      </IconButton>
      )
  }

  return (
    <IconButton {...props} classes={{...classes}}>
      {props.children}
    </IconButton>
  )
}

ButtonWithIcon.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  variant: PropTypes.string
}

ButtonWithIcon.defaultProps = {
  color: 'default',
  variant: 'outlined'
};


export default (props) => (
  <Layout>
    <ButtonWithIcon {...props} />
  </Layout>
);
