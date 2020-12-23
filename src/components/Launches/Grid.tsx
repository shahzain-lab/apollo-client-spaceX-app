import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
///Launches
import {Launches} from './Launches';
////useQuery
import {useLaunchesQuery} from '../../generated/graphql';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    grid:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    ,
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      width: '90%',
      background: "#272727"
    },
  }),
);

export default function LaunchesGrid() {
  const classes = useStyles();
/////working for query

const {data,error,loading} = useLaunchesQuery()
if(error || !data){
   return <h3>error</h3>
}
if(loading){
    return <h3>loading...</h3>
}
  
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item className={classes.grid} xs={12}>
          <Paper className={classes.paper}>
             <Launches data={data}/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
