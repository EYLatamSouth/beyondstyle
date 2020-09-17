import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { LinearProgress as MuiLinearProgress } from '@material-ui/core';
import Layout from '../Layout';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    color: theme.palette[props.style]
      ? theme.palette[props.style].main
      : theme.palette.text.primary
  })
}));

const LinearProgress = (props) => {
  const classes = useStyles();

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
  <Layout>
    <LinearProgress {...props} />
  </Layout>
);
