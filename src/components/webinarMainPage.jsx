import React, { Component } from 'react'
import Header from './header'
import './src/css/main.css'
import OnlineEdu from './src/img/edu1.png'
import Webinar from './src/img/webinar3.jpeg'
import { Link } from 'react-router-dom'
import Footer from './footer'

export default class Main extends Component{
    scrollToup = () => {
        const height = window.innerHeight
        const push = (0)*height
        window.scroll({top: push, behavior: 'smooth'})
    }
    render() {
        return(
            <div className="main_outercontainer">
                <Header />
                <div className="main_innerContainer">
                    <div className="descriptionBox">
                        <div className="innerBox">
                            <h1> Free Webinar on Career/Skills development by TechTable </h1>
                            <p>Get yourself upskilled during Lockdown with us</p>

                        </div>  
                    </div>
                    <div className="imageBox">
                            <img src={OnlineEdu} alt="onlineEdu" />
                    </div>
                </div>

                <div className="upcomingWebinarDiv">
                    <h1>
                        UpComing Webinar
                    </h1>

                    <div className="webinarLinkDiv">
                        <div className="cardDiv">
                        <Link  to="/ongoingwebinar">   
                            <img src={Webinar} onClick={this.scrollToup} alt="Webinar" />
                        </Link>
                        <div className="registerDiv">
                        <Link  to="/ongoingwebinar"> <button onClick={this.scrollToup}>Register</button></Link>
                        </div>
                        </div>

                        <div className="cardDiv">
                        <Link  to="/ongoingwebinar">   
                            <img src={Webinar} onClick={this.scrollToup} alt="Webinar" />
                        </Link>
                        <div className="registerDiv">
                        <Link  to="/ongoingwebinar"> <button onClick={this.scrollToup}>Register</button></Link>
                        </div>
                        </div>

                        

                    </div>
                </div>
                <div className="pastWebinarDiv">
                    <h1>
                       Past Webinar
                    </h1>

                    <div className="webinarLinkDiv">
                    <div className="cardDiv">
                        <Link>   
                            <img src={Webinar} alt="Webinar" />
                        </Link>
                    </div>
                    <div className="cardDiv">
                        <Link>   
                            <img src={Webinar} alt="Webinar" />
                        </Link>
                    </div>
                    <div className="cardDiv">
                        <Link>   
                            <img src={Webinar} alt="Webinar" />
                        </Link>
                    </div>
                    <div className="cardDiv">
                        <Link>   
                            <img src={Webinar} alt="Webinar" />
                        </Link>
                    </div>
                    </div>
                </div>
                <Footer />

            </div>
        )
    }
}