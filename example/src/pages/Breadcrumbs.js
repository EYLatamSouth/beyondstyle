import React from 'react';
import { Breadcrumbs, Text, IconButton } from 'beyondstyle';
import { Grid, Container } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';

const App = () => {
  const handleClick = (event) => {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  };

  return (
    <Container>
      <Grid container spacing={2} style={{ paddingTop: 50 }}>
        <Grid item xs={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick}>
              Material-UI
            </Link>
            <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
              Core
            </Link>
            <Text color="textPrimary">Breadcrumb</Text>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={10}>
          <Text variant='h4' component='h3' gutterBottom>
            Breadcrumbs
          </Text>
        </Grid>
        <Grid item xs={2} style={{ display: 'flex'}} justify='space-around'>
          <IconButton disabled variant="contained">
            <FavoriteRoundedIcon />
          </IconButton>
          <IconButton disabled variant="contained">
            <FavoriteRoundedIcon />
          </IconButton>
          <IconButton disabled variant="contained">
            <FavoriteRoundedIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
