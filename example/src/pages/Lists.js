import React from 'react';
import { Text, Lists } from 'beyondstyle';
import { Grid, Container } from '@material-ui/core';

const App = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Text variant='h4' component='h2' gutterBottom>
            Lists
          </Text>
          <hr />
        </Grid>
        <Grid item xs={12}>
          <Lists />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
