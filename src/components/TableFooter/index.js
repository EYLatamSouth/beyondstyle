import React from 'react';
import PropTypes from 'prop-types';
import { TableFooter as TableFooterMui } from '@material-ui/core';
import Theme from '../Theme';

const TableFooter = (props) => {
  return <TableFooterMui {...props}>{props.children}</TableFooterMui>;
};

TableFooter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default (props) => (
  <Theme>
    <TableFooter {...props} />
  </Theme>
);
