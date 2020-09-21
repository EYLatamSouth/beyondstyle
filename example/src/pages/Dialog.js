import React from 'react';
import {
  Text, Dialog, Button, IconButton,
  DialogActions, DialogContent,
  DialogContentText, DialogTitle,
  Divider
} from 'beyondstyle';
import { Grid, Container, AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const [openFullWidth, setOpenFullWidth] = React.useState(false);
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Text variant='h4' component='h2' gutterBottom>
            Dialog
          </Text>
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>
            Open responsive dialog
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined" color="primary" onClick={() => setOpenFullWidth(true)}>
            Open full-screen dialog
          </Button>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setOpen(false)} color="primary">
            Disagree
          </Button>
          <Button onClick={() => setOpen(false)} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog fullScreen open={openFullWidth} onClose={() => setOpenFullWidth(false)}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Text variant="h6" className={classes.title}>
              Sound
            </Text>
            <Button autoFocus color="secondary" variant="contained" onClick={() => setOpenFullWidth(false)}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Text>
          Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
        </Text>
      </Dialog>
    </Container>
  );
}
