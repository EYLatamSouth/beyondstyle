import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';

import Theme from '../../Theme';

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

ListItemTag.propTypes = {
  iconProps: PropTypes.object,
  children: PropTypes.node
};

export default (props) => (
  <Theme>
    <ListItemTag {...props} />
  </Theme>
);
