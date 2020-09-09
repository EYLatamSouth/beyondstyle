import React, { Fragment } from 'react'

import { ProgressBar, PirateButton, Button } from 'beyondstyle';

const App = () => {
  const containerStyles = {
    margin: 50
  };

  return (
    <Fragment>
      <div style={containerStyles}>
        <ProgressBar bgcolor="#155CB4" completed={50} />
      </div>
      <div style={containerStyles}>
        <PirateButton variant="contained" />
      </div>
      <div style={containerStyles}>
        <Button variant="contained" />
      </div>
    </Fragment>
  );
};

export default App;
