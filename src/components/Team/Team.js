import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Button, ButtonGroup } from '@material-ui/core';
import "./Team.css"

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

  const teamInfo = [
      {
          id: 1,
          img: "https://avatars2.githubusercontent.com/u/61895571?s=460&u=51c1a5027c2ee815104a12b2aded2bcf51b2c6b7&v=4",
          name: "Anna Conover",
          about: "I'm a full-stack developer living in Long Beach, California. Currently looking for opportunities!",
          portfolio: "https://annaxgrace.github.io/Portfolio/#/",
          github: "https://github.com/AnnaxGrace"
      },
      {
          id: 2,
          img: "https://avatars1.githubusercontent.com/u/63175319?s=460&u=129b44a249961facc8dfa20c40e79189b97f2b1d&v=4",
          name: "Erik Hirsch",
          about: "Recent graduate of the web development coding boot camp at the UCLA extension. I am full stack developer that is eager to find new opportunities.",
          portfolio: "https://eh4git.github.io/React_Profile/",
          github: "https://github.com/eh4git"
      },
      {
          id: 3,
          img: "https://avatars1.githubusercontent.com/u/63208156?s=460&u=8d8b6187ec717c20f6be22ed2eb5cae6f90a7341&v=4",
          name: "Jace Clements",
          about: "Full-Stack developer looking for a change in life and to make strides in programming.",
          portfolio: "https://tiiedye.github.io/React-Portfolio/",
          github: "https://github.com/tiiedye"
      },
      {
          id: 4,
          img: "https://avatars0.githubusercontent.com/u/60115473?s=460&u=4252882a1a888bde88434210e91cec7732b3e9ba&v=4",
          name: "Vinnie Lopez",
          about: "I'm a full-stack developer in Sylmar, California. Currently looking for opportunities!",
          portfolio: "https://vinnielo.github.io/React-Portfolio/",
          github: "https://github.com/vinnielo"
      },
    //   {
    //     id: 5,
    //     img: "https://avatars0.githubusercontent.com/u/63328108?s=460&u=c51d24d76e55fea2edb633efed6d2306ff96167f&v=4",
    //     name: "Tony Garces",
    //     portfolio: "#",
    //     github: "https://github.com/T-nyG"
    // }
  ]

function Team() {
    const classes = useStyles();

    return(
        <div className="teamContainer">
            <div className={classes.root}>
                <Grid container spacing={3}>
                    {teamInfo.map(team => (
                        <Grid item xs={3} key={team.id}>
                            <Paper className={classes.paper}>
                                <img src={team.img} className="icon" alt="team icon"></img>
                                <br />
                                <h4>{team.name}</h4>

                                <p>{team.about}</p>

                                <ButtonGroup size="small" aria-label="small outlined button group">
                                    <a href={team.portfolio} target="_blank" rel="noopener noreferrer">
                                        <Button>Portfolio</Button>
                                    </a>

                                    <a href={team.github} target="_blank" rel="noopener noreferrer">
                                        <Button>GitHub</Button>
                                    </a>
                                </ButtonGroup>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    )
}

export default Team;