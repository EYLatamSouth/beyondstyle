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
          </Grid>
          <Grid item xs={12}>
            <Text variant='h6' component='h2' gutterBottom>
              Normal
            </Text>
          </Grid>
          <Grid item xs={2}>
            <Badge label="primary" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Secondary" color="secondary" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Tertiary" color="tertiary" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Success" color="success" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Error" color="error" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Warning" color="warning" />
          </Grid>

          <Grid item xs={12}>
              <Text variant='h6' component='h2' gutterBottom>
                Pill
              </Text>
            </Grid>
            <Grid item xs={2}>
              <Badge label="primary" variant="pill" />
            </Grid>
            <Grid item xs={2}>
              <Badge label="Secondary" variant="pill" color="secondary" />
            </Grid>
            <Grid item xs={2}>
              <Badge label="Tertiary" variant="pill" color="tertiary" />
            </Grid>
            <Grid item xs={2}>
              <Badge label="Success" variant="pill" color="success" />
            </Grid>
            <Grid item xs={2}>
              <Badge label="Error" variant="pill" color="error" />
            </Grid>
            <Grid item xs={2}>
              <Badge label="Warning" variant="pill" color="warning" />
            </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
