import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import Theme from '../Theme';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    color: theme.palette[props.style]
      ? theme.palette[props.style].main
      : theme.palette.grey[300],
    '&:hover': {
      color: theme.palette[props.style]
        ? `${theme.palette[props.style].dark} !important`
        : theme.palette.grey[300],
      backgroundColor: fade(theme.palette.action.hover, 0.04)
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
      onChange={props.handleChange}
      name={props.name}
      value={props.value}
      size='medium'
      color={
        props.color === 'primary' || props.color === 'secondary'
          ? props.color
          : 'default'
      }
      aria-label={props.ariaLabel}
    />
  );
};

RadioButton.propTypes = {
  checked: PropTypes.bool,
  classes: PropTypes.object,
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  onChange: PropTypes.func,
  value: PropTypes.any
};

RadioButton.defaultProps = {
  color: 'default',
  disabled: false
};

export default (props) => (
  <Theme>
    <RadioButton {...props} />
  </Theme>
);
