import React from 'react';
import Layout from '../Layout';
import PropTypes from 'prop-types';
import { MenuItem as Item } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 12,
    paddingBottom: 12
  }
}));

const MenuItem = (props) => {
  const classes = useStyles();
  return (
    <Item {...props} classes={{ ...classes }}>
      {props.children}
    </Item>
  );
};

MenuItem.propTypes = {
  children: PropTypes.node.isRequired
};

export default (props) => (
  <Layout>
    <MenuItem {...props} />
  </Layout>
);
