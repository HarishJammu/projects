import { Link } from "react-router-dom";
import { FaFacebookF,FaLinkedinIn,FaSkype,} from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import "./index.css"
// 
const Header=()=>{
   
   
   return(
<>
   <div className="social-meadia">     
   <div className="image-back">
      <div className="logo-ul-style">
            <span>
               <TfiEmail className="Mail-style"/> <span className="company-website">WWW.AsoftSol.com</span></span>
      </div>  
      
            </div>
                  <div className="tags-styles">
                     <div className="ul-style-mail">
                     <FaFacebookF className="FLS-style"/>
                     <FaLinkedinIn className="FLS-style"/>
                     <FaSkype className="FLS-style"/>
                     </div>
                  </div>
                  </div>
                  
                  <div className="Header-part">
                     <div className="logo-setcion">
                     <img src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1681276724/AsoftsoleLogo_axclwj.png" 
                     alt="Asoftsol" className="company-logo"/>
                     </div>
                     <ul className="ul-style-List-items">
                     <li className="list-types">
                        <Link to="/" className="Page-list-styles">Home</Link>
                        </li>
                     <li className="list-types">
                        <Link to="/about" className="Page-list-styles">About Us</Link>
                        </li>
                     <li className="list-types">
                        <Link to="/service" className="Page-list-styles">Services</Link>
                        </li>
                     <li className="list-types">
                        <Link to="/industries" className="Page-list-styles">Industries</Link>
                        </li>
                     <li className="list-types">
                        <Link to="/contact"  className="Page-list-styles">Contact Us</Link>
                        </li>
                        <div class="buttons">
                           <button class="btn"><span></span><Link to="/service" className="button-link-style"><p data-start="good luck!" data-text="Get Start!" data-title="Get Start!"></p></Link></button>
                        </div>
                     {/*<button className="header-button" ><Link to="/service" className="button-link-style">Get Start</Link></button>*/}
                     </ul>
                  </div>
</>
)}
export default Header;