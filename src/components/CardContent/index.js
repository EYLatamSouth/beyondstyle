import React from 'react';
import PropTypes from 'prop-types';
import { CardContent as CardContentMui } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Theme from '../Theme';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 12,
    paddingBottom: 12,
    '&:last-child': {
      paddingBottom: 12
    }
  }
}));

const CardContent = (props) => {
  const classes = useStyles();

  return (
    <CardContentMui {...props} classes={{ ...classes }}>
      {props.children}
    </CardContentMui>
  );
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired
};

export default (props) => (
  <Theme>
    <CardContent {...props} />
  </Theme>
);
