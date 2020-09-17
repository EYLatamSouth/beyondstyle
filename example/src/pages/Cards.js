import React from 'react';
import { Card, Text, Button, CardContent } from 'beyondstyle';
import { Grid, Container, CardActions } from '@material-ui/core';

const App = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Text variant='h4' component='h2' gutterBottom>
            Cards
          </Text>
        </Grid>
        <Grid item xs={3}>
          1dp
          <Card elevation={1}>
            <CardContent>
              <Text variant="h6" component="h2">
                Headline 6
              </Text>
              <Text color="textSecondary">
                body 2
              </Text>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          2dp
          <Card elevation={2}>
            <CardContent>
              <Text variant="h6" component="h2">
                Headline 6
              </Text>
              <Text color="textSecondary">
                body 2
              </Text>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          3dp
          <Card elevation={3}>
            <CardContent>
              <Text variant="h6" component="h2">
                Headline 6
              </Text>
              <Text color="textSecondary">
                body 2
              </Text>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          4dp
          <Card elevation={4}>
            <CardContent>
              <Text variant="h6" component="h2">
                Headline 6
              </Text>
              <Text color="textSecondary">
                body 2
              </Text>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          5dp
          <Card elevation={5}>
            <CardContent>
              <Text variant="h6" component="h2">
                Headline 6
              </Text>
              <Text color="textSecondary">
                body 2
              </Text>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          6dp
          <Card elevation={6}>
            <CardContent>
              <Text variant="h6" component="h2">
                Headline 6
              </Text>
              <Text color="textSecondary">
                body 2
              </Text>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          7dp
          <Card elevation={7}>
            <CardContent>
              <Text variant="h6" component="h2">
                Headline 6
              </Text>
              <Text color="textSecondary">
                body 2
              </Text>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          8dp
          <Card elevation={8}>
            <CardContent>
              <Text variant="h6" component="h2">
                Headline 6
              </Text>
              <Text color="textSecondary">
                body 2
              </Text>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Text variant='h6' component='h2' gutterBottom>
            Cards - Buttons
          </Text>
        </Grid>
        <Grid item xs={3}>
          <Card elevation={1}>
            <CardContent>
              <Text variant="h6" component="h2">
                Headline 6
              </Text>
              <Text color="textSecondary">
                body 2
              </Text>
            </CardContent>
            <CardActions>
              <Button size="small">Action 1</Button>
              <Button size="small">Action 2</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Text variant='h6' component='h2' gutterBottom>
            Cards - Support text
          </Text>
        </Grid>
        <Grid item xs={3}>
          <Card elevation={1}>
            <CardContent>
              <Text variant="h6" component="h2">
                Headline 6
              </Text>
              <Text color="textSecondary">
                body 2
              </Text>
              <Text color="textSecondary">
                well meaning and kindly.
              </Text>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card elevation={1}>
            <CardContent>
              <Text variant="h6" component="h2">
                Headline 6
              </Text>
              <Text color="textSecondary">
                body 2
              </Text>
              <Text color="textSecondary">
                well meaning and kindly.
              </Text>
            </CardContent>
            <CardActions>
              <Button size="small">Action 1</Button>
              <Button size="small">Action 2</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Text variant='h6' component='h2' gutterBottom>
            Cards outline
          </Text>
        </Grid>
        <Grid item xs={3}>
          <Card elevation={1} variant="outlined">
            <CardContent>
              <Text variant="h6" component="h2">
                Headline 6
              </Text>
              <Text color="textSecondary">
                body 2
              </Text>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card elevation={1} variant="outlined">
            <CardContent>
              <Text variant="h6" component="h2">
                Headline 6
              </Text>
              <Text color="textSecondary">
                body 2
              </Text>
            </CardContent>
            <CardActions>
              <Button size="small">Action 1</Button>
              <Button size="small">Action 2</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card elevation={1} variant="outlined">
            <CardContent>
              <Text variant="h6" component="h2">
                Headline 6
              </Text>
              <Text color="textSecondary">
                body 2
              </Text>
              <Text color="textSecondary">
                well meaning and kindly.
              </Text>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card elevation={1} variant="outlined">
            <CardContent>
              <Text variant="h6" component="h2">
                Headline 6
              </Text>
              <Text color="textSecondary">
                body 2
              </Text>
              <Text color="textSecondary">
                well meaning and kindly.
              </Text>
            </CardContent>
            <CardActions>
              <Button size="small">Action 1</Button>
              <Button size="small">Action 2</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>

  );
};

export default App;
