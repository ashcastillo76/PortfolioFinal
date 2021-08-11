import React from 'react'
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import email from '../images/email.png';
import { BrowserRouter as Router } from 'react-router-dom';

const footer = () => {
    return (
        <div className="footer">
            <Router>
                <div className="footImgContainer">
                    <a href="https://www.facebook.com/ashley.castillo76/"><img src={ facebook }/></a>
                    <a href="https://www.instagram.com/hecallsmesassypants/"><img src={ instagram }/></a>
                    <a href="mailto:ashcastillo76@gmail.com"><img src={ email }/></a>
                </div>
            </Router>
        </div>
    )
}

export default footer
