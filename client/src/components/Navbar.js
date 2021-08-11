import React from "react";
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
    return(

        <div className="header">
                <h1><Link to="/">Ashley Castillo</Link></h1>
                <div className="navbar">
                    <ul>
                        <li className="navbar__list"><NavLink to="/about">About</NavLink></li>
                        <li className="navbar__list"><NavLink to= "/resume">Resume</NavLink></li>
                        <li className="navbar__list"><NavLink to="/projects">Projects</NavLink></li>
                        <li className="navbar__list"><NavLink to="/skills">Skills</NavLink></li>
                        <li className="navbar__list"><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
    );
}