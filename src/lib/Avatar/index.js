import React from 'react';
import { Avatar as MuiAvatar } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
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
    fontSize: theme.typography.pxToRem(24)
  },
  medium: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    fontSize: theme.typography.pxToRem(18)
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    fontSize: theme.typography.pxToRem(14)
  }
}));

const Avatar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiAvatar
        alt={props.alt}
        src={props.src}
        className={`
        ${props.className === 'large' ? classes.large : ''}
        ${props.className === 'small' ? classes.small : ''}
        ${props.className === 'medium' ? classes.medium : ''}
        `}
      >
        {props.children}
      </MuiAvatar>
    </div>
  );
};

export default (props) => (
  <Layout>
    <Avatar {...props} />
  </Layout>
);
