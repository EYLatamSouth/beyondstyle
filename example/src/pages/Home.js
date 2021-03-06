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
        <Link to='/slider'>Slider</Link>
      </Grid>
      <Grid item xs={12}>
        <Link to='/cards'>Cards</Link>
      </Grid>
      <Grid item xs={12}>
        <Link to='/select'>Select</Link>
      </Grid>
      <Grid item xs={12}>
        <Link to='/divider'>Divider</Link>
      </Grid>
      <Grid item xs={12}>
        <Link to='/controls'>Controls</Link>
      </Grid>
      <Grid item xs={12}>
        <Link to='/tab'>Tab</Link>
      </Grid>
      <Grid item xs={12}>
        <Link to='/badge'>Badge</Link>
      </Grid>
      <Grid item xs={12}>
        <Link to='/avatar'>Avatar</Link>
      </Grid>
      <Grid item xs={12}>
        <Link to='/tooltip'>Tooltip</Link>
      </Grid>
      <Grid item xs={12}>
        <Link to='/table'>Table</Link>
      </Grid>
      <Grid item xs={12}>
        <Link to='/pagination'>Pagination</Link>
      </Grid>
      <Grid item xs={12}>
        <Link to='/progress-indicator'>ProgressIndicators</Link>
      </Grid>
      <Grid item xs={12}>
        <Link to='/dialog'>Dialog</Link>
      </Grid>
      <Grid item xs={12}>
        <Link to='/breadcrumbs'>Breadcrumbs</Link>
      </Grid>
      <Grid item xs={12}>
        <Link to='/lists'>Lists</Link>
      </Grid>
    </Grid>
  </Container>
);

export default Page;
