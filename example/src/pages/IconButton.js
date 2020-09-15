import React from 'react';
import { IconButton, Text } from 'beyondstyle';
import DeleteIcon from '@material-ui/icons/Delete';
import { Grid, Container } from '@material-ui/core';

const Page = () => (
  <Container>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Text variant="h6" component="h2" gutterBottom>
          Icons
        </Text>
      </Grid>
      <Grid item xs={12}>
        <Text variant="h1" component="h1">
          Icon button
        </Text>
      </Grid>
      <Grid item xs={2}>
        <IconButton aria-label='primary'>
          <DeleteIcon />
        </IconButton>
      </Grid>
      <Grid item xs={2}>
        <IconButton aria-label='primary' color='primary'>
          <DeleteIcon />
        </IconButton>
      </Grid>
      <Grid item xs={2}>
        <IconButton aria-label='secondary' color='secondary'>
          <DeleteIcon />
        </IconButton>
      </Grid>
      <Grid item xs={2}>
        <IconButton aria-label='tertiary' color='tertiary'>
          <DeleteIcon />
        </IconButton>
      </Grid>
      <Grid item xs={2}>
        <IconButton aria-label='primary' disabled color='primary'>
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Text variant="h1" component="h1">
          Contained Icon button
        </Text>
      </Grid>
      <Grid item xs={2}>
        <IconButton aria-label='primary' disabled variant='contained'>
          <DeleteIcon />
        </IconButton>
      </Grid>
      <Grid item xs={2}>
        <IconButton aria-label='primary' variant='contained'>
          <DeleteIcon />
        </IconButton>
      </Grid>
      <Grid item xs={2}>
        <IconButton aria-label='primary' color='primary' variant='contained'>
          <DeleteIcon />
        </IconButton>
      </Grid>
      <Grid item xs={2}>
        <IconButton
          aria-label='primary'
          color='secondary'
          variant='contained'
        >
          <DeleteIcon />
        </IconButton>
      </Grid>
      <Grid item xs={2}>
        <IconButton aria-label='primary' color='tertiary' variant='contained'>
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  </Container>
)

export default Page;
