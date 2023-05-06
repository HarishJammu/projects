//import {Link,} from "react-router-dom"
//import { useNavigate } from "react-router-dom";
//import { BsArrowRight } from "react-icons/bs";
//import { useState } from "react";
import "./index.css"

const  OurServices=()=>{
    //const navigate=useNavigate()


      return(
        <div className='card-wrap'>
            <div className="Services">
            <div className="cards">
            <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1682478765/pexels-pavel-danilyuk-8152734_k1nfhm.jpg"
            alt="it consultancy" className="cards-image"/>
            <div className="details">
            <h1 className="it-consultany">It Consultancy</h1>
            {/*<p className="know-more"><Link to="/service" className="our-services-home-Page-list-styles">Know More <BsArrowRight/></Link></p>*/}
            </div>
            </div>
            <div className="cards">
            <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1682478820/pexels-mizuno-k-12899138_kk9ftf.jpg"
            alt="it consultancy" className="cards-image"/>
            <div className="details">
            <h1 className="it-consultany">Application Development</h1>
           {/*<p className="know-more"><Link to="/service" className="our-services-home-Page-list-styles">Know More <BsArrowRight/></Link></p>*/}
            </div>
            </div>
            <div className="cards">
            <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1682478809/pexels-fauxels-3184361_clmqsk.jpg"
            alt="it consultancy" className="cards-image"/>
            <div className="details">
            <h1 className="it-consultany">Staff Augmentation</h1>
            {/*<p className="know-more"><Link to="/service" className="our-services-home-Page-list-styles">Know More <BsArrowRight/></Link></p>*/}
            </div>
            </div>
            <div className="cards">
            <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1681291855/card_4_bqwbpm.jpg"
            alt="it consultancy" className="cards-image"/>
            <div className="details">
            <h1 className="it-consultany">Enterprise Quality Assurance</h1>
            <p className="know-more"> 
            {/*<p className="know-more"><Link to="/service" className="our-services-home-Page-list-styles">Know More <BsArrowRight/></Link></p>*/}
            </p>
            </div>
            </div>
        </div>
        {/*<div className="know-more-container">
        <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1682688468/pexels-fauxels-3184632_vqypz5.jpg"
        alt="Know-more" className="Know-more-image"/>
        <div className="know-more-button wrap">
                        <button className="btn-our-service-button" onClick={()=>navigate("/service")}>Know More</button>
                          
   <button className="button-know-more" onClick={()=>{setGoToService(true)}} >Know More</button>
        </div>
        </div>*/}
             
        </div>
)}
export default OurServices;