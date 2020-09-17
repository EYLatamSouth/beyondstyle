import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout';
import Text from '../Text';
import { makeStyles, fade } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  badge: (props) => ({
    backgroundColor: theme.palette[props.color]
      ? theme.palette[props.color].main:
      theme.palette.primary.main,
    color: theme.palette[props.color]
      ? theme.palette[props.color].contrastText:
      theme.palette.primary.contrastText,
    borderRadius: props.variant === 'normal'
      ? 4 : 14,
    boxShadow: theme.shadows[1],
    padding: '2px 8px 4px 8px',
  }),
  textRoot: {
    fontSize: theme.typography.pxToRem(12),
    lineHeight: theme.typography.pxToRem(20),
    letterSpacing: '0.004em',
  }
}));

const Badge = (props) => {
  const classes = useStyles({
    color: props.color,
    variant: props.variant
  });

  return (
    <span className={classes.badge}>
      <Text variant='caption' classes={{ root: classes.textRoot }}>
        {props.label}
      </Text>
    </span>
  )
};

Badge.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'success', 'error', 'warning']),
  variant: PropTypes.oneOf(['normal', 'pill'])
};

Badge.defaultProps ={
  color: 'primary',
  variant: 'normal'
};

export default (props) => (
  <Layout>
    <Badge {...props} />
  </Layout>
);
