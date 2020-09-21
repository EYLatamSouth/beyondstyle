import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List as MuiList } from '@material-ui/core';
import Layout from '../Layout';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    padding: 0,
    width: '100%',
    maxWidth: theme.spacing(45),
    backgroundColor: theme.palette.background.paper,
    '& > li': {
      '&:nth-child(even)': {
        backgroundColor: theme.palette.grey[50]
      }
    }
  })
}));

const List = (props) => {
  const classes = useStyles();
  return <MuiList {...props} className={classes.root}></MuiList>;
};

export default (props) => (
  <Layout>
    <List {...props} />
  </Layout>
);
