import React from 'react';
import { Text , Tab, Tabs } from 'beyondstyle';
import { Grid, Container } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

const App = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Text variant="h4" component="h2" gutterBottom>
            Tab
          </Text>
        </Grid>
        <Grid item xs={6}>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Label Tab" index={0} />
            <Tab label="Label Tab" index={1} />
            <Tab label="Label Tab" disabled index={2} />
          </Tabs>
        </Grid>
        <Grid item xs={6}>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Label Tab" icon={<FavoriteIcon />} index={0} />
            <Tab label="Label Tab" icon={<FavoriteIcon />} index={1} />
            <Tab label="Label Tab" disabled icon={<FavoriteIcon />} index={2} />
          </Tabs>
        </Grid>
        <Grid item xs={6}>
          <Tabs value={value} onChange={handleChange} textColor="secondary" aria-label="simple tabs example">
            <Tab label="Label Tab" index={0} />
            <Tab label="Label Tab" index={1} />
            <Tab label="Label Tab" disabled index={2} />
          </Tabs>
        </Grid>
        <Grid item xs={6}>
          <Tabs value={value} onChange={handleChange} textColor="secondary" aria-label="simple tabs example">
            <Tab label="Label Tab" icon={<FavoriteIcon />} index={0} />
            <Tab label="Label Tab" icon={<FavoriteIcon />} index={1} />
            <Tab label="Label Tab" disabled icon={<FavoriteIcon />} index={2} />
          </Tabs>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
