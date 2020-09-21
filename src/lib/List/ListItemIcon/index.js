import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { ListItemIcon as MuiListItemIcon } from '@material-ui/core';
import Layout from '../../Layout';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    minWidth: 0,
    paddingBottom: theme.spacing(1),
    '& svg[class^="MuiSvgIcon-root-"]': {
      fill: theme.palette.primary.main,
      marginTop: theme.spacing(1)
    },
    '& span[class^="makeStyles-badge-"]': {
      marginRight: theme.spacing(1.2)
    }
  })
}));

const ListItemIcon = (props) => {
  const classes = useStyles();

  return (
    <MuiListItemIcon {...props} ref={props.ref} className={classes.root}>
      {props.children}
    </MuiListItemIcon>
  );
};

ListItemIcon.propTypes = {
  iconProps: PropTypes.object,
  children: PropTypes.node
};

export default (props) => (
  <Layout>
    <ListItemIcon {...props} />
  </Layout>
);
