import React from 'react';
import { IconButton, Fab, Button, Text } from 'beyondstyle';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Grid, Container } from '@material-ui/core';

const Page = () => (
  <Container>
    <Grid container spacing={2}>
      <Grid xs={12}>
      <div style={containerStyles}>
        <div><p>Icons</p></div>
        <hr />
        <h1>Icon button</h1>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton aria-label='primary'>
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label='primary' color='primary'>
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label='secondary' color='secondary'>
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label='tertiary' color='tertiary'>
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label='primary' disabled color='primary'>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
      <div style={containerStyles}>
        <h1>contained icon button</h1>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton aria-label='primary' disabled variant='contained'>
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label='primary' variant='contained'>
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label='primary' color='primary' variant='contained'>
            <DeleteIcon />
          </IconButton>

          <IconButton
            aria-label='primary'
            color='secondary'
            variant='contained'
          >
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label='primary' color='tertiary' variant='contained'>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
      </Grid>
    </Grid>
  </Container>
)

export default Page;
