import React from 'react';
import {
  Card, Text, TableBody, TableHead,
  Table, TableRow, TableCell,
  TableCellBadge, TableContainer, TableCellAvatar
} from 'beyondstyle';
import { Grid, Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Cell A1', 'Cell B1', 'Cell C1', 1),
  createData('Cell A1', 'Cell B1', 'Cell C1', 1),
  createData('Cell A1', 'Cell B1', 'Cell C1', 1),
  createData('Cell A1', 'Cell B1', 'Cell C1', 1),
  createData('Cell A1', 'Cell B1', 'Cell C1', 1),
];


const App = () => {
  const badgeItens = [
    {
      label: 'primary',
      buttonProps: { component: Link, to: '/' }
    },
    {
      label: 'Secondary',
      variant: 'pill',
      color: 'secondary'
    }
  ]
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Text variant='h4' component='h2' gutterBottom>
            Table
          </Text>
        </Grid>
        <Grid item xs={12}>
          <TableContainer>
            <Table aria-label="simple table" component={Card}>
              <TableBody>
                <TableRow mode="striped">
                  <TableCellAvatar avatarProps={{
                    alt: 'avatar letter',
                    children: 'AB',
                    className: 'medium'
                  }} />
                  <TableCell>Eduardo Basso</TableCell>
                  <TableCell align="right">eduardo@email.com</TableCell>
                  <TableCell align="right">+55 99 9999-9999</TableCell>
                  <TableCellBadge align="right" itens={badgeItens} />
                  <TableCell align="right">actions</TableCell>
                </TableRow>
                <TableRow mode="striped">
                  <TableCellAvatar avatarProps={{
                    alt: 'avatar letter',
                    children: 'AB',
                    className: 'medium'
                  }} />
                  <TableCell>Eduardo Basso</TableCell>
                  <TableCell align="right">eduardo@email.com</TableCell>
                  <TableCell align="right">+55 99 9999-9999</TableCell>
                  <TableCellBadge align="right" itens={badgeItens} />
                  <TableCell align="right">actions</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12}>
          <TableContainer>
            <Table aria-label="simple table" component={Card}>
              <TableBody>
                <TableRow>
                  <TableCellAvatar avatarProps={{
                    alt: 'avatar letter',
                    children: 'AB',
                    className: 'medium'
                  }} />
                  <TableCell>Eduardo Basso</TableCell>
                  <TableCell align="right">eduardo@email.com</TableCell>
                  <TableCell align="right">+55 99 9999-9999</TableCell>
                  <TableCellBadge align="right" itens={badgeItens} />
                  <TableCell align="right">actions</TableCell>
                </TableRow>
                <TableRow>
                  <TableCellAvatar avatarProps={{
                    alt: 'avatar letter',
                    children: 'AB',
                    className: 'medium'
                  }} />
                  <TableCell>Eduardo Basso</TableCell>
                  <TableCell align="right">eduardo@email.com</TableCell>
                  <TableCell align="right">+55 99 9999-9999</TableCell>
                  <TableCellBadge align="right" itens={badgeItens} />
                  <TableCell align="right">actions</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={6}>
          <TableContainer>
            <Table aria-label="simple table" size="small" component={Paper} variant="outlined">
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell>
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={6}>
          <TableContainer>
            <Table aria-label="simple table" size="small" component={Card}>
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name} mode="striped">
                    <TableCell>
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
