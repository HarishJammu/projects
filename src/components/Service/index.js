import { Navigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../Footer";
import "./index.css";
const Service=()=>{
    const [gotoContact,setGotoContact]=useState(false)

    
    if (gotoContact){
        return <Navigate to="/contact"/>
    }
return(

    <div className="about-container">
    <div className="-us-title-card-service">
   
    <div className="banner-card">
            
           
           { /*<p className="banner-para">Welcome to our consultancy services page! We are a team of experienced
            professionals who provide consulting services for a wide range of industries. Our team includes
             experts in strategy, operations, technology, and marketing, and we work with clients of all sizes, 
             from startups to large corporations.</p>*/}

         </div>
        
    </div>

     <div className="Service-provides">
      <div className="Service-tags">
      {  /*<h>Explored our services</h>*/}
        </div>
        </div>
        <div className="our-services-details">
            <div className="service-card-details">
            <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1683096765/html-css-collage-concept-with-person_dfapw9.jpg" 
            alt="IT-Consultancy" className="services-card-images"/>
            <div className="service-it-consultancy-style-1">
                <div className="service-it-consultancy-style-2">
                <span className="-card-title-service">IT Consultancy</span>
                <span className="service-card-description">Our strategic IT consulting will help you 
                automate and digitalise operations, optimise the software portfolio, and implement the latest 
                technologies. We offer IT consulting services that will help you improve your software architecture, 
                create a tech-driven digital strategy, and improve operations by optimising your software portfolio. </span>
                </div>
            </div>
            </div>
            <div className="service-card-details">
            <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1683095708/representations-user-experience-interface-design_mwhv1g.jpg" 
            alt="IT-Consultancy" className="services-card-images"/>
            <div className="service-it-consultancy-style-1">
                <div className="service-it-consultancy-style-2">
                <span className="-card-title-service">Application Development</span>
                <span className="service-card-description">
            Your business is made smarter with our emerging technology development 
            services. Whatever the latest technology, Asoftsol is here to provide dedicated 
            services in that domain. Our custom application development services include both 
            native and hybrid apps. Use the trending tech for an added advantage over the competitive market. 
            We have expertise in web app development using the latest web technologies.
                    </span>

                </div>
            </div>
            </div>
            
            <div className="service-card-details">
            <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1683262354/map-lying-wooden-table_1_t9okdu.jpg" 
            alt="IT-Consultancy" className="services-card-images"/>
            <div className="service-it-consultancy-style-1">
                <div className="service-it-consultancy-style-2">
                <span className="-card-title-service">Content Management</span>
                <span className="service-card-description">
                Asofsol CCMS is a component content management solution designed to 
                streamline your technical communication process. As an enterprise-class, 
                our solution can be tailored to meet your needs. We offer dedicated 
                and on-premise deployment options to manage content, allowing multiple 
                contributors to create, edit and publish. Also our easy-to-use CMS allows 
                non-technical people also to easily create and manage their own web content.
</span>
                </div>
            </div>
            </div>
    
            <div className="service-card-details">
            <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1683095693/business-startup-strategy-goals-concept_cjehan.jpg" 
            alt="IT-Consultancy" className="services-card-images"/>
            <div className="service-it-consultancy-style-1">
                <div className="service-it-consultancy-style-2">
                <span className="-card-title-service">Business Coaching Services</span>
                <span className="service-card-description">
                Asoftsol helps you transform your business dream into reality. 
                As A Business Development Coach, an experience that develops trust 
                and sustainable team. We enable behaviors that create a collaborative, 
                aligned, and productive environment which in-turn will help the Businesss 
                Leaders to improve their skills and thought processes towards a bright future.
                </span>
                </div>
            </div>
            </div>
          <div className="service-card-details">
            <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1683096991/customer-relationship-management-concept_wupiuo.jpg" 
            alt="IT-Consultancy" className="services-card-images"/>
            <div className="service-it-consultancy-style-1">
                <div className="service-it-consultancy-style-2">
                <span className="-card-title-service">Integration Services</span>
                <span className="service-card-description">
                Our services helps you access a wide range from productivity 
                to marketing to collaboration and beyond. Now you can connect your 
                business applications, such as ERP, CRM, Warehouse Management Systems (WMS), 
                e-Commerce, and legacy systems to the other tools you need to run your business 
                by our integration services.
            </span>
                </div>
            </div>
            </div>
            <div className="service-card-details">
            <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1683095699/finger-pressing-red-icon_vowfum.jpg" 
            alt="IT-Consultancy" className="services-card-images"/>
            <div className="service-it-consultancy-style-1">
                <div className="service-it-consultancy-style-2">
                <span className="-card-title-service">Staff Augmentation</span>
                                <span className="service-card-description">
                                Leverage our IT staff augmentation services to access certified IT 
                                professionals, including skilled software developers, business analysts, 
                                Scrum Masters, and QA specialists. We can help you scale up on demand with 
                                the right pool of talented individuals without stretching your budget.
                    </span>
             
                               </div>
            </div>
            </div>
        </div>
        <div className="-Want-you-choose-service">
            <div className="service-sec-container">
                <h1 className="service-want-you-title">Want To Choose Our Consultancy Services ?</h1>

                <div>
                
                <button className="service-want-crack service-btn" onClick={()=>{setGotoContact(true)}}><span className="service-anchore">Start</span></button>
                    </div>
                
                </div>
            </div>  
        <Footer/>
</div>
)}
export default Service;