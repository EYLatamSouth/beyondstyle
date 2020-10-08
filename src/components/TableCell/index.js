import React from 'react';
import { TableCell as TableCellMui } from '@material-ui/core';
import Theme from '../Theme';
import PropTypes from 'prop-types';
import { makeStyles, fade } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    minHeight: theme.spacing(12),
    height: theme.spacing(12),
    '&:first-child': {
      paddingLeft: theme.spacing(4.5),
      paddingRight: theme.spacing(4.5),
    }
  }),
  sizeSmall: {
    height: `${theme.spacing(7.75)}px !important`,
    minHeight: `${theme.spacing(7.75)}px !important`,
    paddingLeft: `${theme.spacing(2.25)}px !important`,
    paddingRight: `${theme.spacing(2.25)}px !important`,
    borderBottom: `1px solid ${fade(theme.palette.primary.main, 0.2)} !important`,
    '&:first-child': {
      paddingLeft: `${theme.spacing(3.5)}px !important`,
      paddingRight: `${theme.spacing(3.5)}px !important`
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
  <Theme>
    <TableCell {...props} />
  </Theme>
);
