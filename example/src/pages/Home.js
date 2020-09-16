import React from 'react';
import { Text } from 'beyondstyle';
import { Grid, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Page = () => (
  <Container>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Text variant='h6' component='h2' gutterBottom>
          Components
        </Text>
      </Grid>
      <Grid item xs={12}>
        <Link to='/button'>Button</Link>
      </Grid>
      <Grid item xs={12}>
        <Link to='/icon-button'>IconButton</Link>
      </Grid>
      <Grid item xs={12}>
        <Link to='/fab'>Fab</Link>
      </Grid>
      <Grid item xs={12}>
        <Link to='/text'>Text</Link>
      </Grid>
      <Grid item xs={12}>
        <Link to='/text-field'>TextField</Link>
      </Grid>
      <Grid item xs={12}>
        <Link to='/check-box'>CheckBoxes</Link>
      </Grid>
      <Grid item xs={12}>
        <Link to='/radio-button'>Radio Button</Link>
      </Grid>
      <Grid item xs={12}>
        <Link to='/cards'>Cards</Link>
      </Grid>
    </Grid>
  </Container>
);

export default Page;
