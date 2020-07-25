import React from "react";
import "./Projects.css";
import {Button, ButtonGroup} from "@material-ui/core"

const projectMap = [
    {
        id: 1,
        name: "Once Upon an Adventure",
        description: "Once Upon an Adventure is an interactive learning experience. Based on both RPG's and Choose Your Own Adventure games, Once Upon an Adventure offers a variety of learning games that any child will enjoy.",
        deployed: "https://onceuponanadventure.herokuapp.com/",
        repo: "https://github.com/annaxgrace/once-upon-an-adventure"
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
                </div>
            ))}
        </div>
    )
}

export default Projects;