import React from 'react';
import { CircularProgress, LinearProgress, Text } from 'beyondstyle';
import { Grid, Container } from '@material-ui/core';

const App = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Text variant='h4' component='h2' gutterBottom>
            Progress Indicators
            <hr />
          </Text>
        </Grid>
        <Grid item xs={6}>
          <Text variant='h6' component='h2' gutterBottom>
            Circular
          </Text>
          Primary
          <CircularProgress color='primary' />
          Secondary
          <CircularProgress color='secondary' />
        </Grid>

        <Grid item xs={6}>
          <Text variant='h6' component='h2' gutterBottom>
            Linear
          </Text>
          Primary
          <LinearProgress color='primary' />
          <div style={{ marginBottom: '8%' }}></div>
          Secondary
          <LinearProgress color='secondary' />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
