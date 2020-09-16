import React from 'react';
import { CheckBox, RadioButton, SwitchControl, Text } from 'beyondstyle';
import { Grid, Container } from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import {
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from '@material-ui/core';

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
      <Text variant='h3' component='h2' gutterBottom>
        Select Controls
        <hr />
      </Text>
      <Grid container spacing={2} style={{ marginTop: '40px' }}>
        <Grid item xs={12}>
          <Text variant='h5' component='h2' gutterBottom>
            Radio Button
          </Text>
        </Grid>
        <Grid item xs={2}>
          <FormControl component='fieldset'>
            <FormLabel component='legend'>Primary</FormLabel>
            <RadioGroup aria-label='radio buttons' name='radio2'>
              <FormControlLabel
                value='item1'
                control={<RadioButton color='primary' />}
                label='Item 1'
              />
              <FormControlLabel
                value='item2'
                control={<RadioButton color='primary' />}
                label='Item 2'
              />
              <FormControlLabel
                value='item3'
                control={<RadioButton color='primary' />}
                label='Item 3'
              />
              <FormControlLabel
                value='disabled'
                disabled
                control={<RadioButton color='primary' />}
                label='(Disabled option)'
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={2}>
          <FormControl component='fieldset'>
            <FormLabel component='legend'>Secondary</FormLabel>
            <RadioGroup aria-label='radio buttons' name='radio2'>
              <FormControlLabel
                value='item1'
                control={<RadioButton color='secondary' />}
                label='Item 1'
              />
              <FormControlLabel
                value='item2'
                control={<RadioButton color='secondary' />}
                label='Item 2'
              />
              <FormControlLabel
                value='item3'
                control={<RadioButton color='secondary' />}
                label='Item 3'
              />
              <FormControlLabel
                value='disabled'
                disabled
                control={<RadioButton color='secondary' />}
                label='(Disabled option)'
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={2}>
          <FormControl component='fieldset'>
            <FormLabel component='legend'>Tertiary</FormLabel>
            <RadioGroup aria-label='radio buttons' name='radio2'>
              <FormControlLabel
                value='item1'
                control={<RadioButton color='tertiary' />}
                label='Item 1'
              />
              <FormControlLabel
                value='item2'
                control={<RadioButton color='tertiary' />}
                label='Item 2'
              />
              <FormControlLabel
                value='item3'
                control={<RadioButton color='tertiary' />}
                label='Item 3'
              />
              <FormControlLabel
                value='disabled'
                disabled
                checked
                control={<RadioButton color='tertiary' />}
                label='(Disabled option)'
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={2} style={{ backgroundColor: '#2e2e38' }}>
          <FormControl component='fieldset'>
            <FormLabel component='legend' style={{ color: 'white' }}>
              Tertiary | primary-main bg
            </FormLabel>
            <RadioGroup aria-label='radio buttons' name='radio2'>
              <FormControlLabel
                style={{ color: '#fff' }}
                value='item1'
                control={<RadioButton color='tertiary' />}
                label='Item 1'
              />
              <FormControlLabel
                value='item2'
                style={{ color: '#fff' }}
                control={<RadioButton color='tertiary' />}
                label='Item 2'
              />
              <FormControlLabel
                value='item3'
                style={{ color: '#fff' }}
                control={<RadioButton color='tertiary' />}
                label='Item 3'
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: '40px' }}>
        <Grid item xs={12}>
          <Text variant='h4' component='h2' gutterBottom>
            CheckBox
          </Text>
        </Grid>
        <Grid item xs={12}>
          <div>
            <Text variant='h6' component='h2' gutterBottom>
              Standalone CheckBoxes
            </Text>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginLeft: '5%'
              }}
            >
              <FormGroup row>
                <FormControlLabel
                  labelPlacement='top'
                  control={<CheckBox name='primary' color='primary' />}
                  label='Primary'
                />
                <FormControlLabel
                  labelPlacement='top'
                  control={<CheckBox name='secondary' color='secondary' />}
                  label='Secondary'
                />
                <FormControlLabel
                  labelPlacement='top'
                  control={<CheckBox name='tertiary' color='tertiary' />}
                  label='Tertiary'
                />
                <FormControlLabel
                  labelPlacement='top'
                  control={
                    <CheckBox
                      name='disabledButton'
                      color='primary'
                      label='Disabled'
                      disabled
                    />
                  }
                  label='Disabled'
                />
              </FormGroup>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div>
            <Text variant='h6' component='h2' gutterBottom>
              Neutral Checkboxes
            </Text>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginLeft: '5%'
              }}
            >
              <FormGroup row>
                <FormControlLabel
                  labelPlacement='top'
                  control={
                    <CheckBox name='primary' color='primary' indeterminate />
                  }
                  label='Primary'
                />
                <FormControlLabel
                  labelPlacement='top'
                  control={
                    <CheckBox
                      name='secondary'
                      color='secondary'
                      indeterminate
                    />
                  }
                  label='Secondary'
                />
                <FormControlLabel
                  labelPlacement='top'
                  control={
                    <CheckBox name='tertiary' color='tertiary' indeterminate />
                  }
                  label='Tertiary'
                />
                <FormControlLabel
                  labelPlacement='top'
                  control={
                    <CheckBox
                      name='disabledButton'
                      color='primary'
                      indeterminate
                      disabled
                    />
                  }
                  label='Disabled'
                />
              </FormGroup>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div>
            <Text variant='h6' component='h2' gutterBottom>
              Checkbox Group
            </Text>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly'
              }}
            >
              <FormControl component='fieldset'>
                <FormLabel component='legend'>Primary</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={<CheckBox name='primaryA' color='primary' />}
                    label='item'
                  />
                  <FormControlLabel
                    control={<CheckBox name='primaryB' color='primary' />}
                    label='item'
                  />
                  <FormControlLabel
                    control={<CheckBox name='primaryC' color='primary' />}
                    label='item'
                  />
                </FormGroup>
              </FormControl>

              <FormControl component='fieldset'>
                <FormLabel component='legend'>Secondary</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={<CheckBox name='secondaryA' color='secondary' />}
                    label='item'
                  />
                  <FormControlLabel
                    control={<CheckBox name='secondaryB' color='secondary' />}
                    label='item'
                  />
                  <FormControlLabel
                    control={<CheckBox name='secondaryC' color='secondary' />}
                    label='item'
                  />
                </FormGroup>
              </FormControl>

              <FormControl component='fieldset'>
                <FormLabel component='legend'>Tertiary</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={<CheckBox name='tertiaryA' color='tertiary' />}
                    label='item'
                  />
                  <FormControlLabel
                    control={<CheckBox name='tertiaryB' color='tertiary' />}
                    label='item'
                  />
                  <FormControlLabel
                    control={<CheckBox name='tertiaryC' color='tertiary' />}
                    label='item'
                  />
                </FormGroup>
              </FormControl>

              <FormControl
                style={{
                  backgroundColor: '#2e2e38',
                  padding: '10px'
                }}
                component='fieldset'
              >
                <FormGroup>
                  <FormControlLabel
                    style={{ color: '#ffd400' }}
                    control={<CheckBox color='tertiary' />}
                    label='item'
                  />
                  <FormControlLabel
                    style={{ color: '#ffd400' }}
                    control={<CheckBox color='tertiary' />}
                    label='item'
                  />
                  <FormControlLabel
                    style={{ color: '#ffd400' }}
                    control={<CheckBox color='tertiary' />}
                    label='item'
                  />
                </FormGroup>
              </FormControl>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: '40px' }}>
        <Grid item xs={12}>
          <Text variant='h4' component='h2' gutterBottom>
            Switches
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
              control={<SwitchControl />}
              control={<SwitchControl />}
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
              control={<SwitchControl color='secondary' />}
              label='disabled'
            />
          </FormGroup>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: '40px' }}>
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
