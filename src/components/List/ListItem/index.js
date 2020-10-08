import React from 'react';
import PropTypes from 'prop-types';
import { ListItem as MuiListItem } from '@material-ui/core';
import Theme from '../../Theme';

const ListItem = (props) => {
  return <MuiListItem {...props}>{props.children}</MuiListItem>;
};

ListItem.propTypes = {
  alignItems: PropTypes.oneOf(['flex-start', 'center']),
  autoFocus: PropTypes.bool,
  component: PropTypes.elementType,
  divider: PropTypes.bool,
  disableGutters: PropTypes.bool,
  disabled: PropTypes.bool,
  dense: PropTypes.bool
};

ListItem.defaultProps = {
  alignItems: 'center',
  autoFocus: false,
  button: false,
  ContainerComponent: 'li',
  disabled: false,
  dense: false,
  disableGutters: false,
  divider: false,
  selected: false
};

export default (props) => (
  <Theme>
    <ListItem {...props} />
  </Theme>
);
