import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Text from '../../Text';
import { ListItemText as MuiListItemText } from '@material-ui/core';
import Layout from '../../Layout';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    color: theme.palette.primary.main,
    '& > p': {
      color: theme.palette.primary.light
    }
  })
}));

const ListItemText = (props) => {
  const classes = useStyles();

  return (
    <MuiListItemText
      {...props}
      primary={
        <Text variant='body1' gutterBottom>
          {props.primary}
        </Text>
      }
      secondary={
        <Text variant='body2' gutterBottom>
          {props.secondary}
        </Text>
      }
      className={classes.root}
    ></MuiListItemText>
  );
};

export default (props) => (
  <Layout>
    <ListItemText {...props} />
  </Layout>
);
