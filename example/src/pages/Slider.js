import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Text, Slider } from 'beyondstyle';

const Page = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Text variant='h4' component='h2' gutterBottom>
            Slider
          </Text>
        </Grid>
        <Grid item xs={4}>
          <Slider value={20} />
        </Grid>
        <Grid item xs={4}>
          <Slider value={2000} max={3000} color="secondary" />
        </Grid>
      </Grid>
    </Container>
  )
};

export default Page;
