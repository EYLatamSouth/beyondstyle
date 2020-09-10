import React from 'react';
import PropTypes from "prop-types"
import { TextField as Field } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import Layout from '../layout';

const useStyles = makeStyles((theme) => ({
  filled: props => ({
    backgroundColor: theme.palette.grey[100]
  }),
  input: props => ({
    backgroundColor: theme.palette.grey[100]
  })
}));

const TextField = (props) => {
  const classes = useStyles({ color: props.color });

  if (props.variant === 'filled') {
    return (
      <Field
        {...props}
        InputProps={{
          classes: {
            ...classes,
            root: classes.filled
          }
        }}
        />
    )
  }
  return (
    <Field
      {...props}
      variant="outlined"
      classes={{...classes}}
    />
  )
}

TextField.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.boolean,
  variant: PropTypes.oneOf(['filled', 'outlined']),
}

TextField.defaultProps = {
  color: 'primary',
  disabled: false,
  variant: 'round'
};


export default (props) => (
  <Layout>
    <TextField {...props} />
  </Layout>
);
