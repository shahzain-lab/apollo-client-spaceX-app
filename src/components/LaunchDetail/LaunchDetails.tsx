import React from 'react';
import {LaunchinfoQuery} from '../../generated/graphql';
////material-ui
import classNames from 'classnames';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import {Link} from 'react-router-dom';

interface Props{
 data?: LaunchinfoQuery;
 loading?: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    grid:{
        display: 'flex',
        justifyContent: 'center',
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      width: '90%',
      background:'#272727',
    },
  }),
);


export const LaunchDetails: React.FC<Props> = ({data,loading}) => {
  const classes = useStyles();
    
   if(loading){
       return<h1>Loading ...</h1>
   }
   if(!data?.launch){
       return<h3>data is not available</h3>
   }

    return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      
        <Grid item className={classes.grid} xs={12}>
          <Paper className={classes.paper}>
          <img    style={{borderRadius: '1rem'}}
                      src={(!!data.launch.links &&
                        !!data.launch.links?.flickr_images &&
                        data.launch.links?.flickr_images[0]
                      )?.toString()}
                      alt="missions"
                      className="launchImg"
                    />
                      <h3 className="missionDetails">Mission name: <span>{data.launch.mission_name}</span></h3>
                     
                      <h4 className="missionDetails">Launch area: <span>{data.launch.launch_site?.site_name_long}</span></h4>
                      <p className="missionDetails">Description: <span className="launchDetailsInfo">{data.launch.details}</span></p>
                      <a target="blank" href={`${data.launch.links?.wikipedia}`} className="wikipedia">wikipedia</a>
                      <Link to="/launches" ><button className="dataButton">Back</button></Link>
          </Paper>
        </Grid>
      
      </Grid>
    </div>
  
    )
}
