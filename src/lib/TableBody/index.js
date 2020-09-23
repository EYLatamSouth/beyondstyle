import React from 'react';
import PropTypes from 'prop-types';
import { TableBody as TableBodyMui } from '@material-ui/core';
import Layout from '../Layout';

const TableBody = (props) => {
  return <TableBodyMui {...props}>{props.children}</TableBodyMui>;
};

TableBody.propTypes = {
  children: PropTypes.node.isRequired,
};


export default (props) => (
  <Layout>
    <TableBody {...props} />
  </Layout>
);
