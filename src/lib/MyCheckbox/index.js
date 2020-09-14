import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
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

const MyCheckbox = (props) => {
  const classes = useStyles({ style: props.color });
  return (
    <Checkbox
      {...props}
      checked={props.checked}
      classes={{ ...classes }}
      color={
        props.color == 'primary' || props.color === 'secondary'
          ? props.color
          : 'default'
      }
    ></Checkbox>
  );
};

// Checkbox.propTypes = {};

// Checkbox.defaultProps = {};

export default (props) => (
  <Layout>
    <MyCheckbox {...props} />
  </Layout>
);
