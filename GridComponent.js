import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonComponent from './Hello'
import TextFieldComponent from './TextField'
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
       <Grid container spacing={24}>
               <Grid item xs={3}>
                  <TextFieldComponent text="Username"/>
               </Grid>
               <Grid item xs={3}>
                  <TextFieldComponent text="Password"/>
               </Grid>
               <Grid item xs ={6}/>
               <Grid item xs={2}>
                  <ButtonComponent text="Sign in" color="primary"/>
               </Grid>
               <Grid item xs={2}>
                  <ButtonComponent text="Add User" color="secondary"/>
               </Grid>
               <Grid item xs ={8}/>

      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);