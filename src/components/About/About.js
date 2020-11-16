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

    return (
        <div className="teamContainer">
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Paper className={classes.paper}>
                      
                        <h2>Third Project Development</h2>

                        <p>We are a team of five full-stack web-developers who are here to create your project! We create websites and apps - and we can also consult on code you're writing or trying to learn. Our services also include debugging and optimizing current code - make sure it's a11y friendly!</p>

    
                        <h3>Competencies</h3>
                        <p>
                        Technologies are: CSS, HTML, JavaScript, React, DOM, AJAX, HTTP, MYSQL, MongoDB, Bootstrap, jQuery, Git, Materialize, WordPress, Firebase
                        </p>
            
                        <h3>Hire Us</h3>
                        <p>
                        Please feel free to reach out to us for help with any of your projects!
                        <br />
                        <a href={"https://www.fiverr.com/thirdprojectdev?up_rollout=true"}> Third Project Development on Fiver</a>
                        </p>
                    </Paper>
                </Grid>
            </div>
        </div>
    )
}

export default About;