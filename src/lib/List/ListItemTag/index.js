import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';

import Layout from '../../Layout';

const useStyles = makeStyles((theme) => ({
  iconProps: (props) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  })
}));

const ListItemTag = (props) => {
  const classes = useStyles();

  return (
    <ListItem {...props} className={classes.iconProps}>
      {props.children}
    </ListItem>
  );
};

export default (props) => (
  <Layout>
    <ListItemTag {...props} />
  </Layout>
);
