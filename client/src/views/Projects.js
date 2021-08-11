import React from "react";
import ctgr from '../images/ctgr.png';



export default function Projects() {

    return(
            <div className="container">
                <h2>Projects</h2>
                <div class="row">
                    <figure id="fig1">
                        <div class="col">
                        Confederated Tribes of Grand Ronde 
                        
                        <a href="https://www.loom.com/share/f732caee3880443f936dfb3a86cd2d5a" target="_blank"><img src={ctgr}/></a>
                        </div>
                    </figure>

                    <figure id="fig2">
                    <div class="col">
                    Project 2 
                    <h2>Work in Progress --COMING SOON!</h2>
                    </div>
                    </figure>
                </div>
                </div>
    );
}