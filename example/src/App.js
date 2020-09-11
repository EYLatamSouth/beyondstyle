import React, { Fragment } from 'react'
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Visibility from '@material-ui/icons/Visibility';
import { IconButton, Fab, TextField } from 'beyondstyle';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';

const App = () => {
  const containerStyles = {
    margin: 50,
    width: '20%'
  };

  return (
    <Fragment>
      <div style={containerStyles}>
        <TextField disabled id="filled-basic" label="Filled" variant="filled" value='Asd' />
        <hr />
        <TextField
          id="input-with-icon-textfield"
          disabled
          label="button"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <hr />
        <TextField
          id="input-with-icon-textfield"
          disabled
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
        {/* <hr />
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax={4}
        />
        <hr />
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        /> */}
      </div>
      <div style={containerStyles}>
        <h1>Icon button</h1>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton aria-label="primary" >
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label="primary" color="primary">
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label="secondary" color="secondary">
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label="tertiary" color="tertiary">
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label="primary" disabled color="primary">
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
      <div style={containerStyles}>
        <h1>contained icon button</h1>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton aria-label="primary" disabled variant="contained" >
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label="primary" variant="contained" >
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label="primary" color="primary" variant="contained" >
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label="primary" color="secondary" variant="contained" >
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label="primary" color="tertiary" variant="contained" >
            <DeleteIcon />
          </IconButton>

        </div>
      </div>
      <div style={containerStyles}>
        <h1>Floating button</h1>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Fab aria-label="primary" >
            <VisibilityIcon />
          </Fab>

          <Fab aria-label="primary" color="primary">
            <VisibilityIcon />
          </Fab>

          <Fab aria-label="secondary" color="secondary">
            <VisibilityIcon />
          </Fab>

          <Fab aria-label="tertiary" color="tertiary">
            <VisibilityIcon />
          </Fab>

          <Fab aria-label="primary" disabled color="primary">
            <VisibilityIcon />
          </Fab>
        </div>
      </div>
      <div style={containerStyles}>
        <h1>Floating button small</h1>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Fab aria-label="primary" size="small" >
            <VisibilityIcon />
          </Fab>

          <Fab aria-label="primary" size="small" color="primary">
            <VisibilityIcon />
          </Fab>

          <Fab aria-label="secondary" size="small" color="secondary">
            <VisibilityIcon />
          </Fab>

          <Fab aria-label="tertiary" size="small" color="tertiary">
            <VisibilityIcon />
          </Fab>

          <Fab aria-label="primary" size="medium" disabled color="primary">
            <VisibilityIcon />
          </Fab>
        </div>
      </div>
      <div style={{ width: '50%'}}>
        <h1>Floating button with text</h1>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Fab aria-label="primary" variant="extended" >
            <VisibilityIcon />
            Button
          </Fab>

          <Fab aria-label="primary" variant="extended" color="primary">
            <VisibilityIcon />
            Extended
          </Fab>

          <Fab aria-label="secondary" variant="extended" color="secondary">
            <VisibilityIcon />
            Extended
          </Fab>

          <Fab aria-label="tertiary" variant="extended" color="tertiary">
            <VisibilityIcon />
            Extended
          </Fab>

          <Fab aria-label="primary" variant="extended" disabled color="primary">
            <VisibilityIcon />
            Extended
          </Fab>
        </div>
      </div>
      <div style={{ width: '50%'}}>
        <h1>Floating button with text small</h1>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Fab aria-label="primary" variant="extended" size="small" >
            Button
          </Fab>

          <Fab aria-label="primary" variant="extended" size="small" color="primary">
            Button
          </Fab>

          <Fab aria-label="secondary" variant="extended" size="small" color="secondary">
            Button
          </Fab>

          <Fab aria-label="tertiary" variant="extended" size="small" color="tertiary">
            Button
          </Fab>

          <Fab aria-label="primary" variant="extended" size="medium" disabled color="primary">
            Button
          </Fab>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
