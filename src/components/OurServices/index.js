import {Link,Navigate} from "react-router-dom"
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import "./index.css"

const  OurServices=()=>{
        const [gotoService,setGoToService]=useState(false)

        if (gotoService){
            return <Navigate to="/service"/>
        }

      return(
        <div className='card-wrap'>
            <div className="Services">
            <div className="cards">
            <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1681291855/card_1_jqugrr.jpg"
            alt="it consultancy" className="cards-image"/>
            <div className="details">
            <h1 className="it-consultany">It Consultancy</h1>
            <p className="know-more"><Link to="/service" className="our-services-home-Page-list-styles">Know More <BsArrowRight/></Link></p>
            </div>
            </div>
            <div className="cards">
            <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1681291855/card_2_derdfe.jpg"
            alt="it consultancy" className="cards-image"/>
            <div className="details">
            <h1 className="it-consultany">Application Development</h1>
            <p className="know-more">
                <Link to="/service" className="our-services-home-Page-list-styles">Know More <BsArrowRight/></Link></p>
            </div>
            </div>
            <div className="cards">
            <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1681291855/card_3_lc3tti.jpg"
            alt="it consultancy" className="cards-image"/>
            <div className="details">
            <h1 className="it-consultany">Staff Augmentation</h1>
            <p className="know-more"> <Link to="/service" className="our-services-home-Page-list-styles">Know More <BsArrowRight/></Link></p>
            </div>
            </div>
            <div className="cards">
            <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1681291855/card_4_bqwbpm.jpg"
            alt="it consultancy" className="cards-image"/>
            <div className="details">
            <h1 className="it-consultany">Enterprise Quality Assurance</h1>
            <p className="know-more"> 
            <Link to="/service" className="our-services-home-Page-list-styles">Know More <BsArrowRight/></Link>
            </p>
            </div>
            </div>
        </div>
        <div className="know-more-container">
        <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1681288380/Asoftsol_1_biqklx.jpg"
        alt="Know-more" className="Know-more-image"/>
        <div className="know-more-button">
      
      
        <button className="button-know-more" onClick={()=>{setGoToService(true)}}>Know More</button>
        </div>
        </div>
        
        </div>

   
)}
export default OurServices;