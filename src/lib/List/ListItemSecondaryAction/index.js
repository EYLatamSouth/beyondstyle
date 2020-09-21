import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItemSecondaryAction as MuiListItemSecondaryAction } from '@material-ui/core';
import Layout from '../../Layout';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({})
}));

const ListItemSecondaryAction = (props) => {
  const classes = useStyles();

  return (
    <MuiListItemSecondaryAction
      {...props}
      primary={props.primary}
      secondary={props.secondary}
      className={classes.root}
    >
      {props.children}
    </MuiListItemSecondaryAction>
  );
};

export default (props) => (
  <Layout>
    <ListItemSecondaryAction {...props} />
  </Layout>
);
