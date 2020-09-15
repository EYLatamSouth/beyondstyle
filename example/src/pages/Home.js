import React from 'react';
import { Text } from 'beyondstyle';
import { Grid, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Page = () => (
  <Container>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Text variant="h6" component="h2" gutterBottom>
          Components
        </Text>
      </Grid>
      <Grid item xs={12}>
        <Link to="/button">Button</Link>
        <Link to="/icon-button">IconButton</Link>
        <Link to="/fab">Fab</Link>
        <Link to="/text">Text</Link>
        <Link to="/text-field">TextField</Link>
      </Grid>
    </Grid>
  </Container>
);

export default Page;
