import React from 'react';
import { TableCell as TableCellMui } from '@material-ui/core';
import Layout from '../Layout';
import PropTypes from 'prop-types';
import { makeStyles, fade } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    '&:first-child': {
      paddingLeft: theme.spacing(4.5),
      paddingRight: theme.spacing(4.5),
    }
  }),
  sizeSmall: {
    padding: '18px  28px !important',
    borderBottom: `1px solid ${fade(theme.palette.primary.main, 0.2)} !important`,
    '&:first-child': {
      paddingLeft: theme.spacing(3.5),
      paddingRight: theme.spacing(3.5),
    }
  }
}));

const TableCell = (props) => {
  const classes = useStyles();
  return <TableCellMui {...props} classes={{ ...classes, ...props.classes }}>{props.children}</TableCellMui>;
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
