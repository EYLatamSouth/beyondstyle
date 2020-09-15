import React from 'react';
import { CheckBox, Text } from 'beyondstyle';
import { Grid, Container } from '@material-ui/core';
import {
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from '@material-ui/core';

const App = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Text variant='h4' component='h2' gutterBottom>
            CheckBox
          </Text>
        </Grid>
        <Grid item xs={12}>
          <div>
            <p>Standalone CheckBoxes</p>
            <hr />

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
            <p>Neutral Checkboxes</p>
            <hr />

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
            <p>Checkbox Group</p>
            <hr />

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
    </Container>
  );
};

export default App;
