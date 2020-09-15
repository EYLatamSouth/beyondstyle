import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, fade } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { Select as Field } from '@material-ui/core';
import Layout from '../Layout';
import UnfoldMoreRoundedIcon from '@material-ui/icons/UnfoldMoreRounded';

const useStyles = makeStyles((theme) => ({}));

const Select = (props) => {
  const classes = useStyles({
    color: props.color
  });

  return (
    <FormControl variant={props.variant} fullWidth>
      <InputLabel id={props.id}>{props.label}</InputLabel>
      <Field
        {...props}
        {...classes}
        IconComponent={UnfoldMoreRoundedIcon}
      >
        {props.children}
      </Field>
    </FormControl>
  );
};

Select.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
  variant: PropTypes.oneOf(['filled', 'outlined'])
};

Select.defaultProps = {
  color: 'primary',
  variant: 'filled'
};

export default (props) => (
  <Layout>
    <Select {...props} />
  </Layout>
);
