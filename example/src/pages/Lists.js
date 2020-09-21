import React from 'react';
import {
  Text,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Badge,
  Button,
  ListItemTag,
  ListItemIcon
} from 'beyondstyle';
import { Grid, Container } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const App = () => {
  return (
    <div
      style={{
        backgroundColor: '#f0eef1'
      }}
    >
      <Container>
        <Grid item xs={12}>
          <Text variant='h4' component='h2' gutterBottom>
            Lists
          </Text>
          <hr />
        </Grid>

        {/* Default list */}
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

        {/* Icon list */}
        <Grid container style={{ marginTop: '5%' }}>
          <Grid item xs={6}>
            <Text
              variant='h6'
              component='h1'
              gutterBottom
              style={{ padding: '2%' }}
            >
              One-line list - Icon
            </Text>
            <List>
              <ListItem>
                <ListItemText primary='Primary Text'></ListItemText>
                <ListItemIcon>
                  <MoreVertIcon></MoreVertIcon>
                </ListItemIcon>
              </ListItem>
              <ListItem>
                <ListItemText primary='Primary Text'></ListItemText>
                <ListItemIcon>
                  <MoreVertIcon></MoreVertIcon>
                </ListItemIcon>
              </ListItem>
              <ListItem>
                <ListItemText primary='Primary Text'></ListItemText>
                <ListItemIcon>
                  <MoreVertIcon></MoreVertIcon>
                </ListItemIcon>
              </ListItem>
              <ListItem>
                <ListItemText primary='Primary Text'></ListItemText>
                <ListItemIcon>
                  <MoreVertIcon></MoreVertIcon>
                </ListItemIcon>
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

                <ListItemIcon>
                  <MoreVertIcon></MoreVertIcon>
                </ListItemIcon>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='Primary Text'
                  secondary='Secondary Text'
                ></ListItemText>

                <ListItemIcon>
                  <MoreVertIcon></MoreVertIcon>
                </ListItemIcon>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='Primary Text'
                  secondary='Secondary Text'
                ></ListItemText>

                <ListItemIcon>
                  <MoreVertIcon></MoreVertIcon>
                </ListItemIcon>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='Primary Text'
                  secondary='Secondary Text'
                ></ListItemText>

                <ListItemIcon>
                  <MoreVertIcon></MoreVertIcon>
                </ListItemIcon>
              </ListItem>
            </List>
          </Grid>
        </Grid>

        {/* Text list */}
        <Grid container style={{ marginTop: '5%' }}>
          <Grid item xs={6}>
            <Text
              variant='h6'
              component='h1'
              gutterBottom
              style={{ padding: '2%' }}
            >
              One-line list - Text
            </Text>
            <List>
              <ListItem>
                <ListItemText primary='Primary Text'></ListItemText>
                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText primary='Primary Text'></ListItemText>
                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText primary='Primary Text'></ListItemText>
                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText primary='Primary Text'></ListItemText>
                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>
                </ListItemSecondaryAction>
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
              Two-line list - Text
            </Text>
            <List>
              <ListItem>
                <ListItemText
                  primary='Primary Text'
                  secondary='Secondary Text'
                ></ListItemText>

                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='Primary Text'
                  secondary='Secondary Text'
                ></ListItemText>

                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='Primary Text'
                  secondary='Secondary Text'
                ></ListItemText>

                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='Primary Text'
                  secondary='Secondary Text'
                ></ListItemText>

                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Grid>
        </Grid>

        {/* Link  list */}
        <Grid container style={{ marginTop: '5%' }}>
          <Grid item xs={6}>
            <Text
              variant='h6'
              component='h1'
              gutterBottom
              style={{ padding: '2%' }}
            >
              One-line list - Link
            </Text>
            <List>
              <ListItem>
                <ListItemText primary='Primary Text'></ListItemText>
                <ListItemSecondaryAction>
                  <Button color='primary' size='small'>
                    Button
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText primary='Primary Text'></ListItemText>
                <ListItemSecondaryAction>
                  <Button color='primary' size='small'>
                    Button
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText primary='Primary Text'></ListItemText>
                <ListItemSecondaryAction>
                  <Button color='primary' size='small'>
                    Button
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText primary='Primary Text'></ListItemText>
                <ListItemSecondaryAction>
                  <Button color='primary' size='small'>
                    Button
                  </Button>
                </ListItemSecondaryAction>
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
              Two-line list - Link
            </Text>
            <List>
              <ListItem>
                <ListItemText
                  primary='Primary Text'
                  secondary='Secondary Text'
                ></ListItemText>

                <ListItemSecondaryAction>
                  <Button color='primary' size='small'>
                    Button
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='Primary Text'
                  secondary='Secondary Text'
                ></ListItemText>

                <ListItemSecondaryAction>
                  <Button color='primary' size='small'>
                    Button
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='Primary Text'
                  secondary='Secondary Text'
                ></ListItemText>

                <ListItemSecondaryAction>
                  <Button color='primary' size='small'>
                    Button
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='Primary Text'
                  secondary='Secondary Text'
                ></ListItemText>

                <ListItemSecondaryAction>
                  <Button color='primary' size='small'>
                    Button
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Grid>
        </Grid>

        {/* Tags + Text list */}
        <Grid container style={{ marginTop: '5%' }}>
          <Grid item xs={6}>
            <Text
              variant='h6'
              component='h1'
              gutterBottom
              style={{ padding: '2%' }}
            >
              One-line list - Tags + Text
            </Text>
            <List>
              <ListItemTag>
                <ListItemText primary='Primary Text'></ListItemText>
                <ListItemIcon>
                  <Badge label='Primary' color='primary' />
                  <Badge label='Secondary' color='secondary' />
                </ListItemIcon>
                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>
                </ListItemSecondaryAction>
              </ListItemTag>
              <ListItemTag>
                <ListItemText primary='Primary Text'></ListItemText>
                <ListItemIcon>
                  <Badge label='Primary' color='primary' />
                  <Badge label='Secondary' color='secondary' />
                </ListItemIcon>
                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>
                </ListItemSecondaryAction>
              </ListItemTag>
              <ListItemTag>
                <ListItemText primary='Primary Text'></ListItemText>
                <ListItemIcon>
                  <Badge label='Primary' color='primary' />
                  <Badge label='Secondary' color='secondary' />
                </ListItemIcon>
                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>
                </ListItemSecondaryAction>
              </ListItemTag>
              <ListItemTag>
                <ListItemText primary='Primary Text'></ListItemText>
                <ListItemIcon>
                  <Badge label='Primary' color='primary' />
                  <Badge label='Secondary' color='secondary' />
                </ListItemIcon>
                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>
                </ListItemSecondaryAction>
              </ListItemTag>
            </List>
          </Grid>
          <Grid item xs={6}>
            <Text
              variant='h6'
              component='h1'
              gutterBottom
              style={{ padding: '2%' }}
            >
              Two-line list - Tags + Text
            </Text>
            <List>
              <ListItemTag>
                <ListItemText
                  primary='Primary Text'
                  secondary='Secondary Text'
                ></ListItemText>

                <ListItemIcon>
                  <Badge label='Primary' color='primary' />
                  <Badge label='Secondary' color='secondary' />
                </ListItemIcon>

                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>
                </ListItemSecondaryAction>
              </ListItemTag>
              <ListItemTag>
                <ListItemText
                  primary='Primary Text'
                  secondary='Secondary Text'
                ></ListItemText>

                <ListItemIcon>
                  <Badge label='Primary' color='primary' />
                  <Badge label='Secondary' color='secondary' />
                </ListItemIcon>

                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>
                </ListItemSecondaryAction>
              </ListItemTag>
              <ListItemTag>
                <ListItemText
                  primary='Primary Text'
                  secondary='Secondary Text'
                ></ListItemText>

                <ListItemIcon>
                  <Badge label='Primary' color='primary' />
                  <Badge label='Secondary' color='secondary' />
                </ListItemIcon>

                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>
                </ListItemSecondaryAction>
              </ListItemTag>
              <ListItemTag>
                <ListItemText
                  primary='Primary Text'
                  secondary='Secondary Text'
                ></ListItemText>

                <ListItemIcon>
                  <Badge label='Primary' color='primary' />
                  <Badge label='Secondary' color='secondary' />
                  <Badge label='Warning' color='warning' />
                </ListItemIcon>

                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>
                </ListItemSecondaryAction>
              </ListItemTag>
            </List>
          </Grid>
        </Grid>

        {/* Tags + Text + Link list */}
        <Grid container style={{ marginTop: '5%' }}>
          <Grid item xs={6}>
            <Text
              variant='h6'
              component='h1'
              gutterBottom
              style={{ padding: '2%' }}
            >
              One-line list - Tags + Text + Link
            </Text>
            <List>
              <ListItemTag>
                <ListItemText primary='Primary Text'></ListItemText>
                <ListItemIcon>
                  <Badge label='Primary' color='primary' />
                  <Badge label='Secondary' color='secondary' />
                </ListItemIcon>
                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>

                  <Button color='primary' size='small'>
                    Button
                  </Button>
                </ListItemSecondaryAction>
              </ListItemTag>
              <ListItemTag>
                <ListItemText primary='Primary Text'></ListItemText>
                <ListItemIcon>
                  <Badge label='Primary' color='primary' />
                  <Badge label='Secondary' color='secondary' />
                </ListItemIcon>
                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>
                  <Button color='primary' size='small'>
                    Button
                  </Button>
                </ListItemSecondaryAction>
              </ListItemTag>
              <ListItemTag>
                <ListItemText primary='Primary Text'></ListItemText>
                <ListItemIcon>
                  <Badge label='Primary' color='primary' />
                  <Badge label='Secondary' color='secondary' />
                </ListItemIcon>
                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>
                  <Button color='primary' size='small'>
                    Button
                  </Button>
                </ListItemSecondaryAction>
              </ListItemTag>
              <ListItemTag>
                <ListItemText primary='Primary Text'></ListItemText>
                <ListItemIcon>
                  <Badge label='Primary' color='primary' />
                  <Badge label='Secondary' color='secondary' />
                </ListItemIcon>
                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>
                  <Button color='primary' size='small'>
                    Button
                  </Button>
                </ListItemSecondaryAction>
              </ListItemTag>
            </List>
          </Grid>
          <Grid item xs={6}>
            <Text
              variant='h6'
              component='h1'
              gutterBottom
              style={{ padding: '2%' }}
            >
              Two-line list - Tags + Text + Link
            </Text>
            <List>
              <ListItemTag>
                <ListItemText
                  primary='Primary Text'
                  secondary='Secondary Text'
                ></ListItemText>

                <ListItemIcon>
                  <Badge label='Primary' color='primary' />
                  <Badge label='Secondary' color='secondary' />
                </ListItemIcon>

                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>
                  <Button color='primary' size='small'>
                    Button
                  </Button>
                </ListItemSecondaryAction>
              </ListItemTag>
              <ListItemTag>
                <ListItemText
                  primary='Primary Text'
                  secondary='Secondary Text'
                ></ListItemText>

                <ListItemIcon>
                  <Badge label='Primary' color='primary' />
                  <Badge label='Secondary' color='secondary' />
                </ListItemIcon>

                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>
                  <Button color='primary' size='small'>
                    Button
                  </Button>
                </ListItemSecondaryAction>
              </ListItemTag>
              <ListItemTag>
                <ListItemText
                  primary='Primary Text'
                  secondary='Secondary Text'
                ></ListItemText>

                <ListItemIcon>
                  <Badge label='Primary' color='primary' />
                  <Badge label='Secondary' color='secondary' />
                </ListItemIcon>

                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>
                  <Button color='primary' size='small'>
                    Button
                  </Button>
                </ListItemSecondaryAction>
              </ListItemTag>
              <ListItemTag>
                <ListItemText
                  primary='Primary Text'
                  secondary='Secondary Text'
                ></ListItemText>

                <ListItemIcon>
                  <Badge label='Primary' color='primary' />
                  <Badge label='Secondary' color='secondary' />
                  <Badge label='Warning' color='warning' />
                </ListItemIcon>

                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>
                  <Button color='primary' size='small'>
                    Button
                  </Button>
                </ListItemSecondaryAction>
              </ListItemTag>
            </List>
          </Grid>
        </Grid>

        {/* Tags + Text + Link list (Pill)*/}
        <Grid container style={{ marginTop: '5%' }}>
          <Grid item xs={6}>
            <Text
              variant='h6'
              component='h1'
              gutterBottom
              style={{ padding: '2%' }}
            >
              One-line list - Tags + Text + Link (Pill variation)
            </Text>
            <List>
              <ListItemTag>
                <ListItemText primary='Primary Text'></ListItemText>
                <ListItemIcon>
                  <Badge variant='pill' label='Primary' color='primary' />
                  <Badge variant='pill' label='Secondary' color='secondary' />
                </ListItemIcon>
                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>

                  <Button color='primary' size='small'>
                    Button
                  </Button>
                </ListItemSecondaryAction>
              </ListItemTag>
              <ListItemTag>
                <ListItemText primary='Primary Text'></ListItemText>
                <ListItemIcon>
                  <Badge variant='pill' label='Primary' color='primary' />
                  <Badge variant='pill' label='Secondary' color='secondary' />
                </ListItemIcon>
                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>
                  <Button color='primary' size='small'>
                    Button
                  </Button>
                </ListItemSecondaryAction>
              </ListItemTag>
              <ListItemTag>
                <ListItemText primary='Primary Text'></ListItemText>
                <ListItemIcon>
                  <Badge variant='pill' label='Primary' color='primary' />
                  <Badge variant='pill' label='Secondary' color='secondary' />
                </ListItemIcon>
                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>
                  <Button color='primary' size='small'>
                    Button
                  </Button>
                </ListItemSecondaryAction>
              </ListItemTag>
              <ListItemTag>
                <ListItemText primary='Primary Text'></ListItemText>
                <ListItemIcon>
                  <Badge variant='pill' label='Primary' color='primary' />
                  <Badge variant='pill' label='Secondary' color='secondary' />
                </ListItemIcon>
                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>
                  <Button color='primary' size='small'>
                    Button
                  </Button>
                </ListItemSecondaryAction>
              </ListItemTag>
            </List>
          </Grid>
          <Grid item xs={6}>
            <Text
              variant='h6'
              component='h1'
              gutterBottom
              style={{ padding: '2%' }}
            >
              Two-line list - Tags + Text + Link (Pill variation)
            </Text>
            <List>
              <ListItemTag>
                <ListItemText
                  primary='Primary Text'
                  secondary='Secondary Text'
                ></ListItemText>

                <ListItemIcon>
                  <Badge variant='pill' label='Primary' color='primary' />
                  <Badge variant='pill' label='Secondary' color='secondary' />
                </ListItemIcon>

                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>
                  <Button color='primary' size='small'>
                    Button
                  </Button>
                </ListItemSecondaryAction>
              </ListItemTag>
              <ListItemTag>
                <ListItemText
                  primary='Primary Text'
                  secondary='Secondary Text'
                ></ListItemText>

                <ListItemIcon>
                  <Badge variant='pill' label='Primary' color='primary' />
                  <Badge variant='pill' label='Secondary' color='secondary' />
                </ListItemIcon>

                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>
                  <Button color='primary' size='small'>
                    Button
                  </Button>
                </ListItemSecondaryAction>
              </ListItemTag>
              <ListItemTag>
                <ListItemText
                  primary='Primary Text'
                  secondary='Secondary Text'
                ></ListItemText>

                <ListItemIcon>
                  <Badge variant='pill' label='Primary' color='primary' />
                  <Badge variant='pill' label='Secondary' color='secondary' />
                </ListItemIcon>

                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>
                  <Button color='primary' size='small'>
                    Button
                  </Button>
                </ListItemSecondaryAction>
              </ListItemTag>
              <ListItemTag>
                <ListItemText
                  primary='Primary Text'
                  secondary='Secondary Text'
                ></ListItemText>

                <ListItemIcon>
                  <Badge variant='pill' label='Primary' color='primary' />
                  <Badge variant='pill' label='Secondary' color='secondary' />
                  <Badge variant='pill' label='Warning' color='warning' />
                </ListItemIcon>

                <ListItemSecondaryAction>
                  <Text body='2' gutterBottom>
                    Text
                  </Text>
                  <Button color='primary' size='small'>
                    Button
                  </Button>
                </ListItemSecondaryAction>
              </ListItemTag>
            </List>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
