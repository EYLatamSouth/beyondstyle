import React from 'react'
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Visibility from '@material-ui/icons/Visibility';
import { IconButton, TextField } from 'beyondstyle';
import { Grid, Container } from '@material-ui/core';

const App = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Primary</h1>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="standard"
            label="Field"
           />
        </Grid>
        <Grid item xs={3}>
          <TextField
            disabled
            id="Disabled"
            label="Disabled"
            defaultValue="Hello World"
            helperText="help entry."
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="input-with-icon-textfield"
            helperText="Incorrect entry."
            label="Error"
            error
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="input-with-icon-textfield"
            helperText="Incorrect entry."
            label="2 buttton"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <Visibility />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            rowsMax={4}
            maxlength={5}
            helperText="teste"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="filled-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            maxlength={5}
            defaultValue="Default Value"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Secondary</h1>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="standard"
            label="Field"
            color="secondary"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            disabled
            id="Disabled"
            label="Disabled"
            color="secondary"
            defaultValue="Hello World"
            helperText="help entry."
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="input-with-icon-textfield"
            color="secondary"
            error
            helperText="Incorrect entry."
            label="button"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            color="secondary"
            id="input-with-icon-textfield"
            helperText="Incorrect entry."
            label="2 buttton"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <Visibility />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            rowsMax={4}
            maxlength={5}
            helperText="teste"
            color="secondary"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="filled-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            maxlength={5}
            defaultValue="Default Value"
            color="secondary"
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Primary</h1>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="standard"
            label="Field"
            variant="outlined"
           />
        </Grid>
        <Grid item xs={3}>
          <TextField
            disabled
            id="Disabled"
            label="Disabled"
            defaultValue="Hello World"
            helperText="help entry."
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="input-with-icon-textfield"
            helperText="Incorrect entry."
            label="Error"
            variant="outlined"
            error
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="input-with-icon-textfield"
            helperText="Incorrect entry."
            label="2 buttton"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <Visibility />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            variant="outlined"
            multiline
            rowsMax={4}
            maxlength={5}
            helperText="teste"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="filled-multiline-static"
            label="Multiline"
            variant="outlined"
            multiline
            rows={4}
            maxlength={5}
            defaultValue="Default Value"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Secondary outlined</h1>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="standard"
            label="Field"
            color="secondary"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            disabled
            id="Disabled"
            label="Disabled"
            color="secondary"
            defaultValue="Hello World"
            helperText="help entry."
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="input-with-icon-textfield"
            color="secondary"
            error
            helperText="Incorrect entry."
            label="button"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            color="secondary"
            id="input-with-icon-textfield"
            helperText="Incorrect entry."
            label="2 buttton"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <Visibility />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            rowsMax={4}
            maxlength={5}
            helperText="teste"
            color="secondary"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="filled-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            maxlength={5}
            defaultValue="Default Value"
            color="secondary"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
