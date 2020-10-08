import React from 'react';
import Typography from '@material-ui/core/Typography';
import Theme from '../Theme';
import PropTypes from 'prop-types';

const Text = (props) => {
  return <Typography {...props}>{props.children}</Typography>;
};

Text.propTypes = {
  children: PropTypes.node
};

export default (props) => (
  <Theme>
    <Text {...props} />
  </Theme>
);
