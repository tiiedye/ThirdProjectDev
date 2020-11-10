import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
import { Button, ButtonGroup } from '@material-ui/core'

function Banner() {
    return (
        <div className="mainBanner">
            <div className="banner">
                <img src={require("../../assets/tpd-banner.png")} alt="Third Project Development" className="bannerImg"></img>
            </div>

                <ButtonGroup variant="text" color="secondary" aria-label="text secondary button group">
                    <Link to="/projects">
                        <Button>Projects</Button>
                    </Link>

                    <Link to="/ThirdProjectDev">
                        <Button>About Us</Button>
                    </Link>

                    <Link to="/team">
                        <Button>Meet the Team</Button>
                    </Link>
                </ButtonGroup>
        </div>
    )
}

export default Banner;