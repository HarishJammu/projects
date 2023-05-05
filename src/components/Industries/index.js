import { Navigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../Footer";
import "./index.css";


const IndustriesExpo=()=>{
    const [gotoContact,setGotoContact]=useState(false)
    if (gotoContact){
        return <Navigate to="/contact"/>
    }
    return(
    <div className="about-container">
    <div className="industrie-us-title-card">
        <h1 className="Industries-style">Industries</h1>
    </div>
     <div className="Service-provides">
        <div className="Service-tags">
                <span className="industries-title-service">Industries</span>
                <h1  className="Industries-title-Explore">Industries We Serve</h1>
        </div>
        </div>
        <div className="our-services-details">
            <div className="industries-card-details">
            <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1683263631/doctor-nurses-special-equipment_gud2p5.jpg" 
            alt="IT-Consultancy" className="industries-images"/>
            <div className="industries-it-consultancy-style-1">
                <div className="industries-it-consultancy-style-2">
                <span className="industries-card-title"> Healthcare</span>
                <span className="industries-card-description">
Advance your medical business with Technolute and stand as the best.
 We as the IT consultancy offer medical IT consulting services to help you improve business workflows, cut the costs of advanced techs 
implementation, or launch a profitable medical software product or IT initiative. </span>
                </div>
            </div>
            </div>
            <div className="industries-card-details">
            <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1683096765/html-css-collage-concept-with-person_dfapw9.jpg" 
            alt="IT-Consultancy" className="industries-images"/>
            <div className="industries-it-consultancy-style-1">
                <div className="industries-it-consultancy-style-2">
                <span className="industries-card-title">IT Services</span>
                <span className="industries-card-description">
Our IT Consulting Services help integrate information technology 
into your IT business strategy, allowing you to take full advantage 
of the opportunities it creates, such as moving into a different market, 
capturing market share, or growing revenue. Through strategic IT Consulting, 
we can help develop and execute a clear and 
strategic technology roadmap with priorities that are closely linked to IT goals.</span>
                </div>
            </div>
            </div>
            <div className="industries-card-details">
            <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1683264053/bulb-solar-panel-eolic-fan_1_a0maaa.jpg" 
            alt="IT-Consultancy" className="industries-images"/>
            <div className="industries-it-consultancy-style-1">
                <div className="industries-it-consultancy-style-2">
                <span className="industries-card-title">Energy</span>
                <span className="industries-card-description">
The energy field depends on technology a lot. Inturn, 
IT services can help make this process run more efficiently,
 saving time and money. We provide comprehensive, integrated solutions 
 to all segments of the power, oil & gas and mining sectors. We connect with our clients 
to offer them exceptionally detailed industry knowledge and a global network.</span>
                </div>
            </div>
            </div>
            <div className="industries-card-details">
            <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1683263630/2825786_20546_d8hk4a.jpg" 
            alt="IT-Consultancy" className="industries-images"/>
            <div className="industries-it-consultancy-style-1">
                <div className="industries-it-consultancy-style-2">
                <span className="industries-card-title">Finance & Banking</span>
                <span className="industries-card-description">
With our banking consultancy services, We help finance 
and banks to capitalize on the full potential of technology, 
and become better at change.</span>
                </div>
            </div>
            </div>
            <div className="industries-card-details">
            <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1683263631/environmental-pollution-factory-exterior_mitblb.jpg" 
            alt="IT-Consultancy" className="industries-images"/>
            <div className="industries-it-consultancy-style-1">
                <div className="industries-it-consultancy-style-2">
                <span className="industries-card-title"> Oil & Gas</span>
                <span className="industries-card-description">
                Oil & GasAs the leader in the oil and gas industry, you make decisions 
every day amid deep market uncertainty and relentless pressure to 
improve performance. Now more than ever you need IT services that help 
you chart your path forward. We can help you achieve full potential, build resilience in 
IT aspects—from exploration and production to retail networks and related services. </span>
                </div>
            </div>
            </div>
            <div className="industries-card-details">
            <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1683264568/businessmen-hands-white-table-with-documents-drafts_etmwlm.jpg" 
            alt="IT-Consultancy" className="industries-images"/>
            <div className="industries-it-consultancy-style-1">
                <div className="industries-it-consultancy-style-2">
                <span className="industries-card-title"> Engineering</span>
                                <span className="industries-card-description">
Are you looking to implement your engineering industry with a big innovation.
 Our holistic understanding of the engineering industry
  provides you with the best technologies.</span>
                                </div>
            </div>
            </div>
        </div>
        <div className="industries-Want-you-choose">
            <div className="industries-sec-container">
                <h1 className="industries-want-you-title">Want To Choose Our Consultancy Services ?</h1>
                <button className="industrial-want-crack industrial-btn" onClick={()=>{setGotoContact(true)}} ><span className="industrial-anchore">Start</span></button>
                </div>
            </div>   
        <Footer/>
</div>
)}
export default IndustriesExpo;