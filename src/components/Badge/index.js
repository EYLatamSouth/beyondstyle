import React from 'react';
import PropTypes from 'prop-types';
import Theme from '../Theme';
import Text from '../Text';
import { makeStyles, fade } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';

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
  },
  contained: (props) => ({
    color: theme.palette[props.color]
      ? theme.palette[props.color].contrastText
      : theme.palette.contrastText,
    backgroundColor: theme.palette[props.color]
      ? theme.palette[props.color].main
      : theme.palette.grey[300],
    '&:hover': {
      backgroundColor: theme.palette[props.color]
        ? theme.palette[props.color].dark
        : theme.palette.grey[300],
      boxShadow: theme.shadows[2]
    },
    boxShadow: theme.shadows[1],
    borderRadius: props.variant === 'normal'
      ? 4 : 14,
  }),
  label: {
    fontSize: theme.typography.pxToRem(12),
    lineHeight: theme.typography.pxToRem(20),
    letterSpacing: '0.004em',
    textTransform: 'none'
  },
  sizeSmall: {
    padding: `2px 8px`
  }
}));

const Badge = (props) => {
  const classes = useStyles({
    color: props.color,
    variant: props.variant
  });

  if (props.buttonProps) {
    return (
      <Button
        variant='contained'
        size='small'
        className='badge'
        classes={{
          contained: classes.contained,
          label: classes.label,
          sizeSmall: classes.sizeSmall
        }}
        {...props.buttonProps}
      >
        {props.label}
      </Button>
    )
  }

  return (
    <span className={clsx(classes.badge, 'badge')}>
      <Text variant='caption' classes={{ root: classes.textRoot }}>
        {props.label}
      </Text>
    </span>
  )
};

Badge.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'success', 'error', 'warning']),
  variant: PropTypes.oneOf(['normal', 'pill']),
  buttonProps: PropTypes.object
};

Badge.defaultProps ={
  color: 'primary',
  variant: 'normal'
};

export default (props) => (
  <Theme>
    <Badge {...props} />
  </Theme>
);
