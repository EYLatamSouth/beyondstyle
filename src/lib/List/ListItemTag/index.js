import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';

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
  }),
  iconProps: (props) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  })
}));

const ListItemTag = (props) => {
  const classes = useStyles();

  return (
    <ListItem
      {...props}
      className={`${classes.root} ${classes.iconProps}
  `}
    >
      {props.children}
    </ListItem>
  );
};

export default (props) => (
  <Layout>
    <ListItemTag {...props} />
  </Layout>
);
