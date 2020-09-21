import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Text from '../../Text';
import PropTypes from 'prop-types';
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
      component='div'
      {...props}
      primary={
        <Text component={'span'} variant='body1' gutterBottom>
          {props.primary}
        </Text>
      }
      secondary={
        <Text component={'span'} variant='body2' gutterBottom>
          {props.secondary}
        </Text>
      }
      className={classes.root}
    ></MuiListItemText>
  );
};

Text.propTypes = {
  children: PropTypes.node
};

export default (props) => (
  <Layout>
    <ListItemText {...props} />
  </Layout>
);
