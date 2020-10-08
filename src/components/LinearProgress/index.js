import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, fade } from '@material-ui/core/styles';
import { LinearProgress as MuiLinearProgress } from '@material-ui/core';
import Theme from '../Theme';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    color: theme.palette[props.style]
      ? theme.palette[props.style].main
      : theme.palette.text.primary,
    '& .MuiLinearProgress-root': {
      backgroundColor: fade(
        theme.palette[props.style]
          ? theme.palette[props.style].main
          : theme.palette.action.active,
        0.24
      )
    }
  })
}));

const LinearProgress = (props) => {
  const classes = useStyles({ style: props.color });

  return (
    <div className={classes.root}>
      <MuiLinearProgress
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

LinearProgress.propTypes = {
  classes: PropTypes.object,
  color: PropTypes.oneOf(['primary', 'secondary']),
  variant: PropTypes.oneOf(['buffer', 'determinate', 'indeterminate', 'query'])
};

LinearProgress.defaultProps = {
  color: 'primary',
  variant: 'indeterminate'
};

export default (props) => (
  <Theme>
    <LinearProgress {...props} />
  </Theme>
);
