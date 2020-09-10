import React, { Fragment } from 'react'

import { Button } from 'beyondstyle';

const App = () => {
  const containerStyles = {
    margin: 50
   
  };

  return (
    <Fragment>
      <div style={containerStyles}>
        <h1>Primary (disabled | contained | outlined)</h1>
        <Button variant="contained" color="primary" >Button</Button>
        <Button variant="outlined" color="primary" >Button</Button>
      </div>

      <div style={containerStyles}>
        <h1>Secondary (disabled | contained | outlined)</h1>
        <Button variant="contained" color="secondary" >Button</Button>
        <Button variant="outlined" color="secondary" >Button</Button>
      </div>

      <div style={containerStyles}>
        <h1>Tertiary (disabled | contained | outlined)</h1>
        <Button variant="contained" color="tertiary" >Button</Button>
        <Button variant="outlined" color="tertiary" >Button</Button>
      </div>

      <div style={containerStyles}>
        <h1>Disabeld (default | small)</h1>
        <Button variant="contained" color="tertiary" disabled>Button</Button>
        <Button variant="contained" color="tertiary" size="small" disabled>Button</Button>
      </div>
      
      
    </Fragment>
  );
};

export default App;
