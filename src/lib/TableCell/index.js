import React from 'react';
import { TableCell as TableCellMui } from '@material-ui/core';
import Layout from '../Layout';
import PropTypes from 'prop-types';
import { makeStyles, fade } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    paddingTop: 31,
    paddingBottom: 31,
    paddingLeft: 38,
    paddingRight: 38
  }),
  sizeSmall: {
    padding: '16px 24px 12px 16px !important',
    border: '1px solid',
    borderColor: fade(theme.palette.primary.main, 0.2)
  }
}));

const TableCell = (props) => {
  const classes = useStyles({ mode: props.mode });
  return <TableCellMui {...props} classes={{ ...classes }}>{props.children}</TableCellMui>;
};

TableCell.propTypes = {
  children: PropTypes.node.isRequired,
};

TableCell.defaultProps = {
};

export default (props) => (
  <Layout>
    <TableCell {...props} />
  </Layout>
);
