import React from "react";
import './work.css'
import qentelliLogo from "../../assets/qentelliLogo.jpeg"
// import AccentureLogo from "../../assets/accenture_logo.png"
import AccentureLogo from "../../assets/accenture_logo.jpeg"
import PramatiLogo from "../../assets/pramati_technologies_logo.jpeg"
// import { Link } from 'react-scroll';

const Work = () => {
    return (
        <section id="work">
            <h1 className="workTitle">WORK</h1>
            <p className="workDescription">Client projects and other profesional work.</p>
            <div className="companySections">
                <div className="companySection">
                    <img src={qentelliLogo} alt="qentelliLogo" className="companyLogo" />
                    <div className="companySectionText" id="company">
                        <h4>SOFTWARE ENGINEER - PRODUCT ENGINEERING</h4>
                        <span className="companyName" >@ Qentelli Solutions</span>
                        <p id="companyPara">Application showcasing a comprehensive performance analysis tool, PACE, offering load testing to identify performance bottlenecks, real user experience metrics for insights into application functionality, and business flow monitoring for critical page management.</p>
                        <nav id="company">
                            <ul>
                                <li> UI Desgin </li>
                                <li> Vue.js</li>
                                <li> Java Script</li>
                            </ul>
                        </nav>
                      <button className="ViewDetailsBtn">View Details</button>

                    </div>
                </div>
                <div className="companySection">
                    <img src={AccentureLogo} alt="AccentureLogo" className="companyLogo" />
                    <div className="companySectionText" id="company">
                        <h4>APPLICATION DEVELOPMENT ANALYST</h4>
                        <span className="companyName">@ Accenture Solutions Private Limited</span>
                        <p id="companyPara">Application showcasing a comprehensive performance analysis tool, PACE, offering load testing to identify performance bottlenecks, real user experience metrics for insights into application functionality, and business flow monitoring for critical page management.</p>
                        <nav id="company">
                            <ul>
                                <li> UI Desgin</li>
                                <li> React.js</li>
                                <li> Java Script</li>
                            </ul>
                        </nav>
                      <button className="ViewDetailsBtn">View Details</button>
                    </div>
                </div>
                <div className="companySection">
                    <img src={PramatiLogo} alt="PramatiLogo" className="companyLogo" />
                    <div className="companySectionText" id="company">
                        <h4>APPLICATION DEVELOPMENT ANALYST</h4>
                        <span className="companyName">@ Pramati Technologies Private Limited</span>
                        <p id="companyPara">Application showcasing a comprehensive performance analysis tool, PACE, offering load testing to identify performance bottlenecks, real user experience metrics for insights into application functionality, and business flow monitoring for critical page management.</p>
                        <nav id="company">
                            <ul>
                                <li> UI Desgin</li>
                                <li> React.js</li>
                                <li> Java Script</li>
                            </ul>
                        </nav>
                      <button className="ViewDetailsBtn">View Details</button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Work