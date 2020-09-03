import React, { Fragment } from 'react'

import { ProgressBar, PirateButton } from 'beyondstyle';

import 'beyondstyle/dist/index.css';

const App = () => {
  return (
    <Fragment>
      <ProgressBar bgcolor="#155CB4" completed={50} />
      <PirateButton />
    </Fragment>
  );
};

export default App;
