import { Navigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../Footer"
import "./index.css";
const About=()=>{
    const [gotoContact,setGotoContact]=useState(false)

    
    if (gotoContact){
        return <Navigate to="/contact"/>
    }
   return(
    <div>
   <div className="about-container">
        <div className="about-us-title-card">
            <span className="about-title">About <span className="about-us-style">Us</span></span>
            <span><span className="about-sub-title">Home</span><span className="divison">/</span><span className="about-sub-title-span">about us</span></span>
        </div> 
        <div className="about-details"> 
        <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1683265771/aerial-view-business-team_1_fbzcvh.jpg" 
        alt="about-us" className="about-details-image"/>
        <div className="brief-about-us">
            <p className="second-about-line">About Us</p>
            <h1 className="second-about-title">Expand Your Digital Footprint Across IT Industry</h1>
            <p className="content-creation">With an expertise team,  we help our customers accelerate digital 
                transformation across the world. We work with you to understand 
                your digital customer journey and build innovative custom 
                solutions that match your unique business needs. As one of 
                the top app development companies, we help customers across 
                industries and geographies to extend their business and differentiate 
                their brand with human-centric digital experiences.</p>
        </div>
        </div>
        <div className="about-Want-you-choose">
            <div className="about-sec-container">
                <h1 className="about-want-you-title">Want To Choose Our Consultancy Services ?</h1>
                {/*<button  className="about-button" onClick={()=>{setGotoContact(true)}}>Start</button>*/}
                <button className="about-want-crack about-btn" onClick={()=>{setGotoContact(true)}} ><span className="about-anchore">Start</span></button>
                </div>
            </div>   
    </div>
    <Footer/>
   </div>
)}
export default About;