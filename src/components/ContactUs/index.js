import { useRef ,useState} from "react";
import emailjs from "@emailjs/browser"
import { SlLocationPin } from "react-icons/sl";
import { ImMobile } from "react-icons/im";
import { VscMail } from "react-icons/vsc";
import "./index.css"
/*state={name:"",
                email:"",
                message:""}

                changeName=(e)=>{
                    this.setState({name:e.target.value})
                }  
                changeEmail=(e)=>{
                    this.setState({email:e.target.value})
                }
                changeMessage=(e)=>{
                    this.setState({message:e.target.value})
                }  
                
                onSubmitSuccess=(event)=>{
                    event.preventDefault();
                    
                }*/





              
const  ContactUs =()=>{
    const [successMsg,setsuccessMsg]=useState("")
    const [name,setName]=useState()
    const [mail,setMail]=useState()
    const [Message,setMessage]=useState()

     const form = useRef();

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_buehjyl', 'template_j7s28fh', form.current, 'yCbNWrO9l2aCwerJZ')
      .then((result) => {
          console.log(result.text);
          setsuccessMsg("Send succesfully",)
          setMail("")
          setMessage("")
          setName("")
      }, (error) => {
          console.log(error.text);
      });
  };
        
    return(
    <div className="about-container">
     <div className="contact-us-title-card">
        <h4 className="Contact-title">Contact <span className="contact-style">Us</span></h4>
    </div>
    <div className="Contact-us-stylings">
        <div className="Contact-details">
        <SlLocationPin className="contact-location-logo"/>
        <p className="location-title">Our Office Location</p>
        <p className="location-details">3718 Block Drive, Irving, Texas APT 1210</p>
        </div>
        <div className="v1"></div>
        <div className="Contact-details">
            <ImMobile className="contact-location-logo"/>
        <p className="location-title">Get In Touch With Us</p>
        <p className="location-details-number">572-286-9107</p>
        </div>
        <div className="v1"></div>
        <div className="Contact-details">
            <VscMail className="contact-location-logo"/>
        <p className="location-title">Mail With Us</p>
        <p className="-details-mail-location">asoftsol@gmail.com</p>
        </div>
    </div>
    <div className="Have-a-quation">
        <div className="Have-a-quation-2">
        <span className="have-any-quations-contact">Contact Us</span>
        <h1 className="have-any-quations-title">Have Any Questions?</h1>
        <p className="send-your-quaries-feeback">
        Send your Queries and Feedback
        </p>
        <div>

        <form  ref={form} className="form-background" onSubmit={sendEmail}>
            <label className="label-name">Name</label>
            <input placeholder="Enter Your Name" value={name} name="name" type="text" className="input-styles"   />
            <span className="requireed-contant"><i>Enter your first name here</i></span>
            <label className="label-name">Email Address <span className="required">*</span></label>
            <input placeholder="Enter Your Email" value={mail} name="user_email" type="email" className="input-styles"/>
            <span className="requireed-contant"><i>Example: user@website.com</i></span>
            <label className="label-name">Comments / Questions<span className="required"> *</span></label>
            <textarea value={Message}  id="w3review" name="message" rows="6" cols="50" className="textarea-style" />
            <input type="submit" value="Send Message" className="send-button"/>
            <p className="send-message">{successMsg}</p>
        </form> 


      



        
        </div>
        </div>
    </div>

    <div className="ending-style"></div>
    </div>
)}
export default ContactUs;