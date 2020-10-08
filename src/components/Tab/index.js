import React from 'react';
import PropTypes from 'prop-types';
import { Tab as TabMui } from '@material-ui/core';
import Theme from '../Theme';
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
  textColorInherit: {
    color: fade(theme.palette.common.white, 0.38),
    '&.Mui-selected': {
      color: theme.palette.common.white
    },
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.04)
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
      textColor={
        props.textColor === 'primary' || props.textColor === 'secondary'
          ? props.textColor
          : 'inherit'
      }
    />
  );
};

Tab.propTypes = {
  index: PropTypes.number.isRequired,
  textColor: PropTypes.oneOf(['primary', 'secondary', 'inherit'])
};

Tab.defaultProps = {
  textColor: 'primary'
};

export default (props) => (
  <Theme>
    <Tab {...props} />
  </Theme>
);
