import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Text, Slider } from 'beyondstyle';

const Page = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Text variant='h4' component='h2' gutterBottom>
            Slider Continuous (primary | secondary | disabled )
          </Text>
        </Grid>
        <Grid item xs={4}>
          <Slider value={20} />
        </Grid>
        <Grid item xs={4}>
          <Slider value={2000} max={3000} color="secondary" />
        </Grid>
        <Grid item xs={4}>
          <Slider disabled value={2000} max={3000} color="secondary" />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Text variant='h4' component='h2' gutterBottom>
            Slider Range (primary | secondary | disabled )
          </Text>
        </Grid>
        <Grid item xs={4}>
          <Slider value={[10, 20]} defaultValue={[5, 50]} />
        </Grid>
        <Grid item xs={4}>
          <Slider value={[100, 2000]} max={3000} color="secondary" />
        </Grid>
        <Grid item xs={4}>
          <Slider disabled value={[1500, 2000]} max={3000} color="secondary" />
        </Grid>
      </Grid>
    </Container>
  )
};

export default Page;
