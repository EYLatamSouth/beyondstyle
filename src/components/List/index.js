import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { List as MuiList } from '@material-ui/core';
import Theme from '../Theme';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    padding: 0,
    width: '100%',
    maxWidth: theme.spacing(45),
    backgroundColor: theme.palette.background.paper,
    '& > li': {
      minHeight: theme.spacing(6.25),
      maxHeight: theme.spacing(14.25),
      '&:nth-child(even)': {
        backgroundColor: theme.palette.grey[50]
      }
    }
  })
}));

const List = (props) => {
  const classes = useStyles();
  return (
    <MuiList {...props} className={classes.root}>
      {props.children}
    </MuiList>
  );
};

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

List.defaultProps = {
  component: 'ul',
  disablePadding: false,
  dense: false
};

export default (props) => (
  <Theme>
    <List {...props} />
  </Theme>
);
