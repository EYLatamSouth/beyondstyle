import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItemIcon as MuiListItemIcon } from '@material-ui/core';
import Layout from '../../Layout';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    minWidth: 0,
    paddingBottom: theme.spacing(1),
    '& svg[class^="MuiSvgIcon-root-"]': {
      fill: theme.palette.primary.main
    },
    '& span[class^="makeStyles-badge-"]': {
      marginRight: theme.spacing(1.2) //'11px'
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
