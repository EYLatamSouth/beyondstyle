import React, { Fragment } from 'react';
import { IconButton, Fab, Button, Text, MyCheckbox } from 'beyondstyle';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from '@material-ui/core';

const App = () => {
  const containerStyles = {
    margin: 50,
    width: '50%',
    marginTop: '5%',
    marginLeft: '5%'
    // backgroundColor: '#2e2e38'
  };

  return (
    <Fragment>
      <div style={containerStyles}>
        <div>
          <p>Icons</p>
        </div>
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
        <Text variant='h6' component='h2' gutterBottom>
          Floating action buttons
        </Text>
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
        <Text variant='h6' component='h2' gutterBottom>
          Button
        </Text>
        <hr />
        <h1>Primary (contained | outlined | text)</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
          <Button variant='contained' color='primary'>
            Button
          </Button>
          <Button variant='contained' color='primary' disabled>
            Button
          </Button>
          <Button variant='contained' color='primary' size='small'>
            Button
          </Button>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
          <Button variant='outlined' color='primary'>
            Button
          </Button>
          <Button variant='outlined' color='primary' disabled>
            Button
          </Button>
          <Button variant='outlined' color='primary' size='small'>
            Button
          </Button>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
          <Button color='primary'>Button</Button>
          <Button color='primary' disabled>
            Button
          </Button>
          <Button color='primary' size='small'>
            Button
          </Button>
        </div>
      </div>
      <div style={containerStyles}>
        <div>
          <p>Button</p>
        </div>
        <hr />
        <h1>Secondary (contained | outlined | text)</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
          <Button variant='contained' color='secondary'>
            Button
          </Button>
          <Button variant='contained' color='secondary' disabled>
            Button
          </Button>
          <Button variant='contained' color='secondary' size='small'>
            Button
          </Button>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
          <Button variant='outlined' color='secondary'>
            Button
          </Button>
          <Button variant='outlined' color='secondary' disabled>
            Button
          </Button>
          <Button variant='outlined' color='secondary' size='small'>
            Button
          </Button>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
          <Button color='secondary'>Button</Button>
          <Button color='secondary' disabled>
            Button
          </Button>
          <Button color='secondary' size='small'>
            Button
          </Button>
        </div>
      </div>
      <div style={containerStyles}>
        <div>
          <p>Button</p>
        </div>
        <hr />
        <h1>Tertiary (contained | outlined | text)</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
          <Button variant='contained' color='tertiary'>
            Button
          </Button>
          <Button variant='contained' color='tertiary' disabled>
            Button
          </Button>
          <Button variant='contained' color='tertiary' size='small'>
            Button
          </Button>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
          <Button variant='outlined' color='tertiary'>
            Button
          </Button>
          <Button variant='outlined' color='tertiary' disabled>
            Button
          </Button>
          <Button variant='outlined' color='tertiary' size='small'>
            Button
          </Button>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
          <Button color='tertiary'>Button</Button>
          <Button color='tertiary' disabled>
            Button
          </Button>
          <Button color='tertiary' size='small'>
            Button
          </Button>
        </div>
      </div>
      <div style={containerStyles}>
        <Text variant='h6' component='h2' gutterBottom>
          Text
        </Text>
        <hr />
        <Text variant='h1' component='h2' gutterBottom>
          h1. Heading
        </Text>
        <Text variant='h2' gutterBottom>
          h2. Heading
        </Text>
        <Text variant='h3' gutterBottom>
          h3. Heading
        </Text>
        <Text variant='h4' gutterBottom>
          h4. Heading
        </Text>
        <Text variant='h5' gutterBottom>
          h5. Heading
        </Text>
        <Text variant='h6' gutterBottom>
          h6. Heading
        </Text>
        <Text variant='subtitle1' gutterBottom>
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Text>
        <Text variant='subtitle2' gutterBottom>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Text>
        <Text variant='body1' gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Text>
        <Text variant='body2' gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Text>
        <Text variant='button' display='block' gutterBottom>
          button text
        </Text>
        <Text variant='caption' display='block' gutterBottom>
          caption text
        </Text>
        <Text variant='overline' display='block' gutterBottom>
          overline text
        </Text>
      </div>
      <div style={containerStyles}>
        <p>Standalone Checkboxes</p>
        <hr />

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginLeft: '5%'
          }}
        >
          <FormGroup row>
            <FormControlLabel
              labelPlacement='top'
              control={<MyCheckbox color='primary' />}
              label='Primary'
            />
            <FormControlLabel
              labelPlacement='top'
              control={<MyCheckbox color='secondary' />}
              label='Secondary'
            />
            <FormControlLabel
              labelPlacement='top'
              control={<MyCheckbox color='tertiary' />}
              label='Tertiary'
            />
            <FormControlLabel
              labelPlacement='top'
              control={<MyCheckbox color='primary' label='Disabled' disabled />}
              label='Disabled'
            />
          </FormGroup>
        </div>
      </div>

      <div style={containerStyles}>
        <p>Neutral Checkboxes</p>
        <hr />

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginLeft: '5%'
          }}
        >
          <FormGroup row>
            <FormControlLabel
              labelPlacement='top'
              control={<MyCheckbox color='primary' indeterminate />}
              label='Primary'
            />
            <FormControlLabel
              labelPlacement='top'
              control={<MyCheckbox color='secondary' indeterminate />}
              label='Secondary'
            />
            <FormControlLabel
              labelPlacement='top'
              control={<MyCheckbox color='tertiary' indeterminate />}
              label='Tertiary'
            />
            <FormControlLabel
              labelPlacement='top'
              control={<MyCheckbox color='primary' indeterminate disabled />}
              label='Disabled'
            />
          </FormGroup>
        </div>
      </div>

      <div style={containerStyles}>
        <p>Checkbox Group</p>
        <hr />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly'
          }}
        >
          <FormControl component='fieldset'>
            <FormLabel component='legend'>Primary</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<MyCheckbox color='primary' />}
                label='item'
              />
              <FormControlLabel
                control={<MyCheckbox color='primary' />}
                label='item'
              />
              <FormControlLabel
                control={<MyCheckbox color='primary' />}
                label='item'
              />
            </FormGroup>
          </FormControl>

          <FormControl component='fieldset'>
            <FormLabel component='legend'>Secondary</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<MyCheckbox color='secondary' />}
                label='item'
              />
              <FormControlLabel
                control={<MyCheckbox color='secondary' />}
                label='item'
              />
              <FormControlLabel
                control={<MyCheckbox color='secondary' />}
                label='item'
              />
            </FormGroup>
          </FormControl>

          <FormControl component='fieldset'>
            <FormLabel component='legend'>Tertiary</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<MyCheckbox color='tertiary' />}
                label='item'
              />
              <FormControlLabel
                control={<MyCheckbox color='tertiary' />}
                label='item'
              />
              <FormControlLabel
                control={<MyCheckbox color='tertiary' />}
                label='item'
              />
            </FormGroup>
          </FormControl>

          <FormControl
            style={{
              backgroundColor: '#2e2e38',
              padding: '10px'
            }}
            component='fieldset'
          >
            <FormGroup>
              <FormControlLabel
                style={{ color: '#ffd400' }}
                control={<MyCheckbox color='tertiary' />}
                label='item'
              />
              <FormControlLabel
                style={{ color: '#ffd400' }}
                control={<MyCheckbox color='tertiary' />}
                label='item'
              />
              <FormControlLabel
                style={{ color: '#ffd400' }}
                control={<MyCheckbox color='tertiary' />}
                label='item'
              />
            </FormGroup>
          </FormControl>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
