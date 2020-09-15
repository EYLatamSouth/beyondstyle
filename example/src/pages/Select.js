import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container } from '@material-ui/core';
import { Select, MenuItem, Text } from 'beyondstyle';
import AccountCircle from '@material-ui/icons/AccountCircle';

const Page = () => {

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Text variant="h3" component="h3">
            Dropdowns (select)
          </Text>
        </Grid>
        <Grid item xs={12}>
          <Text variant="h6" component="h6">
            Primary (filled | outlined)
          </Text>
        </Grid>
        <Grid item xs={3}>
          <Select label="Filled">
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3}>
          <Select
            label="Filled Icon"
            inputicon={AccountCircle}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3}>
          <Select label="Filled Disabled" disabled>
            <MenuItem value={10}>1</MenuItem>
            <MenuItem value={20}>2</MenuItem>
            <MenuItem value={30}>3</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3}>
          <Select label="Filled Error" error helptext="Error">
          <MenuItem value={10}>1</MenuItem>
            <MenuItem value={20}>2</MenuItem>
            <MenuItem value={30}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3}>
          <Select variant="outlined" label="Outlined">
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3}>
          <Select
            variant="outlined"
            label="Outlined Icon"
            inputicon={AccountCircle}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3}>
          <Select variant="outlined" label="Outlined Disabled" disabled>
            <MenuItem value={10}>1</MenuItem>
            <MenuItem value={20}>2</MenuItem>
            <MenuItem value={30}>3</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3}>
          <Select variant="outlined" label="Outlined Error" error helptext="Error">
          <MenuItem value={10}>1</MenuItem>
            <MenuItem value={20}>2</MenuItem>
            <MenuItem value={30}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
          </Select>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Text variant="h6" component="h6">
            Secondary (filled | outlined)
          </Text>
        </Grid>
        <Grid item xs={3}>
          <Select color="secondary" label="Filled">
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3}>
          <Select
            color="secondary"
            label="Filled Icon"
            inputicon={AccountCircle}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3}>
          <Select color="secondary" label="Filled Disabled" disabled>
            <MenuItem value={10}>1</MenuItem>
            <MenuItem value={20}>2</MenuItem>
            <MenuItem value={30}>3</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3}>
          <Select color="secondary" label="Filled Error" error>
          <MenuItem value={10}>1</MenuItem>
            <MenuItem value={20}>2</MenuItem>
            <MenuItem value={30}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3}>
          <Select color="secondary" variant="outlined" label="Outlined">
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3}>
          <Select
            color="secondary"
            variant="outlined"
            label="Outlined Icon"
            inputicon={AccountCircle}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3}>
          <Select color="secondary" variant="outlined" label="Outlined Disabled" disabled>
            <MenuItem value={10}>1</MenuItem>
            <MenuItem value={20}>2</MenuItem>
            <MenuItem value={30}>3</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3}>
          <Select color="secondary" variant="outlined" label="Outlined Error" error>
          <MenuItem value={10}>1</MenuItem>
            <MenuItem value={20}>2</MenuItem>
            <MenuItem value={30}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </Container>
  )
};



export default Page;
