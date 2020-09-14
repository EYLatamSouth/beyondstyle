import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../layout';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    color: theme.palette[props.style]
      ? theme.palette[props.style].main
      : theme.palette.grey[300],
    '&:hover': {
      color: theme.palette[props.style]
        ? `${theme.palette[props.style].dark} !important`
        : theme.palette.grey[300]
    },
    '&.MuiIconButton-colorSecondary': {
      color: theme.palette[props.style]
        ? theme.palette[props.style].main
        : theme.palette.grey[300]
    },
    '&.Mui-disabled': {
      color: theme.palette.action.disabledBackground
    }
  })
}));

const RadioButton = (props) => {
  const classes = useStyles({ style: props.color });
  return (
    <Radio
      {...props}
      classes={{ ...classes }}
      color={
        props.color == 'primary' || props.color == 'secondary'
          ? props.color
          : 'default'
      }
    />
  );
};

RadioButton.propTypes = {
  checked: PropTypes.bool,
  classes: PropTypes.object,
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary'])
};

RadioButton.defaultProps = {
  color: 'default',
  disabled: false,
  ariaLabel: ''
};

export default (props) => (
  <Layout>
    <RadioButton {...props} />
  </Layout>
);
