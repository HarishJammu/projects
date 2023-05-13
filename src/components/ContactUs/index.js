import { useRef ,useState} from "react";
import emailjs from "@emailjs/browser"
import { SlLocationPin } from "react-icons/sl";
import { ImMobile } from "react-icons/im";
import { VscMail } from "react-icons/vsc";
import "./index.css"

              
const  ContactUs =()=>{
    const [successMsg,setsuccessMsg]=useState(false)
    const [name,setName]=useState("")
    const [mail,setMail]=useState("")
    const [Message,setMessage]=useState("")
    


    const handleButtonClick = () => {
        setsuccessMsg(true);

      setTimeout(() => {
        setsuccessMsg(false);
        }, 3000);
    }

     const form = useRef();

   const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_buehjyl', 'template_j7s28fh', form.current, 'yCbNWrO9l2aCwerJZ')
      .then((result) => {
          console.log(result.text);
          
          setMail("")
          setMessage("")
          setName("")
      }, (error) => {
          console.log(error.text);
      });
  };
        
    return(
    <div className="contact-container">
    <div className="contact-us-title-card">
            {/*<img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1683533738/20230508114523__fpdl.in__flat-design-illustration-customer-support_23-2148887720_bdu491.jpg" 
            alt="about-us" 
            className="about-banner-image"/>
         <div className="banner-card">
            <h1 className="banner-heading">Contact Us</h1>
            <p className="banner-para">We are here to help and answer any question you might have. We look forward to hearing from you</p>
            <p className="banner-para">Looking to discuss a potential business services, kick off a new project, or to learn more about us, 
            we’re here to help.</p>
         </div>*/}
        </div> 
    <div className="Contact-us-stylings">
        <div className="Contact-details">
        <SlLocationPin className="contact-location-logo"/>
        <p className="location-title">Our Office Location</p>
        <p className="location-details">2012 palmera ridge blvd, Leander, Texas - 78641</p>
        </div>
        <div className="v1"></div>
        <div className="Contact-details">
            <ImMobile className="contact-location-logo"/>
        <p className="location-title">Give Us A Call</p>
        <p ><p><a className="location-details-number" href="tel:572-286-9107">572-286-9107</a></p></p>
        </div>
        <div className="v1"></div>
        <div className="Contact-details">
            <VscMail className="contact-location-logo"/>
        <p className="location-title">Mail With Us</p>
        <p className="-details-mail-location"><a href="mailto:email@example.com" className="-details-mail-location">info@asoftsol.com</a></p>
        
        </div>
    </div>
    <div className="Have-a-quation">
        <div className="Have-a-quation-2">
        <h1 className="have-any-quations-title">Have Any Questions?</h1>
        <p className="send-your-quaries-feeback">
        Send your Queries and Feedback
        </p>
        <div>
        <form  ref={form} className="form-background" onSubmit={sendEmail}>
            <label className="label-name">Name</label>
            <input placeholder="Enter Your Name" value={name} name="name" type="text" className="input-styles"
            onChange={event => setName(event.target.value,event)} />
            <span className="requireed-contant"><i>Enter your first name here</i></span>
            <label className="label-name">Email Address <span className="required">*</span></label>
            <input placeholder="Enter Your Email" value={mail} name="user_email" type="email" className="input-styles"
            onChange={event => setMail(event.target.value)}/>
            <span className="requireed-contant"><i>Example: user@website.com</i></span>
            <label className="label-name">Comments / Questions<span className="required"> *</span></label>
            <textarea value={Message}  id="w3review" name="message" rows="6" cols="50" className="textarea-style"
            onChange={event => setMessage(event.target.value)}></textarea>
            <button type="submit" value="Send Message" className="send-button" onClick={handleButtonClick}>Send Message</button>
            
                        <p className="send-message">{successMsg ?"Send SuccesFully":""}</p>
        </form> 
        </div>
        </div>
    </div>

    <div className="ending-style"></div>
    </div>
)}
export default ContactUs;