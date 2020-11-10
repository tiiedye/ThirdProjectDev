import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import "./About.css"

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function About() {
    const classes = useStyles();

    return(
        <div className="teamContainer">
            <div className={classes.root}>
                <Grid container spacing={3}>
                    
                </Grid>
            </div>
        </div>
    )
}

export default About;