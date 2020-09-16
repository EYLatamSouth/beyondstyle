import React from 'react';
import { SwitchControl, Text } from 'beyondstyle';
import { Grid, Container } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const App = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedC: false,
    checkedScndA: true,
    checkedScndD: false,

    //Group control
    item1: true,
    item2: false,
    item3: false,
    item1Scnd: true,
    item2Scnd: false,
    item3Scnd: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleChangeGroup = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Text variant='h4' component='h2' gutterBottom>
            Switches
            <hr />
          </Text>
        </Grid>
        <Grid item xs={6}>
          <Text variant='h6' component='h2' gutterBottom>
            Primary On
          </Text>
          <FormGroup row>
            <FormControlLabel
              control={
                <SwitchControl
                  control={<SwitchControl />}
                  checked={state.checkedA}
                  onChange={handleChange}
                  name='checkedA'
                  color='primary'
                />
              }
              label='default'
            />
            <FormControlLabel
              disabled
              control={<SwitchControl color='primary' checked />}
              label='disabled'
            />
          </FormGroup>
        </Grid>
        <Grid item xs={6}>
          <Text variant='h6' component='h2' gutterBottom>
            Primary Of
          </Text>
          <FormGroup row>
            <FormControlLabel
              control={
                <SwitchControl
                  control={<SwitchControl />}
                  checked={state.checkedC}
                  onChange={handleChange}
                  name='checkedC'
                  color='primary'
                />
              }
              label='default'
            />
            <FormControlLabel
              disabled
              control={<SwitchControl color='primary' checked />}
              label='disabled'
            />
          </FormGroup>
        </Grid>

        <Grid item xs={6}>
          <Text variant='h6' component='h2' gutterBottom>
            Secondary On
          </Text>
          <FormGroup row>
            <FormControlLabel
              control={
                <SwitchControl
                  control={<SwitchControl />}
                  checked={state.checkedScndA}
                  onChange={handleChange}
                  name='checkedScndA'
                  color='secondary'
                />
              }
              label='default'
            />
            <FormControlLabel
              disabled
              control={<SwitchControl color='secondary' checked />}
              label='disabled'
            />
          </FormGroup>
        </Grid>
        <Grid item xs={6}>
          <Text variant='h6' component='h2' gutterBottom>
            Secondary Of
          </Text>
          <FormGroup row>
            <FormControlLabel
              control={
                <SwitchControl
                  control={<SwitchControl />}
                  checked={state.checkedScndD}
                  onChange={handleChange}
                  name='checkedScndD'
                  color='secondary'
                />
              }
              label='default'
            />
            <FormControlLabel
              disabled
              control={<SwitchControl color='secondary' checked />}
              label='disabled'
            />
          </FormGroup>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Text variant='h6' component='h2' gutterBottom>
            Primary Group
          </Text>
          <FormGroup>
            <FormControlLabel
              control={
                <SwitchControl
                  checked={state.item1}
                  onChange={handleChangeGroup}
                  name='item1'
                  color='primary'
                />
              }
              label='item 1'
            />
            <FormControlLabel
              control={
                <SwitchControl
                  checked={state.item2}
                  onChange={handleChangeGroup}
                  name='item2'
                  color='primary'
                />
              }
              label='item 2'
            />
            <FormControlLabel
              control={
                <SwitchControl
                  checked={state.item3}
                  onChange={handleChangeGroup}
                  name='item3'
                  color='primary'
                />
              }
              label='item 3'
            />
          </FormGroup>
        </Grid>
        <Grid item xs={6}>
          <Text variant='h6' component='h2' gutterBottom>
            Secondary Group
          </Text>
          <FormGroup>
            <FormControlLabel
              control={
                <SwitchControl
                  checked={state.item1Scnd}
                  onChange={handleChangeGroup}
                  name='item1Scnd'
                  color='secondary'
                />
              }
              label='item 1'
            />
            <FormControlLabel
              control={
                <SwitchControl
                  checked={state.item2Scnd}
                  onChange={handleChangeGroup}
                  name='item2Scnd'
                  color='secondary'
                />
              }
              label='item 2'
            />
            <FormControlLabel
              control={
                <SwitchControl
                  checked={state.item3Scnd}
                  onChange={handleChangeGroup}
                  name='item3Scnd'
                  color='secondary'
                />
              }
              label='item 3'
            />
          </FormGroup>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
