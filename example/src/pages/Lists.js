import React from 'react';
import {
  Text,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Badge,
  Button
} from 'beyondstyle';
import { Grid, Container } from '@material-ui/core';

const App = () => {
  return (
    <Container>
      <Grid item xs={12}>
        <Text variant='h4' component='h2' gutterBottom>
          Lists
        </Text>
        <hr />
      </Grid>

      <Grid container>
        <Grid item xs={6}>
          <Text
            variant='h6'
            component='h1'
            gutterBottom
            style={{ padding: '2%' }}
          >
            One-line list - None
          </Text>
          <List>
            <ListItem>
              <ListItemText primary='Primary Text'></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary='Primary Text'></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary='Primary Text'></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary='Primary Text'></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary='Primary Text'></ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={6}>
          <Text
            variant='h6'
            component='h1'
            gutterBottom
            style={{ padding: '2%' }}
          >
            Two-line list - None
          </Text>
          <List>
            <ListItem>
              <ListItemText
                primary='Primary Text'
                secondary='Secondary Text'
              ></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                primary='Primary Text'
                secondary='Secondary Text'
              ></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                primary='Primary Text'
                secondary='Secondary Text'
              ></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                primary='Primary Text'
                secondary='Secondary Text'
              ></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                primary='Primary Text'
                secondary='Secondary Text'
              ></ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: '5%' }}>
        <Grid item xs={6}>
          <Text
            variant='h6'
            component='h1'
            gutterBottom
            style={{ padding: '2%' }}
          >
            One-line list - Tags
          </Text>
          <List>
            <ListItem>
              <ListItemText primary='Primary Text'></ListItemText>
              <ListItemSecondaryAction>
                <Badge label='Primary' color='primary' />
                <Badge label='Secondary' color='secondary' />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemText primary='Primary Text'></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary='Primary Text'></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary='Primary Text'></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary='Primary Text'></ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={6}>
          <Text
            variant='h6'
            component='h1'
            gutterBottom
            style={{ padding: '2%' }}
          >
            Two-line list - Tags
          </Text>
          <List>
            <ListItem>
              <ListItemText
                primary='Primary Text'
                secondary='Secondary Text'
              ></ListItemText>
              <ListItemSecondaryAction>
                <Badge label='Primary' color='primary' />
                <Badge label='Secondary' color='secondary' />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemText
                primary='Primary Text'
                secondary='Secondary Text'
              ></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                primary='Primary Text'
                secondary='Secondary Text'
              ></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                primary='Primary Text'
                secondary='Secondary Text'
              ></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                primary='Primary Text'
                secondary='Secondary Text'
              ></ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
