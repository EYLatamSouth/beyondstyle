import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { ListItemSecondaryAction as MuiListItemSecondaryAction } from '@material-ui/core';
import Layout from '../../Layout';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    paddingRight: theme.spacing(1.5),
    color: theme.palette.primary.light,
    '& > button[class^="MuiButtonBase-root-"]': {
      left: theme.spacing(2.5)
    },
    '& > p[class^="MuiTypography-root-"]': {
      textAlign: 'end'
    }
  })
}));

const ListItemSecondaryAction = (props) => {
  const classes = useStyles();

  return (
    <MuiListItemSecondaryAction {...props} className={classes.root}>
      {props.children}
    </MuiListItemSecondaryAction>
  );
};

ListItemSecondaryAction.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default (props) => (
  <Layout>
    <ListItemSecondaryAction {...props} />
  </Layout>
);
