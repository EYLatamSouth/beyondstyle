import React from 'react';
import { Text } from 'beyondstyle';
import { Grid, Container } from '@material-ui/core';

const App = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Text variant="h6" component="h2" gutterBottom>
            Text
          </Text>
          <hr />
          <Text variant="h1" component="h2" gutterBottom>
            h1. Heading
          </Text>
          <Text variant="h2" gutterBottom>
            h2. Heading
          </Text>
          <Text variant="h3" gutterBottom>
            h3. Heading
          </Text>
          <Text variant="h4" gutterBottom>
            h4. Heading
          </Text>
          <Text variant="h5" gutterBottom>
            h5. Heading
          </Text>
          <Text variant="h6" gutterBottom>
            h6. Heading
          </Text>
          <Text variant="subtitle1" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          </Text>
          <Text variant="subtitle2" gutterBottom>
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          </Text>
          <Text variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Text>
          <Text variant="body2" gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Text>
          <Text variant="button" display="block" gutterBottom>
            button text
          </Text>
          <Text variant="caption" display="block" gutterBottom>
            caption text
          </Text>
          <Text variant="overline" display="block" gutterBottom>
            overline text
          </Text>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
