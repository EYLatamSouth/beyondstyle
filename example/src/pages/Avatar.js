import React from 'react';
import { Avatar, Text } from 'beyondstyle';
import { Grid, Container } from '@material-ui/core';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';

const App = () => {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };
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
            <div style={containerStyles}>
              <Text component={'span'} variant={'body2'} gutterBottom>
                32px
              </Text>
              <Avatar
                alt='avatar image'
                src='/static/images/1.png'
                className='small'
              />
            </div>
            <div style={containerStyles}>
              <Text component={'span'} variant={'body2'} gutterBottom>
                48px
              </Text>
              <Avatar
                alt='avatar image'
                src='/static/images/1.png'
                className='medium'
              />
            </div>
            <div style={containerStyles}>
              <Text component={'span'} variant={'body2'} gutterBottom>
                56px
              </Text>
              <Avatar
                alt='avatar image'
                src='/static/images/1.png'
                className='large'
              />
            </div>
            <div style={containerStyles}>
              <Text component={'span'} variant={'body2'} gutterBottom>
                40px
              </Text>
              <Avatar
                alt='avatar image'
                src='/static/images/1.png'
                className='default'
              />
            </div>
          </Grid>
        </Grid>
        <Grid item xs={6}>
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
            <div style={containerStyles}>
              <Text component={'span'} variant={'body2'} gutterBottom>
                32px
              </Text>
              <Avatar alt='avatar letter' className='small'>
                AB
              </Avatar>
            </div>
            <div style={containerStyles}>
              <Text component={'span'} variant={'body2'} gutterBottom>
                48px
              </Text>
              <Avatar alt='avatar letter' className='medium'>
                AB
              </Avatar>
            </div>
            <div style={containerStyles}>
              <Text component={'span'} variant={'body2'} gutterBottom>
                56px
              </Text>
              <Avatar alt='avatar letter' className='large'>
                AB
              </Avatar>
            </div>
            <div style={containerStyles}>
              <Text component={'span'} variant={'body2'} gutterBottom>
                40px
              </Text>
              <Avatar alt='avatar letter' className='default'>
                AB
              </Avatar>
            </div>
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
            <div style={containerStyles}>
              <Text component={'span'} variant={'body2'} gutterBottom>
                32px
              </Text>
              <Avatar
                alt='icon avatar'
                className='small'
                icon={<PersonRoundedIcon />}
              />
            </div>
            <div style={containerStyles}>
              <Text component={'span'} variant={'body2'} gutterBottom>
                48px
              </Text>
              <Avatar
                alt='icon avatar'
                className='medium'
                icon={<PersonRoundedIcon />}
              />
            </div>
            <div style={containerStyles}>
              <Text component={'span'} variant={'body2'} gutterBottom>
                56px
              </Text>
              <Avatar
                alt='icon avatar'
                className='large'
                icon={<PersonRoundedIcon />}
              />
            </div>
            <div style={containerStyles}>
              <Text component={'span'} variant={'body2'} gutterBottom>
                40px
              </Text>
              <Avatar
                alt='icon avatar'
                className='default'
                icon={<PersonRoundedIcon />}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
