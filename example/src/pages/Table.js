import React from 'react';
import {
  Card, Text, TableBody, TableHead,
  Table, TableRow, TableCell,
  TableCellBadge, TableContainer, TableCellAvatar, TableCellActions,
  CheckBox
} from 'beyondstyle';
import { Grid, Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

function createData(cell1, cell2, cell3, cell4) {
  return { cell1, cell2, cell3, cell4 };
}

const rows = [
  createData('Cell A1', 'Cell B1', 'Cell C1', 1),
  createData('Cell A2', 'Cell B2', 'Cell C2', 2),
  createData('Cell A3', 'Cell B3', 'Cell C3', 3),
  createData('Cell A4', 'Cell B4', 'Cell C4', 4),
  createData('Cell A5', 'Cell B5', 'Cell C5', 5),
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
          <Card elevation={0}>
            <TableContainer>
              <Table aria-label="simple table">
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
                    <TableCellActions
                      align="right"
                      onRowUpdateProps={{
                        onClick: () => console.log('update')
                      }}
                      onRowDeleteProps={{
                        onClick: () => console.log('delete')
                      }}
                    />
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
                    <TableCellActions
                      align="right"
                      onRowUpdateProps={{
                        onClick: () => console.log('update')
                      }}
                      onRowDeleteProps={{
                        onClick: () => console.log('delete')
                      }}
                    />
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Card} elevation={0}>
            <Table aria-label="simple table">
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
                  <TableCellActions
                    align="right"
                    onRowUpdateProps={{
                      onClick: () => console.log('update')
                    }}
                    onRowDeleteProps={{
                      onClick: () => console.log('delete')
                    }}
                  />
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
                  <TableCellActions
                    align="right"
                    onRowUpdateProps={{
                      onClick: () => console.log('update')
                    }}
                    onRowDeleteProps={{
                      onClick: () => console.log('delete')
                    }}
                  />
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={6}>
          <TableContainer component={Paper} variant="outlined">
            <Table aria-label="simple table" size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Header A</TableCell>
                  <TableCell align="right">Header B</TableCell>
                  <TableCell align="right">Header C</TableCell>
                  <TableCell align="right">Header D</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.cell1}>
                    <TableCell padding="checkbox">
                      <CheckBox
                        inputProps={{ 'aria-label': 'select all desserts' }}
                      />
                    </TableCell>
                    <TableCell>
                      {row.cell1}
                    </TableCell>
                    <TableCell align="right">{row.cell2}</TableCell>
                    <TableCell align="right">{row.cell3}</TableCell>
                    <TableCell align="right">{row.cell4}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={6}>
          <TableContainer component={Card} elevation={0}>
            <Table aria-label="simple table" size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Header A</TableCell>
                  <TableCell align="right">Header B</TableCell>
                  <TableCell align="right">Header C</TableCell>
                  <TableCell align="right">Header D</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.cell1} mode="striped">
                    <TableCell>
                      {row.cell1}
                    </TableCell>
                    <TableCell align="right">{row.cell2}</TableCell>
                    <TableCell align="right">{row.cell3}</TableCell>
                    <TableCell align="right">{row.cell4}</TableCell>
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
