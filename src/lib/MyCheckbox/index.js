import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
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
        : theme.palette.grey[300]
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

const MyCheckbox = (props) => {
  const classes = useStyles({ style: props.color });
  return (
    <Checkbox
      {...props}
      checked={props.checked}
      checkedIcon={<CheckBoxRounded />}
      icon={<CheckBoxOutlineBlankRounded />}
      indeterminateIcon={<IndeterminateCheckBoxRounded />}
      classes={{ ...classes }}
      color={
        props.color == 'primary' || props.color === 'secondary'
          ? props.color
          : 'default'
      }
    />
  );
};

// Checkbox.propTypes = {};

// Checkbox.defaultProps = {};

export default (props) => (
  <Layout>
    <MyCheckbox {...props} />
  </Layout>
);
