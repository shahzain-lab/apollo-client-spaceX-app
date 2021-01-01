import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//
import colony from '../../images/colony.jpg';
import '../wrapper.css'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    grid:{
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
    },
    paper: {
      padding: theme.spacing(2),
      width: "90%",
      background: "#272727",
      color: theme.palette.text.secondary,
    }
  }),
);

export function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item className={classes.grid} xs={12}>
          <Paper className={classes.paper}>
                <h3 className="colo">Colonies</h3>
                <div className="colonies">
                  <img src={colony} alt="" className="colony-img"/>
                  <p>Reasons for colonizing Mars include pure curiosity, the potential for humans to provide more in-depth observational research than unmanned rovers, economic interest in its resources, and the possibility that the settlement of other planets could decrease the likelihood of human extinction.The hypothetical colonization of Mars has received interest from public space agencies and private corporations, and has received extensive treatment in science fiction and art.
                    <br /> <a href="https://en.wikipedia.org/wiki/Colonization_of_Mars" target="blank"><button >
                     wikipedia
                   </button></a>
                  </p>
                  
                </div>
           
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
