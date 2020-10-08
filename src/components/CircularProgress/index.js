import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress as MuiCircularProgress } from '@material-ui/core';
import Theme from '../Theme';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    color: theme.palette[props.style]
      ? theme.palette[props.style].main
      : theme.palette.text.primary
  })
}));

const CircularProgress = (props) => {
  const classes = useStyles({ style: props.color });

  return (
    <div className={classes.root}>
      <MuiCircularProgress
        {...props}
        color={
          props.color === 'primary' || props.color === 'secondary'
            ? props.color
            : 'primary'
        }
      />
    </div>
  );
};

CircularProgress.propTypes = {
  classes: PropTypes.object,
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary']),
  variant: PropTypes.oneOf(['determinate', 'indeterminate', 'static'])
};

CircularProgress.defaultProps = {
  color: 'primary',
  variant: 'indeterminate'
};

export default (props) => (
  <Theme>
    <CircularProgress {...props} />
  </Theme>
);
