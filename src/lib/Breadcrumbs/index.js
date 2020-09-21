import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumbs as BreadcrumbsMui } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';

import Layout from '../Layout';

const useStyles = makeStyles((theme) => ({
  li: {
    lineHeight: theme.typography.pxToRem(20),
    letterSpacing: '0.004em',
    fontSize: theme.typography.pxToRem(12),
    color: fade(theme.palette.primary.main, 0.5),
    '& p': {
      color: fade(theme.palette.primary.main, 0.3),
      lineHeight: theme.typography.pxToRem(20),
      letterSpacing: '0.004em',
      fontSize: theme.typography.pxToRem(12)
    }
  },
  separator: {
    color: fade(theme.palette.primary.main, 0.5),
    fontSize: theme.typography.pxToRem(12),
  }
}));

const Breadcrumbs = (props) => {
  const classes = useStyles();

  return (
    <BreadcrumbsMui {...props} classes={{ ...classes }}>
      {props.children}
    </BreadcrumbsMui>
  );
};

Breadcrumbs.propTypes = {
  children: PropTypes.node.isRequired
};

export default (props) => (
  <Layout>
    <Breadcrumbs {...props} />
  </Layout>
);
