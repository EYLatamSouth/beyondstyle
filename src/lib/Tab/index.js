import React from 'react';
import PropTypes from 'prop-types';
import { Tab as TabMui } from '@material-ui/core';
import Layout from '../Layout';
import { makeStyles, fade } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'row'
  },
  labelIcon: {
    minHeight: 48,
    padding: '6px 12px',
    '& $wrapper > svg': {
      marginRight: 8
    },
    '& $wrapper > *:first-child': {
      marginBottom: 0
    }
  },
  textColorPrimary: {
    color: fade(theme.palette.primary.main, 0.4),
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, 0.04)
    }
  },
  textColorSecondary: {
    color: fade(theme.palette.primary.main, 0.4),
    '&:hover': {
      backgroundColor: fade(theme.palette.secondary.main, 0.04)
    }
  }
}));

const Tab = (props) => {
  const classes = useStyles();

  return (
    <TabMui
      {...props}
      classes={{ ...classes }}
      id={`simple-tab-${props.index}`}
      aria-controls={`simple-tabpanel-${props.index}`}
    >
      {props.children}
    </TabMui>
  );
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  textColor: PropTypes.oneOf(['primary', 'secondary'])
};

Tab.defaultProps = {
  textColor: 'primary'
};

export default (props) => (
  <Layout>
    <Tab {...props} />
  </Layout>
);
