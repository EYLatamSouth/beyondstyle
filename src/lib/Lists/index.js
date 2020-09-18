import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Layout from '../Layout';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    '& .MuiListItem-root': {
      '&:nth-child(even)': {
        // left: "-4%",
        // bottom: "auto",
        backgroundColor: theme.palette.grey[50]
      }
    }
  })
}));

const Lists = (props) => {
  const classes = useStyles();

  return (
    <List {...props} className={classes.root}>
      <ListItem>
        <ListItemText primary='Primary text' secondary='Secondary text' />
      </ListItem>
      <ListItem>
        <ListItemText primary='Primary text' secondary='Secondary text' />
      </ListItem>
      <ListItem>
        <ListItemText primary='Primary text' secondary='Secondary text' />
      </ListItem>
    </List>
  );
};

export default (props) => (
  <Layout>
    <Lists {...props} />
  </Layout>
);
