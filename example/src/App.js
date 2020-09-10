import React, { Fragment } from 'react'

import { TextField } from 'beyondstyle';

const App = () => {
  const containerStyles = {
    margin: 50
  };

  return (
    <Fragment>
      <div style={containerStyles}>
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <hr />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </div>
    </Fragment>
  );
};

export default App;
