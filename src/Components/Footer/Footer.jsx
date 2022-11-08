import React from 'react'
import './Footer.css'
import logo from '../../Images/footer-logo.png'
import location from '../../Images/location-icon.png'
import call from '../../Images/call-icon.png'
import instagram from '../../Images/instagram.png'
import facebook from '../../Images/facebook.png'
import youtube from '../../Images/youtube.png'

function Footer() {
    return (
        <div className='footer'>
            <img src={logo} alt="" />
            <div className="footer-content">
                <div className="aboutYouthopia">
                    <h1>About Youthopia</h1>
                    <p>
                        Surrender your typical, boring college life. Mark the dates because Youthopia'22 is making a comeback at DIT University. An annual techno-cultural event binds tech geeks and cultural artists in circumstances where talents will be uncovered, revealing entirely different euphoric.
                    </p>
                </div>
                <div className="footerEvent">
                    <h1>Events</h1>
                    <p>Technical</p>
                    <p>Cultural</p>
                    <p>Informal</p>
                    <p>Literary</p>
                    <p>Fine Arts</p>
                </div>
                <div className="contactUs">
                    <h1>Contact</h1>
                    <p><img className="location-logo" src={location} alt=""/>Mussoorie - Diversion Road, Village Makkawala, Dehradun, Uttarakhand -248009,India</p>
                    <p className='phno'><img className="call-logo" src={call} alt=""/>1800 121 041 000</p>
                </div>
                <div className="socials">
                    <h1>Socail Media</h1>
                    <div className="icons">
                        <img src={instagram} alt="" />
                        <img src={facebook} alt="" />
                        <img src={youtube} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
