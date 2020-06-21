import React, { Component } from "react"
import Header from "./header"
import './src/css/webinar.css'
import WebinarPoster from './src/img/webinar3.jpeg'
import Bullet from './src/img/smile.svg'
import Footer from "./footer"

export default class Webinar extends Component{

    constructor(props){
        super(props)
        this.state={
            askanyquries: '',
            phoneno:''
        }
        this.handleInputChange = this.handleInputChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 

    }

    handleInputChange(event) {        
        const target = event.target;        
        const value = target.type === 'checkbox' ? target.checked : target.value;        
        const name = target.name;            
        this.setState({          
            [name]: value        
        });    
    }
    handleSubmit(event) {        
        console.log('Current State is: ' + JSON.stringify(this.state));        
        event.preventDefault(); 

    }
    render() {
           var heading = "This is a webinar, specifically for developers who want to get started with React JS. Through this webinar you will learn about:"
           const subtopic ={
               subtopic1:"NPM & Node JS",
               subtopic2:" Basics of React & Terminologies",
               subtopic3:"How to Create a React App",
               subtopic4:" Set up your VS Code for React JS",
               subtopic5:" Components in React",
               subtopic6:" States & Props",
               subtopic7:"Event Handling",
           }
           var duration = "2 hours"
           var dateandtime = " "

        return (
            <div className="outercontainer">
                <Header />
                <div className="imageofWebinarDiv">
                    <div className="posterDiv">
                        <img src={WebinarPoster} alt="WebinarPoster" />
                    </div>
                </div>
            
                <div className="webinarDetails">
                    <div className="innerdetailsDiv">
                        <h1>
                             About the webinar
                        </h1>
                        <p>
                            {heading}
                        </p>
                        <p> <img src={Bullet} alt="Bullet" /> &nbsp; &nbsp; {subtopic.subtopic1}</p>
                        <p> <img src={Bullet} alt="Bullet" />  &nbsp; &nbsp; {subtopic.subtopic2}</p>
                        <p> <img src={Bullet} alt="Bullet" />  &nbsp; &nbsp; {subtopic.subtopic3}</p>
                        <p> <img src={Bullet} alt="Bullet" />  &nbsp; &nbsp; {subtopic.subtopic4}</p>
                        <p> <img src={Bullet} alt="Bullet" />  &nbsp; &nbsp; {subtopic.subtopic5}</p>
                        <p> <img src={Bullet} alt="Bullet" />  &nbsp; &nbsp; {subtopic.subtopic6}</p>
                        <p> <img src={Bullet} alt="Bullet" />  &nbsp; &nbsp; {subtopic.subtopic7}</p>
                        <p>This is aimed at very beginners so all you require is a bit of Front End knowledge along with some of ES 7 techniques. </p>
                    </div>


                    <div className="innerdetailsDiv">
                        <h1>
                            Session Information
                        </h1>
                        <p>
                        This session will be conducted via Zoom Meetings and I would request everyone to have Zoom client downloaded and installed before attending.
                        </p>
                        <p style={{fontWeight:"bold"}}> For the Timing </p> 
                            <ul>           
                            <li>  &nbsp; Duration : {duration}    </li>
                            <li> &nbsp; Date & time : {dateandtime}  </li>
                            </ul>                        
                        <p>This is aimed at very beginners so all you require is a bit of Front End knowledge along with some of ES 7 techniques. </p>
                    </div>                 
                </div>

                <div className="queryDiv">
                    <div className="innerqueryDiv">
                    <form className="formContainer" onSubmit = {this.handleSubmit}>
                    <label> Ask Any Quries :</label>
                    <br />
                        <textarea type = "text"
                            className="askAnyThing"
                            id='askanyquries'
                            name = 'askanyquries'
                            placeholder = "Ask Any Quries"
                            value = {this.state.askanyquries}
                            onChange={this.handleInputChange}  
                            
                        />  
                        <br />
                        <input 
                           className="phoneNo"
                           id='phoneno'
                           name='phoneno'
                           placeholder="Your Contact number"
                           value = {this.state.phoneno}
                           type="number"
                           required
                           onChange={this.handleInputChange}
                           />
                           <br />
                     <button className="submitbutton" type="submit">Register</button>
                    </form>
                                      
                </div></div>
                <Footer />
                    
            </div>
        )
    }
}