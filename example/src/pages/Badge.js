import React from 'react';
import { Text, Badge } from 'beyondstyle';
import { Grid, Container } from '@material-ui/core';

const App = () => {
  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Text variant='h4' component='h2' gutterBottom>
              Badge
            </Text>
            <Grid item xs={6} style={{ marginTop: '5%' }}>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
