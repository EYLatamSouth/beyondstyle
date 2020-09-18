import React from 'react';
import { Text, List, ListItem, ListItemText } from 'beyondstyle';
import { Grid, Container } from '@material-ui/core';

const App = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Text variant='h4' component='h2' gutterBottom>
            Lists
          </Text>
          <hr />
        </Grid>
        <Grid item xs={12}>
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
    </Container>
  );
};

export default App;
