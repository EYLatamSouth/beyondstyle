import React from 'react';
import PropTypes from 'prop-types';
import { Avatar as MuiAvatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../Layout';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.grey.A100
    }
  }),
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    fontSize: theme.typography.pxToRem(24),

    '& .MuiSvgIcon-root': {
      fontSize: theme.typography.pxToRem(56)
    }
  },
  medium: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    fontSize: theme.typography.pxToRem(18),
    '& .MuiSvgIcon-root': {
      fontSize: theme.typography.pxToRem(44)
    }
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    fontSize: theme.typography.pxToRem(14),
    '& .MuiSvgIcon-root': {
      fontSize: theme.typography.pxToRem(32)
    }
  }
}));

const Avatar = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MuiAvatar
        {...props}
        className={`${
          props.className === 'large'
            ? classes.large
            : '' || props.className === 'large'
            ? classes.large
            : '' || props.className === 'medium'
            ? classes.medium
            : ''
            ? props.className
            : 'default'
        }
        `}
      >
        {props.children}
      </MuiAvatar>
    </div>
  );
};

Avatar.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.node,
  src: PropTypes.string,
  className: PropTypes.string
};

export default (props) => (
  <Layout>
    <Avatar {...props} />
  </Layout>
);
