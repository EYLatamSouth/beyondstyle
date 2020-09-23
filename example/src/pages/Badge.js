import React from 'react';
import { Text, Badge } from 'beyondstyle';
import { Grid, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Text variant='h4' component='h2' gutterBottom>
              Badge
            </Text>
          </Grid>
          <Grid item xs={12}>
            <Text variant='h6' component='h2' gutterBottom>
              Normal
            </Text>
          </Grid>
          <Grid item xs={2}>
            <Badge label="primary" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Secondary" color="secondary" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Tertiary" color="tertiary" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Success" color="success" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Error" color="error" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Warning" color="warning" />
          </Grid>

          <Grid item xs={12}>
            <Text variant='h6' component='h2' gutterBottom>
              Pill
            </Text>
          </Grid>
          <Grid item xs={2}>
            <Badge label="primary" variant="pill" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Secondary" variant="pill" color="secondary" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Tertiary" variant="pill" color="tertiary" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Success" variant="pill" color="success" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Error" variant="pill" color="error" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Warning" variant="pill" color="warning" />
          </Grid>

          <Grid item xs={12}>
            <Text variant='h6' component='h2' gutterBottom>
              Link
            </Text>
          </Grid>
          <Grid item xs={2}>
            <Badge label="primary" buttonProps={{ component: Link, to: '/' }} />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Secondary" buttonProps={{ component: Link, to: '/' }} color="secondary" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Tertiary" buttonProps={{ component: Link, to: '/' }} color="tertiary" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Success" buttonProps={{ component: Link, to: '/' }} color="success" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Error" buttonProps={{ component: Link, to: '/' }} color="error" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Warning" buttonProps={{ component: Link, to: '/' }} color="warning" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="primary" variant="pill" buttonProps={{ component: Link, to: '/' }} />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Secondary" variant="pill" buttonProps={{ component: Link, to: '/' }} color="secondary" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Tertiary" variant="pill" buttonProps={{ component: Link, to: '/' }} color="tertiary" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Success" variant="pill" buttonProps={{ component: Link, to: '/' }} color="success" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Error" variant="pill" buttonProps={{ component: Link, to: '/' }} color="error" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Warning" variant="pill" buttonProps={{ component: Link, to: '/' }} color="warning" />
          </Grid>

          <Grid item xs={12}>
            <Text variant='h6' component='h2' gutterBottom>
              Button
            </Text>
          </Grid>
          <Grid item xs={2}>
            <Badge label="primary" buttonProps={{ type: 'button' }} />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Secondary" buttonProps={{ type: 'button' }} color="secondary" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Tertiary" buttonProps={{ type: 'button' }} color="tertiary" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Success" buttonProps={{ type: 'button' }} color="success" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Error" buttonProps={{ type: 'button' }} color="error" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Warning" buttonProps={{ type: 'button' }} color="warning" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="primary" variant="pill" buttonProps={{ type: 'button' }} />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Secondary" variant="pill" buttonProps={{ type: 'button' }} color="secondary" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Tertiary" variant="pill" buttonProps={{ type: 'button' }} color="tertiary" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Success" variant="pill" buttonProps={{ type: 'button' }} color="success" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Error" variant="pill" buttonProps={{ type: 'button' }} color="error" />
          </Grid>
          <Grid item xs={2}>
            <Badge label="Warning" variant="pill" buttonProps={{ type: 'button' }} color="warning" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
