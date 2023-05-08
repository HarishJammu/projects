import { Link } from "react-router-dom";


import "./index.css"

const Header=()=>{
   return(
<div id="position">
   <div className="social-meadia">     
   <div className="image-back">
       
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
                        
                        
                     </ul>
                  </div>
</div>
)}
export default Header;