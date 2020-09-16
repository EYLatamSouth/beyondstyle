import React from 'react';
import { Avatar, Text } from 'beyondstyle';
import { Grid, Container } from '@material-ui/core';

const App = () => {
  return (
    <Container>
      <Grid container>
        <Text variant='h4' component='h2' gutterBottom>
          Avatar
        </Text>
        <Grid item xs={12}>
          <hr />
          <Text variant='h6' component='h2' gutterBottom>
            Image avatars
          </Text>
          <Grid
            item
            style={{
              display: 'flex',
              flexDirection: 'row'
            }}
            xs={6}
          >
            <Avatar src='' />
            <Avatar className='medium' src='' />
            <Avatar className='default' src='' />
            <Avatar className='small' src='' />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Text variant='h6' component='h2' gutterBottom>
            Letter avatars
          </Text>
          <Grid
            item
            style={{
              display: 'flex',
              flexDirection: 'row'
            }}
            xs={6}
          >
            <Avatar>H</Avatar>
            <Avatar>A</Avatar>
            <Avatar>A</Avatar>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
