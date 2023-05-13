import { Navigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../Footer";
import { GoArrowRight } from "react-icons/go";
import "./index.css";
const About=()=>{
    const [gotoContact,setGotoContact]=useState(false)

    
    if (gotoContact){
        return <Navigate to="/contact"/>
    }
   return(
    <div>
   <div className="about-container">
   {/*<div className="about-us-title-card">
            <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1683534951/20230508120516__fpdl.in__businessman-businesswomen-with-question-mark-light-bulb-his-head-many-questions_603999-186_xgnled.jpg" alt="about-us" className="about-banner-image"/>
         <div className="banner-card">
            <h1 className="banner-heading">About us</h1>
            <p className="banner-para">At [Asoftsol], we understand that every business is unique, 
            and we work closely with our clients to identify their specific needs and challenges. Our 
            team of experienced consultants has a diverse range of skills and expertise, 
            enabling us to provide tailored solutions to a wide range of industries and sectors.</p>
         </div>
   </div> */}
        <div className="about-details-container"> 
        <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1683611783/20230509092429__fpdl.in__about-us-symbol-with-3d-businessman_441797-7412_otqk0v.jpg" 
        alt="about-us" className="about-details-image"/>
        <div className="brief-about-us">
            {/*<p className="second-about-line">About Us</p>*/}
            <h1 className="second-about-title">Expand Your Digital Footprint Across IT Industry</h1>
            <p className="content-creation">   Our technical expert team is a proven example of the professionalism, expertise and technical mastery. 
                            We offer best in the industry hirings and services.
                Asoftsol is a consulting, solutions and services provider company. We specialize in Project/Program Management, 
                IT development/deployment, and providing expert professionals for resource augmentation needs of the clients. So whether you're an
                experienced technology professional who is looking for a new career opportunity, or a business in need of 
                technology consultants, permanent staff or enterprise solutions, Asoftsol will help you meet your individual or business objectives.
                Our technical consultancy and staffing helps the company nurture and grow with all possible 
                technical assistance and staffing needs. We encourage job seekers with our satisfactory staffing services, 
                reverting into best in the market packages and perks. We even offer trainings to our staff for their professional 
                growth making them competent professionals.</p>
                </div>
                </div>
                <div className="brief-content-1">
                <p className="content-creation-1 w-100 p-auto"><GoArrowRight/>  At Asoftsol, we pride ourselves on our commitment 
                to delivering the best services to our clients. We take the time to understand our clients' 
                needs and tailor our services to meet their specific requirements. Our team 
                is highly skilled and knowledgeable, and we are always on the cutting edge of the latest 
                trends and technologies in our industry.</p>
                <p className="content-creation-1 w-100 p-auto"><GoArrowRight/>  We understand that every business is unique, and 
                we work closely with our clients to develop customized solutions that meet their specific 
                needs. Whether you are looking to increase your revenue, improve your operational
                efficiency, or enhance your overall business performance, we have the expertise and 
                experience to help you achieve your goals.</p>

                <p className="content-creation-1 w-100 p-auto"><GoArrowRight/>If you are looking for a reliable and trusted consultancy 
                Contact us today to learn more about our services and how we can help you succeed.</p>
                </div>
                <ul className="responsibility">
                <li className="ul-list-dots">
                    <span className="responsibility-style">Responsibility</span>- We take responsibility of our actions. We are committed to doing the best and are accountable for what we do.</li>
                <li className="ul-list-dots">
                    <span className="responsibility-style">Proactive</span> – We initiate ourselves and bring changes that needed for the betterment.</li>
                <li className="ul-list-dots">
                    <span className="responsibility-style">Teamwork </span>– We work together as a team to achieve the goals smoothly and on the time.</li>
                    <li className="ul-list-dots">
                        <span className="responsibility-style">Innovation</span> – We keep discussing together to innovate the ways to satisfy our clients.</li>
                    <li className="ul-list-dots">
                        <span className="responsibility-style">Economization</span>- We not only help to save money but also we deliver speed.</li>
                    <li className="ul-list-dots">
                        <span className="responsibility-style">Culture</span> - We respect all the moral values of our employees and clients.</li>

                </ul>
        <div className="about-Want-you-choose">
            <div className="about-sec-container">
                <h1 className="about-want-you-title">Want To Choose Our Consultancy Services ?</h1>
                {/*<button  className="about-button" onClick={()=>{setGotoContact(true)}}>Start</button>*/}

                <button className="about-want-crack about-btn" onClick={()=>{setGotoContact(true)}}><span className="about-anchore">Start</span></button>
                </div>
            </div>   
    </div>
    <Footer/>
   </div>
)}
export default About;