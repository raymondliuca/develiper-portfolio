import React, {useState} from "react";
import './Contact.css'

export default function Contact(props) {
    return (
        <div id='contact' class="section">
            <h3>CONTACT</h3>
            <p>Phone Number: 226-260-0349<br/>Email: liurui940802@hotmail.com</p>
            <a target="_blank" class="button" href="mailto:liurui940802@hotmail.com">Email Me!</a>
        </div>
    )
}