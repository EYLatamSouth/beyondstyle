import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container } from '@material-ui/core';

const NotFoundPage = () => {

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <h1>
            Ooops! Página não existe
          </h1>
          <p className="text-center">
            <Link to="/">Voltar para home</Link>
          </p>
        </Grid>
      </Grid>
    </Container>
  )
};

export default NotFoundPage;
