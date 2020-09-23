import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { clone, omit } from 'lodash';

import Layout from '../Layout';
import TableCell from '../TableCell';
import Badge from '../Badge';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .badge:first-child': {
      marginRight: theme.spacing(1)
    }
  }
}));

const TableCellBadge = (props) => {
  const classes = useStyles();
  const Props = omit(clone(props), ['itens']);

  if (!props.itens) return null;

  return (
    <TableCell {...Props} classes={{ ...classes }}>
      {props.itens.map((item, index) => (
        <Badge {...item} key={`badge-${item.label}-${index}`} />
      ))}
    </TableCell>
  );
};

TableCellBadge.propTypes = {
  itens: PropTypes.array.isRequired
};

export default (props) => (
  <Layout>
    <TableCellBadge {...props} />
  </Layout>
);
