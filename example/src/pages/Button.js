import React from 'react';
import { Button, Text } from 'beyondstyle';
import { Grid, Container } from '@material-ui/core';

const App = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Text variant="h6" component="h2" gutterBottom>
            Button
          </Text>
        </Grid>
        <Grid item xs={12}>
          <Text variant="h1" component="h1">
            Primary (contained | outlined | text)
          </Text>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="primary">Button</Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="primary" disabled>Button</Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="primary" size="small">Button</Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          <Button variant="outlined" color="primary">Button</Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="outlined" color="primary" disabled>Button</Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="outlined" color="primary" size="small">Button</Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          <Button color="primary">Button</Button>
        </Grid>
        <Grid item xs={2}>
          <Button color="primary" disabled>Button</Button>
        </Grid>
        <Grid item xs={2}>
          <Button color="primary" size="small">Button</Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Text variant="h1" component="h1">
            Secondary (contained | outlined | text)
          </Text>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="secondary">Button</Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="secondary" disabled>Button</Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="secondary" size="small">Button</Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          <Button variant="outlined" color="secondary">Button</Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="outlined" color="secondary" disabled>Button</Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="outlined" color="secondary" size="small">Button</Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          <Button color="secondary">Button</Button>
        </Grid>
        <Grid item xs={2}>
          <Button color="secondary" disabled>Button</Button>
        </Grid>
        <Grid item xs={2}>
          <Button color="secondary" size="small">Button</Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Text variant="h1" component="h1">
            Tertiary (contained | outlined | text)
          </Text>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="tertiary">Button</Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="tertiary" disabled>Button</Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="tertiary" size="small">Button</Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          <Button variant="outlined" color="tertiary">Button</Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="outlined" color="tertiary" disabled>Button</Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="outlined" color="tertiary" size="small">Button</Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          <Button color="tertiary">Button</Button>
        </Grid>
        <Grid item xs={2}>
          <Button color="tertiary" disabled>Button</Button>
        </Grid>
        <Grid item xs={2}>
          <Button color="tertiary" size="small">Button</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
