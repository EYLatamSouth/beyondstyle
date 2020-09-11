import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Radio as MuiRadio } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Layout from '../layout';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    color: theme.palette[props.style].main,
    '&:hover': {
      color: `${theme.palette[props.style].dark} !important`
    },
    '&.MuiIconButton-colorSecondary': {
      color: theme.palette[props.style].main
    },
    '&.MuiIconButton-colorSecondary.Mui-disabled': {
      color: theme.palette.action.disabledBackground
    }
  })
}));

const RadioButton = (props) => {
  const classes = useStyles({ style: props.color });
  return (
    <Fragment>
      <MuiRadio
        classes={{ ...classes }}
        disabled={props.disabled}
        checked={props.checked}
      />
    </Fragment>
  );
};

RadioButton.propTypes = {};

RadioButton.defaultProps = {};

export default (props) => (
  <Layout>
    <RadioButton {...props} />
  </Layout>
);
