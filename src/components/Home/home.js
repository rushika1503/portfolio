import React from "react";
import './home.css';
import {Link} from 'react-scroll';

const home = () => {
    return (
        <section id="home">
            <div className="homeContent">
                <span className="greetings">Greetings!</span>
                <span className="introText">I'm <span className="introName">Rushika</span></span>
                <p className = "introPara">a seasoned frontend developer with a rich background in crafting web applications using JavaScript and its powerful frameworks, React and Vue. With over four years of professional experience in India, I am currently deepening my knowledge through a master's program, blending practical industry insights with cutting-edge academic perspectives. If you are an employer looking to hire, you can get in touch with me <Link>here</Link></p>
                <Link><button className="hireMeBtn">Hire Me</button></Link>
                </div>
        </section>

    )
}

export default home;