import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, fade } from '@material-ui/core/styles';
import { Slider as SliderMui, Grid } from '@material-ui/core';
import Layout from '../Layout';

const useStyles = makeStyles((theme) => ({
  valueBlock: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  },
  value: {
    width: 48,
    height: 32,
    minWidth: 48,
    minHeight: 32,
    backgroundColor: fade(theme.palette.common.black, 0.04),
    color: theme.palette.common.black,
    borderRadius: 4,
    paddingTop: 6,
    paddingBottom: 6,
    textAlign: 'center',
    fontSize: theme.typography.pxToRem(12),
    lineHeight: theme.typography.pxToRem(20),
    letterSpacing: '0.004em'
  },
  rail: {
    opacity: 0.3
  },
  thumbColorPrimary: {
    '&:hover': {
      boxShadow: `0px 0px 0px 18px ${fade(
        theme.palette.primary.main,
        0.04
      )} !important`
    }
  },
  thumbColorSecondary: {
    '&:hover': {
      boxShadow: `0px 0px 0px 18px ${fade(
        theme.palette.secondary.main,
        0.04
      )} !important`
    }
  },
  active: (props) => ({
    boxShadow: `0px 0px 0px 18px ${fade(
      theme.palette[props.color]
        ? theme.palette[props.color].main
        : theme.palette.primary.main,
      0.2
    )} !important`
  })
}));

const Slider = (props) => {
  const classes = useStyles({ color: props.color });

  return (
    <Grid container spacing={1}>
      <Grid item xs={10}>
        <SliderMui
          {...props}
          classes={{
            rail: classes.rail,
            thumbColorPrimary: classes.thumbColorPrimary,
            active: classes.active,
            thumbColorSecondary: classes.thumbColorSecondary
          }}
        />
      </Grid>
      <Grid item xs={2} className={classes.valueBlock}>
        <span className={classes.value}>{props.value}</span>
      </Grid>
    </Grid>
  );
};

Slider.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
  onChange: PropTypes.func,
  max: PropTypes.number,
  min: PropTypes.number
};
Slider.defaultProps = {
  color: 'primary',
  max: 100,
  min: 0,
  onChange: () => {}
};

export default (props) => (
  <Layout>
    <Slider {...props} />
  </Layout>
)
