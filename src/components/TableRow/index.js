import React from 'react';
import { TableRow as TableRowMui } from '@material-ui/core';
import Theme from '../Theme';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    backgroundColor: 'transparent',
    '&:nth-of-type(odd)': {
      backgroundColor: props.mode === 'striped'
        ? theme.palette.grey[50]
        : 'transparent'
    },
    '& td[class^="MuiTableCell-root-"], th[class^="MuiTableCell-root-"]': {
      borderBottom: 'unset'
    }
  })
}));

const TableRow = (props) => {
  const classes = useStyles({ mode: props.mode });
  return <TableRowMui {...props} classes={{ ...classes }}>{props.children}</TableRowMui>;
};

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
  mode: PropTypes.oneOf(['normal', 'striped'])
};

TableRow.defaultProps = {
  mode: 'normal'
};

export default (props) => (
  <Theme>
    <TableRow {...props} />
  </Theme>
);
