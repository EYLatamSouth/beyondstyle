import React from 'react';
import PropTypes from 'prop-types';
import { Card as CardMui } from '@material-ui/core';
import Theme from '../Theme';

const Card = (props) => {
  return <CardMui {...props}>{props.children}</CardMui>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired
};

export default (props) => (
  <Theme>
    <Card {...props} />
  </Theme>
);
