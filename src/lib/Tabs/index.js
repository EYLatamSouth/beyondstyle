import React from 'react';
import PropTypes from 'prop-types';
import { Tabs as TabsMui } from '@material-ui/core';
import Layout from '../Layout';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  indicator: (props) => ({
    backgroundColor: theme.palette[props.color]
      ? theme.palette[props.color].main
      : theme.palette.common.white
  })
}));

const Tabs = (props) => {
  const classes = useStyles({ color: props.textColor });

  return (
    <TabsMui
      {...props}
      classes={{ ...classes }}
      scrollButtons={props.variant === 'scrollable' ? 'on' : 'auto'}
      indicatorColor={
        props.textColor === 'primary' || props.textColor === 'secondary'
          ? props.textColor
          : 'primary'
      }
      textColor={
        props.textColor === 'primary' || props.textColor === 'secondary'
          ? props.textColor
          : 'inherit'
      }
    >
      {props.children}
    </TabsMui>
  );
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  textColor: PropTypes.oneOf(['primary', 'secondary', 'negative']),
  variant: PropTypes.oneOf(['fullWidth', 'scrollable', 'standard']),
  orientation: PropTypes.string
};

Tabs.defaultProps = {
  textColor: 'primary',
  variant: 'standard',
  orientation: 'horizontal'
};

export default (props) => (
  <Layout>
    <Tabs {...props} />
  </Layout>
);
