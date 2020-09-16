import React from 'react';
import { Text, Divider } from 'beyondstyle';
import { Grid, Container } from '@material-ui/core';

const App = () => {
  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Text variant='h4' component='h2' gutterBottom>
              Dividers
            </Text>
            <Grid item xs={6} style={{ maxWidth: '162px' }}>
              <Text
                variant='h6'
                component='h2'
                gutterBottom
                style={{ padding: '10%', paddingLeft: '0' }}
              >
                Horizontal
              </Text>
              <Divider />
            </Grid>

            <Grid item xs={6} style={{ marginTop: '5%' }}>
              <Grid container alignItems='center'>
                <Text
                  variant='h6'
                  component='h2'
                  gutterBottom
                  style={{ padding: '10%', paddingLeft: '0' }}
                >
                  Vertical
                </Text>
                <Divider component='hr' orientation='vertical' flexItem />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
