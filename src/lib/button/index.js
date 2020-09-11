import React from 'react';
import { Button as MuiButton } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import Layout from '../layout';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: props => (
    {
     color: theme.palette[props.style] ? `${theme.palette[props.style].contrastText} !important` : theme.palette.contrastText,
      backgroundColor: theme.palette[props.style] ? theme.palette[props.style].main : theme.palette.grey[300],
      '&:hover': {
        backgroundColor: theme.palette[props.style] ? theme.palette[props.style].dark : theme.palette.grey[300],
      },
      lineHeight: '16px',
      letterSpacing: '0.1em',
      fontSize: '14px',
      minHeight: theme.spacing(7), 
      paddingRight: theme.spacing(3.75),
      paddingLeft: theme.spacing(3.75),
      
    }
    
  ),
  outlined: props => (
    {
      color: theme.palette[props.style] ? `${theme.palette[props.style].main} !important`: theme.palette.grey[300],
      backgroundColor: `transparent !important`,
      borderColor: theme.palette[props.style] ? `${theme.palette[props.style].main} !important` : theme.palette.grey[300],
      '&:hover': {
        backgroundColor: theme.palette[props.style] ? `${fade(theme.palette[props.style].main, .12)} !important` : theme.palette.grey[300],
      }
    }   
  ),
  sizeSmall: props => (
    {
      minHeight: theme.spacing(4.5), 
      paddingRight: theme.spacing(2.25), 
      paddingLeft: theme.spacing(2.25),
      paddingTop: theme.spacing(0.851),
      paddingBottom: theme.spacing(0.851),
    }
    
  )
  
}));

const Button = (props) => {
  const classes = useStyles({style: props.color});
    return (
        <MuiButton {...props}
        classes={{
          root: classes.root,
          outlined: classes.outlined,
          sizeMedium: classes.sizeMedium,
          sizeLarge: classes.sizeLarge,
          sizeSmall: classes.sizeSmall
        }} color={props.color == 'primary' || props.color == 'secondary' ? props.color : 'default'}>
          {props.children}
        </MuiButton>
    );
};

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  color: 'default',
  disabled: false,
};

export default (props) => (
  <Layout>
    <Button {...props}/>
  </Layout>
);
