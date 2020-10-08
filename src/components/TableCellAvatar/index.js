import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { clone, omit } from 'lodash';

import Theme from '../Theme';
import Avatar from '../Avatar';
import TableCell from '../TableCell';

const useStyles = makeStyles((theme) => ({
}));

const TableCellAvatar = (props) => {
  const classes = useStyles();
  const Props = omit(clone(props), ['avatarProps']);

  if (!props.avatarProps) return null;

  return <TableCell {...Props} classes={{ ...classes }}>
    <Avatar {...props.avatarProps} />
  </TableCell>;
};

TableCellAvatar.propTypes = {
  avatarProps: PropTypes.object.isRequired
};

export default (props) => (
  <Theme>
    <TableCellAvatar {...props} />
  </Theme>
);
