import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, fade } from '@material-ui/core/styles';
// import Checkbox from '@material-ui/core/Checkbox';
import { Checkbox as MuiCheck } from '@material-ui/core';
import {
  CheckBoxRounded,
  CheckBoxOutlineBlankRounded,
  IndeterminateCheckBoxRounded
} from '@material-ui/icons';
import Layout from '../Layout';

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
    '&.MuiIconButton-colorSecondary, &.PrivateSwitchBase-checked-162': {
      color: theme.palette[props.style]
        ? theme.palette[props.style].main
        : theme.palette.grey[300]
    },
    '&.MuiCheckbox-indeterminate': {
      '&:not(.PrivateSwitchBase-checked-162)': {
        color: theme.palette.action.disabledBackground
      }
    },
    '&.Mui-disabled': {
      color: theme.palette.action.disabledBackground
    }
  })
}));

const Checkbox = (props) => {
  const classes = useStyles({ style: props.color });
  return (
    <MuiCheck
      {...props}
      checked={props.checked}
      name={props.name}
      value={props.value}
      checkedIcon={<CheckBoxRounded />}
      icon={<CheckBoxOutlineBlankRounded />}
      indeterminateIcon={<IndeterminateCheckBoxRounded />}
      onChange={props.handleChange}
      classes={{ ...classes }}
      color={
        props.color == 'primary' || props.color === 'secondary'
          ? props.color
          : 'default'
      }
    />
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  checkedIcon: PropTypes.node,
  indeterminateIcon: PropTypes.node,
  classes: PropTypes.object,
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  disabled: PropTypes.bool,
  indeterminate: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.any
};

Checkbox.defaultProps = {
  color: 'default',
  disabled: false,
  ariaLabel: ''
};

export default (props) => (
  <Layout>
    <Checkbox {...props} />
  </Layout>
);
