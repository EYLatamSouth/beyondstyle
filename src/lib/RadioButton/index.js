import React from 'react';
import PropTypes from 'prop-types';
import { Radio as MuiButton } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import Layout from '../layout';

const useStyles = makeStyles((theme) => ({
}));

const RadioButton = (props) => {
  // const classes = useStyles({style: props.color});
  return (
    <MuiButton/>
  );
};

RadioButton.propTypes = {

}

RadioButton.defaultProps = {

};

export default (props) => (
  <Layout>
    <RadioButton {...props} />
  </Layout>
);
