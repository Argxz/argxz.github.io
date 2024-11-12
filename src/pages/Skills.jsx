import React from 'react'
import '../styles/skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faGithub, faCss3Alt, faJs, faNodeJs, faPhp, faPython, faUnity } from '@fortawesome/free-brands-svg-icons';

function Skills() {
    return (
        <div className="skills">
            <h1 className="title">SKILLS</h1>
            <h2 className="subtitle">PROGRAMMING LANGUAGES & TOOLS</h2>
            <div className="icon">
                <ul>
                    <li><FontAwesomeIcon icon={faHtml5} size="2x" /></li>
                    <li><FontAwesomeIcon icon={faGithub} size="2x" /></li>
                    <li><FontAwesomeIcon icon={faCss3Alt} size="2x" /></li>
                    <li><FontAwesomeIcon icon={faJs} size="2x" /></li>
                    <li><FontAwesomeIcon icon={faNodeJs} size="2x" /></li>
                    <li><FontAwesomeIcon icon={faPhp} size="2x" /></li>
                    <li><FontAwesomeIcon icon={faPython} size="2x" /></li>
                    <li><FontAwesomeIcon icon={faUnity} size="2x" /></li>
                </ul>
            </div>
        </div>
    )
}

export default Skills