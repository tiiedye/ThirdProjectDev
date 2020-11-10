import React from "react";
import "./Projects.css";
import {Button, ButtonGroup} from "@material-ui/core"

const projectMap = [
    {
        id: 1,
        name: "Once Upon an Adventure",
        img: require("../../assets/adventure-home.png"),
        description: "Once Upon an Adventure is an interactive learning experience. Based on both RPG's and Choose Your Own Adventure games, Once Upon an Adventure offers a variety of learning games that any child will enjoy.",
        deployed: "https://onceuponanadventure.herokuapp.com/",
        repo: "https://github.com/annaxgrace/once-upon-an-adventure",
        construction: false,
    },
    {
        id: 2,
        name: "Along With Me",
        img: require("../../assets/alongwithme.png"),
        description: "This audiobook companion app takes the text of your audiobook and checks for specific words for background noise. Really transport yourself! When our application registers the word 'fire' hear a crackling fireplace. Set the specific sounds you want to hear and the volume in the settings.",
        deployed: "https://tiiedye.github.io/ThirdProjectDev/UnderConstruction",
        repo: "https://github.com/eh4git/Along-With-Me",
        construction: true
    }
]

function Projects() {
    return(
        <div className="projectsDiv">
            <h1>PROJECTS</h1>

            {projectMap.map(item => (
                <div className="mappedItems" key={item.id}>
                    <h3>{item.name}</h3>
                    <p>
                        <img src={item.img} alt={item.name} className="projectImg" />
                        <br />
                        {item.description}
                    </p>

                    <ButtonGroup size="small" aria-label="small outlined button group">
                        <a href={item.deployed} target="_blank" rel="noopener noreferrer">
                            <Button>Deployed</Button>
                        </a>

                        <a href={item.repo} target="_blank" rel="noopener noreferrer">
                            <Button>Repository</Button>
                        </a>
                    </ButtonGroup>
                    {item.construction ? (
                        <p>
                            Currently under construction
                        </p>
                    ) : ""}
                    <hr/>
                </div>
            ))}
        </div>
    )
}

export default Projects;