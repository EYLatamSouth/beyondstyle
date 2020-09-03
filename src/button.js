import React from 'react';
import PropTypes from 'prop-types';
import { Button as MuiButton } from '@material-ui/core';

const Button = ({ type, title, onClick }) => {
  return (
    <MuiButton variant="contained" color="primary">{title}</MuiButton>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  type: 'button',
  onClick: () => {}
};

export default Button;