import React from 'react';
import { Table as TableMui } from '@material-ui/core';
import Layout from '../Layout';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
  })
}));

const Table = (props) => {
  const classes = useStyles({ mode: props.mode });

  return <TableMui {...props} classes={{ ...classes }}>{props.children}</TableMui>;
};

Table.propTypes = {
  children: PropTypes.node.isRequired
};

export default (props) => (
  <Layout>
    <Table {...props} />
  </Layout>
);
