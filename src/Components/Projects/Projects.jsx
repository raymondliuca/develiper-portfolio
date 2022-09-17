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
                description="Stay / Put lets renters and buyers quickly connect with realtors to discuss properties for rent/sale! Create a profile, browse as a user, or become an agent and list properties for other users to see."
                tech="Python, Django, HTML5, CSS3, JavaScript, Bootstrap5, PostgreSQL, AWS S3"
                login=""
                githubLink="https://github.com/Reidwids/Stay-Put"
                link="https://stay-put.herokuapp.com/"
            />
            <ProjectCard
                title="Ray's Portfolio"
                description="This is my portfolio, to introduce myself and show my previous projects. This project is hosted on Heroku."
                tech="React, JavaScript, CSS3, HTML5"
                login=""
                githubLink="https://github.com/raymondliuca/developer-portfolio"
                link="https://raysportfolio.herokuapp.com/"
            />
            <ProjectCard
                title="PostBar"
                description="PostBar is a Reddit-Like app for people to discuss technical problems and free chat. This project is hosted on Heroku."
                tech="React, Node.js, Express, MongoDB, AJAX, JWT authentication, HTML5, CSS3"
                login=""
                githubLink="https://github.com/raymondliuca/PostBar-Backend"
                link=""
            />
            <ProjectCard
                title="Knife-Collection"
                description="Knife-Collection is a web app build by a kitchen knife lover, aim to be a knife-pedia, full CRUD app hosted on Heroku."
                tech="HTML5, CSS3, JavaScript, Express, EJS, MongoDB"
                login=""
                githubLink="https://github.com/raymondliuca/Knife-Collection"
                link="https://raysknifecollection.herokuapp.com/"
            />
            <ProjectCard
                title="BlackJack"
                description="Famous casino game online, try to get bigger than the dealer or go stright forward to 21! But don't forget to avoid busting! This project is hosted by Github."
                tech="JavaScript, HTML5, CSS3"
                login=""
                githubLink="https://github.com/raymondliuca/BlackJack"
                link="https://raymondliuca.github.io/BlackJack/"
            />
           

            </div>
        </div>
    )
}