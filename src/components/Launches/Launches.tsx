import React from 'react';
import {LaunchesQuery}  from '../../generated/graphql';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//className and moment
import classNames from 'classnames';
import {Link} from 'react-router-dom';
///spinner
import Spinner from '../images/Spinner.gif'


export interface OwnProps{
  handleChange: (newId: number) => void;
}

interface Props extends OwnProps{
    data?: LaunchesQuery;
    loading?:boolean; 
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    grid:{
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
    }
    ,
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      width: '90%',
      background: "#272727",
      margin:'2.5rem 0',
      lineHeight: '1.2rem'
    },
  }),
);


export const Launches: React.FC<Props>=({data,loading,handleChange})=> {
    
  const classes = useStyles();

  if(loading){
    return <img src={Spinner} alt="gif"/>
  }
  
    return(
    
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item className={classes.grid} xs={12}>
           {!!data?.launches &&data.launches.map((launch,i) => !!launch &&(
               <Paper className={classes.paper} key={i}>
                 
                 <h1 className="mission_name">{launch.mission_name} 
                 <span>{launch.launch_date_local}</span></h1>
           <h4 className="launch-year">Launch Year: <span>{launch.launch_year}</span></h4>
           <h4 className="status">Status: <span className={classNames({
             'text-success': launch.launch_success,
             'text-danger': !launch.launch_success
           })}
            
           >
             {JSON.stringify(launch.launch_success)}
           </span>
           </h4>
           {launch.details ? <h4 className="description"><span>Description: </span>{launch.details}</h4>: null}
           <Link to="/launches/details" onClick={() => handleChange(launch.flight_number!)} className="Details">Launch Details</Link>
               </Paper>
           ))}
           </Grid>
           </Grid>
        </div>
    )
}