import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItemText as MuiListItemText } from '@material-ui/core';
import Layout from '../../Layout';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({})
}));

const ListItemText = (props) => {
  const classes = useStyles();

  return (
    <MuiListItemText
      {...props}
      primary={props.primary}
      secondary={props.secondary}
      className={classes.root}
    ></MuiListItemText>
  );
};

export default (props) => (
  <Layout>
    <ListItemText {...props} />
  </Layout>
);
