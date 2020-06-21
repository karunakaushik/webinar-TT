import React, { Component } from "react"
import Logo from './src/img/logo.svg'
import './src/css/header.css'

export default class Header extends Component{
    render() {
        return (
            <div className="outerBox">
                <div className="logoDiv">
                    <a href="https://techtable.co.in/"><img src={Logo} alt="LOGO" /></a>                
                </div>
                <div className="signinDiv">
                     Sign in
                </div>                    
            </div>
        )
    }
}