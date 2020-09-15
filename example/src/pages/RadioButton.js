import React from 'react';
import { RadioButton, Text } from 'beyondstyle';
import { Grid, Container } from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const App = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Text variant='h4' component='h2' gutterBottom>
            Radio Button
            <hr />
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
    </Container>
  );
};

export default App;
