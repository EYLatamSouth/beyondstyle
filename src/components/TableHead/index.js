import React from 'react';
import PropTypes from 'prop-types';
import { TableHead as TableHeadMui } from '@material-ui/core';
import Theme from '../Theme';

const TableHead = (props) => {
  return <TableHeadMui {...props}>{props.children}</TableHeadMui>;
};

TableHead.propTypes = {
  children: PropTypes.node.isRequired,
};

export default (props) => (
  <Theme>
    <TableHead {...props} />
  </Theme>
);
