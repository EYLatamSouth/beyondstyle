import React from 'react';
import { IconButton, Fab, Button, Text } from 'beyondstyle';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Grid, Container } from '@material-ui/core';

const Page = () => (
  <Container>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Text variant="h6" component="h2" gutterBottom>
          Floating action buttons
        </Text>
      </Grid>
      <Grid item xs={12}>
        <Fab aria-label='primary'>
          <VisibilityIcon />
        </Fab>

        <Fab aria-label='primary' color='primary'>
          <VisibilityIcon />
        </Fab>

        <Fab aria-label='secondary' color='secondary'>
          <VisibilityIcon />
        </Fab>

        <Fab aria-label='tertiary' color='tertiary'>
          <VisibilityIcon />
        </Fab>

        <Fab aria-label='primary' disabled color='primary'>
          <VisibilityIcon />
        </Fab>
      </Grid>
    </Grid>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Text variant="h6" component="h2" gutterBottom>
          Floating button small
        </Text>
      </Grid>
      <Grid item xs={12}>
        <Fab aria-label='primary' size='small'>
          <VisibilityIcon />
        </Fab>

        <Fab aria-label='primary' size='small' color='primary'>
          <VisibilityIcon />
        </Fab>

        <Fab aria-label='secondary' size='small' color='secondary'>
          <VisibilityIcon />
        </Fab>

        <Fab aria-label='tertiary' size='small' color='tertiary'>
          <VisibilityIcon />
        </Fab>

        <Fab aria-label='primary' size='medium' disabled color='primary'>
          <VisibilityIcon />
        </Fab>
      </Grid>
    </Grid>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Text variant="h6" component="h2" gutterBottom>
          Floating button with text
        </Text>
      </Grid>
      <Grid item xs={12}>
        <Fab aria-label='primary' variant='extended'>
          <VisibilityIcon />
          Button
        </Fab>

        <Fab aria-label='primary' variant='extended' color='primary'>
          <VisibilityIcon />
          Extended
        </Fab>

        <Fab aria-label='secondary' variant='extended' color='secondary'>
          <VisibilityIcon />
          Extended
        </Fab>

        <Fab aria-label='tertiary' variant='extended' color='tertiary'>
          <VisibilityIcon />
          Extended
        </Fab>

        <Fab aria-label='primary' variant='extended' disabled color='primary'>
          <VisibilityIcon />
          Extended
        </Fab>
      </Grid>
    </Grid>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Text variant="h6" component="h2" gutterBottom>
          Floating button with text small
        </Text>
      </Grid>
      <Grid item xs={12}>
        <Fab aria-label='primary' variant='extended' size='small'>
          Button
        </Fab>

        <Fab
          aria-label='primary'
          variant='extended'
          size='small'
          color='primary'
        >
          Button
        </Fab>

        <Fab
          aria-label='secondary'
          variant='extended'
          size='small'
          color='secondary'
        >
          Button
        </Fab>

        <Fab
          aria-label='tertiary'
          variant='extended'
          size='small'
          color='tertiary'
        >
          Button
        </Fab>

        <Fab
          aria-label='primary'
          variant='extended'
          size='medium'
          disabled
          color='primary'
        >
          Button
        </Fab>
      </Grid>
    </Grid>
  </Container>
)

export default Page;
