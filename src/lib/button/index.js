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
      minHeight: theme.spacing(7), // same as 56px
      paddingRight: theme.spacing(3.75), // 30px
      paddingLeft: theme.spacing(3.75), // 30px
      
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
      minHeight: theme.spacing(1), // same as 56px
      paddingRight: theme.spacing(2.25), // 18px
      paddingLeft: theme.spacing(2.25), // 18px
      paddingTop: theme.spacing(1.25), // 10x
      paddingBottom: theme.spacing(1.25), // 10x
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
