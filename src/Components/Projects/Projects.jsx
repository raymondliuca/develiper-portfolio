import React from "react";
import './Projects.css'
import ProjectCard from "../ProjectCard/ProjectCard";

export default function (props) {
    return (
        <div id='projects' class="section">
            <h3>PROJECTS</h3>

            <div class="project-cards">

            <ProjectCard
                title="Stay-Put"
                description=""
                tech=""
                login=""
                githubLink="https://github.com/Reidwids/Stay-Put"
                link=""
            />
            <ProjectCard
                title="PostBar"
                description=""
                tech=""
                login=""
                githubLink="https://github.com/raymondliuca/PostBar-Backend"
                link="https://postbar.herokuapp.com/"
            />
            <ProjectCard
                title="Knife-Collection"
                description=""
                tech=""
                login=""
                githubLink="https://github.com/raymondliuca/Knife-Collection"
                link="https://raysknifecollection.herokuapp.com/"
            />
            <ProjectCard
                title="BlackJack"
                description=""
                tech=""
                login=""
                githubLink="https://github.com/raymondliuca/BlackJack"
                link="https://raymondliuca.github.io/BlackJack/"
            />
           

            </div>
        </div>
    )
}