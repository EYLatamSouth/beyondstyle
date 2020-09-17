import React from 'react';
import { Avatar, Text } from 'beyondstyle';
import { Grid, Container } from '@material-ui/core';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';

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
            <Avatar
              alt='avatar image'
              src='/static/images/1.png'
              className='small'
            />
            <Avatar
              alt='avatar image'
              src='/static/images/1.png'
              className='medium'
            />
            <Avatar
              alt='avatar image'
              src='/static/images/1.png'
              className='large'
            />
            <Avatar
              alt='avatar image'
              src='/static/images/1.png'
              className='default'
            />
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
            <Avatar alt='avatar letter' className='small'>
              AB
            </Avatar>
            <Avatar alt='avatar letter' className='medium'>
              AB
            </Avatar>
            <Avatar alt='avatar letter' className='large'>
              AB
            </Avatar>
            <Avatar alt='avatar letter' className='default'>
              AB
            </Avatar>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Text variant='h6' component='h2' gutterBottom>
            Icon avatars
          </Text>
          <Grid
            item
            style={{
              display: 'flex',
              flexDirection: 'row'
            }}
            xs={6}
          >
            <Avatar
              alt='icon avatar'
              className='small'
              icon={<PersonRoundedIcon />}
            ></Avatar>
            <Avatar
              alt='icon avatar'
              className='medium'
              icon={<PersonRoundedIcon />}
            ></Avatar>
            <Avatar
              alt='icon avatar'
              className='large'
              icon={<PersonRoundedIcon />}
            ></Avatar>
            <Avatar
              alt='icon avatar'
              className='default'
              icon={<PersonRoundedIcon />}
            ></Avatar>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
