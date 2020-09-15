import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, fade } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { Select as Field } from '@material-ui/core';
import Layout from '../Layout';
import UnfoldMoreRoundedIcon from '@material-ui/icons/UnfoldMoreRounded';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme) => ({}));

const Select = (props) => {
  const classes = useStyles({
    color: props.color
  });
  let startAdornment = null;
  const InputComponent = {
    outlined: OutlinedInput,
    filled: FilledInput
  }[props.variant];
  if (props.inputicon) {
    startAdornment = (
      <InputAdornment position='start'>
        <AccountCircle />
      </InputAdornment>
    );
  }


  return (
    <FormControl variant={props.variant} fullWidth>
      <InputLabel id={props.id}>{props.label}</InputLabel>
      <Field
        {...props}
        {...classes}
        IconComponent={UnfoldMoreRoundedIcon}
        input={<InputComponent startAdornment={startAdornment} />}
      >
        {props.children}
      </Field>
    </FormControl>
  );
};

Select.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
  variant: PropTypes.oneOf(['filled', 'outlined']),
  inputicon: PropTypes.elementType
};

Select.defaultProps = {
  color: 'primary',
  variant: 'filled',
  inputicon: null
};

export default (props) => (
  <Layout>
    <Select {...props} />
  </Layout>
);
