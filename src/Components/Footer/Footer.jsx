import React from "react";
import './Footer.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer(props) {
    return (
        <div>
            
            <div class="social-icons">
                <a href="https://github.com/raymondliuca" target="_blank"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/rui-liu-585241127/" target="_blank"><FaLinkedin/></a>
            </div>
            <div id="copyright">Rui Liu © 2022</div>
        </div>
    )
}