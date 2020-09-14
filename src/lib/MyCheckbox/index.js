import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import { Checkbox as MuiCheckbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Layout from '../Layout';

const useStyles = makeStyles((theme) => ({}));

const MyCheckbox = (props) => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const classes = useStyles({ style: props.color });
  return (
    <FormGroup row>
      <FormControlLabel
        labelPlacement='top'
        control={
          <Checkbox
            {...props}
            checked={state.checkedA}
            onChange={handleChange}
            name='checkedA'
            classes={{ ...classes }}
            color={
              props.color == 'primary' || props.color === 'secondary'
                ? props.color
                : 'default'
            }
          ></Checkbox>
        }
        label={props.label}
      />
    </FormGroup>
  );
};

// Checkbox.propTypes = {};

// Checkbox.defaultProps = {};

export default (props) => (
  <Layout>
    <MyCheckbox {...props} />
  </Layout>
);
