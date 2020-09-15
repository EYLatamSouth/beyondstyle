import React from 'react';
import PropTypes from 'prop-types';
import { Button as MuiButton } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import Layout from '../Layout';

const useStyles = makeStyles((theme) => ({
  root: props => (
    {
      lineHeight: theme.typography.pxToRem(16),
      letterSpacing: '0.1em',
      fontSize: theme.typography.pxToRem(14),
      minHeight: theme.spacing(7),
      padding: `0 ${theme.spacing(3.75)}`,
      color: theme.palette[props.style] ? theme.palette[props.style].main : theme.palette.text.primary,
      '&:hover': {
        backgroundColor: fade(theme.palette[props.style] ? theme.palette[props.style].dark : theme.palette.grey[300], 0.04),
      },
    }

  ),
  label: {
    '& svg[class^="MuiSvgIcon-root-"]': {
      marginRight: 10
    },
  },
  contained: props => (
    {
      color: theme.palette[props.style] ? `${theme.palette[props.style].contrastText}` : theme.palette.contrastText,
      backgroundColor: theme.palette[props.style] ? theme.palette[props.style].main : theme.palette.grey[300],
      '&:hover': {
        backgroundColor: theme.palette[props.style] ? theme.palette[props.style].dark : theme.palette.grey[300],
        boxShadow: theme.shadows[4]
      },
    }

  ),
  outlined: props => (
    {
      color: theme.palette[props.style] ? `${theme.palette[props.style].main}`: theme.palette.grey[300],
      backgroundColor: `transparent !important`,
      borderColor: fade(theme.palette[props.style] ? `${theme.palette[props.style].main}` : theme.palette.grey[300], 0.5),
      '&:hover': {
        borderColor: theme.palette[props.style] ? `${theme.palette[props.style].main}` : theme.palette.grey[300],
        backgroundColor: theme.palette[props.style] ? `${fade(theme.palette[props.style].main, .12)} !important` : theme.palette.grey[300],
      },
      '&.MuiButton-outlinedSecondary.Mui-disabled': {
        borderColor: theme.palette.action.disabledBackground,
      }
    }
  ),
  sizeSmall: props => (
    {
      minHeight: theme.spacing(4.5),
      padding: `${theme.spacing(0.851)} ${theme.spacing(2.25)}`,
    }

  )

}));

const Button = (props) => {
  const classes = useStyles({style: props.color});
  return (
    <MuiButton
      {...props}
      classes={{...classes}}
      color={props.color == 'primary' || props.color == 'secondary' ? props.color : 'default'}
    >
      {props.children}
    </MuiButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
}

Button.defaultProps = {
  color: 'primary',
  variant: 'text'
};

export default (props) => (
  <Layout>
    <Button {...props} />
  </Layout>
);
