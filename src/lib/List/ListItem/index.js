import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem as MuiListItem } from '@material-ui/core';
import Layout from '../../Layout';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    '& .MuiListItem-root': {
      '&:nth-child(even)': {
        backgroundColor: theme.palette.grey[50]
      }
    }
  })
  // iconProps: (props) => ({
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'flex-start'
  // })
}));

const ListItem = (props) => {
  const classes = useStyles();

  return (
    <MuiListItem {...props} className={`${classes.root}`}>
      {props.children}
    </MuiListItem>
  );
};

export default (props) => (
  <Layout>
    <ListItem {...props} />
  </Layout>
);
