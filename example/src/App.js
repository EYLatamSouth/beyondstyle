import React, { Fragment } from 'react'

import { Button } from 'beyondstyle';

const App = () => {
  const containerStyles = {
    margin: 50
   
  };

  return (
    <Fragment>
      <div style={containerStyles}>
        <h1>Primary (contained | outlined)</h1>
        <hr />
        <Button variant="contained" color="primary" >Button</Button>
        <Button variant="outlined" color="primary" >Button</Button>
        <Button variant="contained" color="primary" size="small" >Button</Button>
        <Button variant="outlined" color="primary" size="small" >Button</Button>
        
      </div>

      <div style={containerStyles}>
        <h1>Secondary (contained | outlined)</h1>
        <hr />
        <Button variant="contained" color="secondary" >Button</Button>
        <Button variant="outlined" color="secondary" >Button</Button>
        <Button variant="contained" color="secondary" size="small" >Button</Button>
        <Button variant="outlined" color="secondary" size="small" >Button</Button>
      </div>

      <div style={containerStyles}>
        <h1>Tertiary (contained | outlined)</h1>
        <hr />
        <Button variant="contained" color="tertiary" >Button</Button>
        <Button variant="outlined" color="tertiary" >Button</Button>
        <Button variant="contained" color="tertiary" size="small" >Button</Button>
        <Button variant="outlined" color="tertiary" size="small" >Button</Button>
      </div>

      <div style={containerStyles}>
        <h1>Disabeld (default | outlined)</h1>
        <hr />
        <Button variant="contained" color="tertiary" disabled>Button</Button>
        <Button variant="outlined" color="tertiary" size="small" disabled>Button</Button>
      </div>
      
      
    </Fragment>
  );
};

export default App;
