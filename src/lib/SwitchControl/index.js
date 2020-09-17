import React from 'react';
import Switch from '@material-ui/core/Switch';
import PropTypes from 'prop-types';
import { makeStyles, fade } from '@material-ui/core/styles';
import Layout from '../Layout';

const useStyles = makeStyles((theme) => ({
  switchBase: (props) => ({
    '&:not(.Mui-checked )': {
      color: theme.palette.common.white
    },
    color: theme.palette[props.style]
      ? theme.palette[props.style].main
      : theme.palette.grey[300],
    '&.Mui-checked:hover': {
      '&:hover': {
        color: theme.palette[props.style]
          ? `${theme.palette[props.style].dark} !important`
          : theme.palette.grey[300],
        backgroundColor: fade(theme.palette.action.hover, 0.04)
      }
    },
    '&.Mui-disabled': {
      color: theme.palette.grey[100]
    }
  })
}));
const SwitchControl = (props) => {
  const classes = useStyles({ style: props.color });
  return (
    <Switch
      {...props}
      classes={{ ...classes }}
      checked={props.checked}
      name={props.name}
      onChange={props.onChange}
      aria-label={props.ariaLabel}
      color={
        props.color === 'primary' || props.color === 'secondary'
          ? props.color
          : 'default'
      }
    />
  );
};

SwitchControl.propTypes = {
  checked: PropTypes.bool,
  classes: PropTypes.object,
  color: PropTypes.oneOf(['primary', 'secondary', 'default']),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.any
};

SwitchControl.defaultProps = {
  color: 'default',
  disabled: false
};

export default (props) => (
  <Layout>
    <SwitchControl {...props} />
  </Layout>
);
