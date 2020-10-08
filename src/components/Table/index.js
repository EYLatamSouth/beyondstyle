import React from 'react';
import PropTypes from 'prop-types';
import { Table as TableMui } from '@material-ui/core';

import Theme from '../Theme';

const Table = (props) => {
  return <TableMui {...props}>{props.children}</TableMui>;
};

Table.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['medium', 'small'])
};

Table.defaultProps = {
  size: 'medium'
};

export default (props) => (
  <Theme>
    <Table {...props} />
  </Theme>
);
