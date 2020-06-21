import React, { Component } from "react"
import './src/css/footer.css'
import TTLogo from './src/img/whiteLogo.png'
// import TTText from './src/img/tttext.png'
import InstaIcon from './src/img/instagram.svg'
import FbIcon from './src/img/facebook.svg'
import WhatsappIcon from './src/img/whatsapp.svg'
import LinkedinIcon from './src/img/linkedin.svg'
import HeartIcon from './src/img/heart.svg'
export default class Footer extends Component{
    render() {
        return(
            <>
            <div className="outerContainerFooter">
                <div className="innerContainerFooter">
                <a className="logolink" href="https://techtable.co.in/"><img className="ttLogo" src={TTLogo} alt="TTLogo" /></a>
                {/* <a className="logolink" href="https://techtable.co.in/"><img className="ttLogo" src={TTText} alt="TTText" /></a> */}
                    <div className="socialDiv"> 
                        <div><a className="linkdiv" href="https://www.facebook.com/techtable.co.in"><img src={FbIcon} alt="FbIcon" className="iconDiv" /></a></div>
                        <div><a className="linkdiv" href="https://www.instagram.com/official_techtable/"><img src={InstaIcon} alt="InstaIcon" className="iconDiv"  /></a></div>
                        <div><a className="linkdiv" href="https://www.linkedin.com/company/tech-table/"><img src={LinkedinIcon} alt="LinkedinIcon" className="iconDiv"  /></a></div>
                    </div>
                    <div className="whatsAppDiv">
                        <p>Join Us :</p>
                    <a className="whatsapplinkdiv" href="https://chat.whatsapp.com/GOBMBX1P8MhL6LvzvjNwOB"><img src={WhatsappIcon} alt="Whatsapp" className="iconDiv"  /></a>
                    </div>
                </div>
                
            </div>
            <div className="copyRight">
            {/* Copyright<img className="cletter" src={LetterC} alt="LetterC"/>2020-21 TechTable, */}
             Made with <img className="heart" src={HeartIcon} alt="HeartIcon" /> by Developer Team
            </div>
            </>
        )
    }
}