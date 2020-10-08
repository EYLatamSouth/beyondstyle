import React from 'react';
import PropTypes from 'prop-types';
import { clone, omit } from 'lodash';
import { makeStyles, fade } from '@material-ui/core/styles';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

import Theme from '../Theme';
import IconButton from '../IconButton';
import TableCell from '../TableCell';

const useStyles = makeStyles((theme) => ({
}));

const TableCellActions = (props) => {
  const classes = useStyles();
  const cellProps = omit(clone(props), ['onRowUpdateProps', 'onRowDeleteProps']);

  return (
    <TableCell {...cellProps} classes={{ ...classes }}>
      {props.onRowUpdateProps ?
        <IconButton color='secondary' title="update" aria-label="update" {...props.onRowUpdateProps}>
          <EditRoundedIcon />
        </IconButton>
        : ''
      }
      {props.onRowDeleteProps ?
        <IconButton color='secondary' title="delete" aria-label="delete" {...props.onRowDeleteProps} >
          <DeleteRoundedIcon />
        </IconButton>
        : ''
      }
    </TableCell>
  );
};

TableCellActions.propTypes = {
  onRowDeleteProps: PropTypes.object,
  onRowUpdateProps: PropTypes.object,
};

export default (props) => (
  <Theme>
    <TableCellActions {...props} />
  </Theme>
);
