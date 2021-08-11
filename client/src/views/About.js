import React from "react";
import Headshot from '../images/Headshot.JPEG';
import honeymoon from '../images/honeymoon.jpg';
import boysCool from '../images/boys_cool.jpg';
import jude from '../images/jude.jpg';
import silas from '../images/silas.jpg';

export default function About() {
return(
    <>
        <div className="about">
            <div class="row justify-content-center">
                <div class="col-4">
                    <div className="picBox">
                        <img className="headshot" src={Headshot}/>
                    </div>
                </div>
                <div class="col-4">
                    <h1>About Me</h1>
                    <p>My name is Ashley and I am a Software Engineer based in Spokane, WA. I specialize in sarcasm and awkwardness. I am a small human that is the primary caretaker for two other incredibly cool, small humans (Silas (9) and Jude (7)).  I have been happily married for two years to my husband, Dan.  I love all things fitness and health-related, creative, and Gonzaga Basketball.</p>
                </div>
            </div>
        </div>
        <div className="aboutMe2Wrap">
            <div class="row-justify-content-center">
                <div class="col-4">
                    <div className="leftAbout">
                        <h1>Why Work With Me</h1>
                        <p>I have a passion for learning and problem solving. I have a strong knowledge of HMTL, CSS, Javascript, Python, and MERN. I am able to build full-stack web applications, but my passion lies with front-end technologies. Also, you should choose to work with me because I'm just a friendly human that doesn't take life too seriously.</p>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div className="picBox2">
                    <img className="honeymoon" src={honeymoon}/>
                </div>
            </div>
        </div>
        <div className="pics">
            <div class="row justify-content-center"/>
                <div class="col-4">
                    <img src={jude}/>
                </div>
                <div class="col-4">
                    <img src={boysCool}/>
                </div>
                <div class="col-4">
                    <img src={silas}/>
            </div>
        </div>
</>
);

}