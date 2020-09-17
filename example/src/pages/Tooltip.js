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
            <Tooltip title='Add' placement='bottom-end'>
              <Button>One line</Button>
            </Tooltip>
            <Tooltip title='Add' placement='bottom-end'>
              <Button>Two lines</Button>
            </Tooltip>
            <Tooltip title='Add' placement='bottom-end'>
              <Button>Three lines</Button>
            </Tooltip>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
