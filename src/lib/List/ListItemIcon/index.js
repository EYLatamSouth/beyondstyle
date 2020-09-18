import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItemIcon as MuiListItemIcon } from '@material-ui/core';

import Layout from '../../Layout';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    '& .MuiListItem-root': {
      '&:nth-child(even) *': {
        backgroundColor: theme.palette.grey[50]
      }
    }
  })
}));

const ListItemIcon = (props) => {
  const classes = useStyles();

  return (
    <MuiListItemIcon {...props} className={classes.root}>
      {props.children}
    </MuiListItemIcon>
  );
};

export default (props) => (
  <Layout>
    <ListItemIcon {...props} />
  </Layout>
);
