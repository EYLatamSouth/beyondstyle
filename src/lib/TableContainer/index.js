import React from 'react';
import { TableContainer as TableContainerMui } from '@material-ui/core';
import Layout from '../Layout';
import PropTypes from 'prop-types';


const TableContainer = (props) => {
  return <TableContainerMui {...props}>{props.children}</TableContainerMui>;
};

TableContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default (props) => (
  <Layout>
    <TableContainer {...props} />
  </Layout>
);
