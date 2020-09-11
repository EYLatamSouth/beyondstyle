import React, { Fragment } from 'react'
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';

import { TextField } from 'beyondstyle';

const App = () => {
  const containerStyles = {
    margin: 50
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
    </Fragment>
  );
};

export default App;
