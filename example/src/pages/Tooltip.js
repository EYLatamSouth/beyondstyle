import React from 'react';
import { Text, Tooltip, Divider } from 'beyondstyle';
import { Grid, Container, Button } from '@material-ui/core';

const App = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={6}>
          <Text variant='h4' component='h2' gutterBottom>
            Tootips
          </Text>
          <Divider />
          <div style={{ display: 'flex' }}>
            <Tooltip id='one-line' title='One line' placement='bottom-end'>
              <Button>One line</Button>
            </Tooltip>
            <Tooltip title='One line Two Lines' placement='bottom-end'>
              <Button>Two lines</Button>
            </Tooltip>
            <Tooltip
              title='One line Two Lines Three Lines'
              placement='bottom-end'
            >
              <Button>Three lines</Button>
            </Tooltip>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
