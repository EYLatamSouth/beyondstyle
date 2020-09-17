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
            <Avatar src='/static/images/1.png' className='small' />
            <Avatar src='/static/images/1.png' className='medium' />
            <Avatar src='/static/images/1.png' className='large' />
            <Avatar src='/static/images/1.png' className='default' />
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
            <Avatar className='small'>AB</Avatar>
            <Avatar className='medium'>AB</Avatar>
            <Avatar className='large'>AB</Avatar>
            <Avatar className='default'>AB</Avatar>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
