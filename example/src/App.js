import React, { Fragment } from 'react';
import { IconButton, Fab, Button } from 'beyondstyle';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';

const App = () => {
  const containerStyles = {
    margin: 50,
    width: '50%',
    marginTop: '5%',
    marginLeft: '5%',
    // backgroundColor: '#2e2e38'
  };

  return (
    <Fragment>
      <div style={containerStyles}>
        <div><p>Icons</p></div>
        <hr />
        <h1>Icon button</h1>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton aria-label='primary'>
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label='primary' color='primary'>
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label='secondary' color='secondary'>
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label='tertiary' color='tertiary'>
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label='primary' disabled color='primary'>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
      <div style={containerStyles}>
        <h1>contained icon button</h1>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton aria-label='primary' disabled variant='contained'>
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label='primary' variant='contained'>
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label='primary' color='primary' variant='contained'>
            <DeleteIcon />
          </IconButton>

          <IconButton
            aria-label='primary'
            color='secondary'
            variant='contained'
          >
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label='primary' color='tertiary' variant='contained'>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
      <div style={containerStyles}>
      <div><p>Floating action buttons</p></div>
        <hr />
        <h1>Floating button</h1>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Fab aria-label='primary'>
            <VisibilityIcon />
          </Fab>

          <Fab aria-label='primary' color='primary'>
            <VisibilityIcon />
          </Fab>

          <Fab aria-label='secondary' color='secondary'>
            <VisibilityIcon />
          </Fab>

          <Fab aria-label='tertiary' color='tertiary'>
            <VisibilityIcon />
          </Fab>

          <Fab aria-label='primary' disabled color='primary'>
            <VisibilityIcon />
          </Fab>
        </div>
      </div>
      <div style={containerStyles}>
        <h1>Floating button small</h1>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Fab aria-label='primary' size='small'>
            <VisibilityIcon />
          </Fab>

          <Fab aria-label='primary' size='small' color='primary'>
            <VisibilityIcon />
          </Fab>

          <Fab aria-label='secondary' size='small' color='secondary'>
            <VisibilityIcon />
          </Fab>

          <Fab aria-label='tertiary' size='small' color='tertiary'>
            <VisibilityIcon />
          </Fab>

          <Fab aria-label='primary' size='medium' disabled color='primary'>
            <VisibilityIcon />
          </Fab>
        </div>
      </div>
      <div style={{ width: '50%', marginLeft: '5%' }}>
        <h1>Floating button with text</h1>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Fab aria-label='primary' variant='extended'>
            <VisibilityIcon />
            Button
          </Fab>

          <Fab aria-label='primary' variant='extended' color='primary'>
            <VisibilityIcon />
            Extended
          </Fab>

          <Fab aria-label='secondary' variant='extended' color='secondary'>
            <VisibilityIcon />
            Extended
          </Fab>

          <Fab aria-label='tertiary' variant='extended' color='tertiary'>
            <VisibilityIcon />
            Extended
          </Fab>

          <Fab aria-label='primary' variant='extended' disabled color='primary'>
            <VisibilityIcon />
            Extended
          </Fab>
        </div>
      </div>
      <div style={{ width: '50%', marginLeft: '5%' }}>
        <h1>Floating button with text small</h1>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Fab aria-label='primary' variant='extended' size='small'>
            Button
          </Fab>

          <Fab
            aria-label='primary'
            variant='extended'
            size='small'
            color='primary'
          >
            Button
          </Fab>

          <Fab
            aria-label='secondary'
            variant='extended'
            size='small'
            color='secondary'
          >
            Button
          </Fab>

          <Fab
            aria-label='tertiary'
            variant='extended'
            size='small'
            color='tertiary'
          >
            Button
          </Fab>

          <Fab
            aria-label='primary'
            variant='extended'
            size='medium'
            disabled
            color='primary'
          >
            Button
          </Fab>
        </div>
      </div>
      <div style={containerStyles}>
        <div><p>Button</p></div>
        <hr />
        <h1>Primary (contained | outlined)</h1>
        <Button variant="contained" color="primary" >Button</Button>
        <Button variant="outlined" color="primary" >Button</Button>
        <Button variant="contained" color="primary" size="small" >Button</Button>
        <Button variant="outlined" color="primary" size="small" >Button</Button>
      </div>
      <div style={containerStyles}>
        <h1>Secondary (contained | outlined)</h1>
        <Button variant="contained" color="secondary" >Button</Button>
        <Button variant="outlined" color="secondary" >Button</Button>
        <Button variant="contained" color="secondary" size="small" >Button</Button>
        <Button variant="outlined" color="secondary" size="small" >Button</Button>
      </div>
      <div style={containerStyles}>
        <h1>Tertiary (contained | outlined)</h1>
        <Button variant="text" href="#text-buttons" color="tertiary" >Button</Button>
        <Button variant="outlined" color="tertiary" >Button</Button>
        <Button variant="contained" color="tertiary" size="small" >Button</Button>
        <Button variant="outlined" color="tertiary" size="small" >Button</Button>
      </div>
      <div style={containerStyles}>
        <h1>Disabeld (default | outlined)</h1>
        <Button variant="contained" color="tertiary" disabled>Button</Button>
        <Button variant="outlined" color="tertiary" size="small" disabled>Button</Button>
      </div>
    </Fragment>
  );
};

export default App;
