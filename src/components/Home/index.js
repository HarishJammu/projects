import {Link} from "react-router-dom"
import Footer from "../Footer"
import OurServices from "../OurServices"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import "./index.css"
/*    <p className="Carousel-image-para">With Us, Your Goals Are Not Far</p>
      <button className="carousel-more-button-know">
        <Link to="/service" className="button-home-Page-list-styles">Service</Link></button>*/
const Home =()=>(
	<div className="background-color">
		<div className="Home-container">
		<Carousel fade>
      <Carousel.Item >
        <img
          className="d-block  Carousel-Item"
          src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1682255230/discussion_opswoz.avif"
          alt="With Us, Your Goals Are Not Far"/>
        <Carousel.Caption className="Carousel-Caption">
        
          <h3 className="Carousel-image-title">With Us, Your Goals Are Not Far</h3>
          <p className="Carousel-image-para">Group of Experts who are specialized in Business 
			Consultancy and can help you assist the right solutions for your company growt</p>
      <button className="carousel-more-button-know">
        <Link to="/service" className="button-home-Page-list-styles">Service</Link></button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  Carousel-Item"
          src="https://res.cloudinary.com/dsjtmv0m8/image/upload/v1682255230/welcome_qys7t6.avif"
          alt="Second slide"/>
        <Carousel.Caption className="Carousel-Caption">
          <h3 className="Carousel-image-title">You've Come To The Right Place</h3>
          <p className="Carousel-image-para">Professionals And Experienced In IT & Business Consultancy.</p>
          <button className="carousel-more-button-know">
            <Link to="/service" className="button-home-Page-list-styles">Service</Link></button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
		</div>
    
    
    <div className="Our-Services"> 
    <p className="Our-Services-font">Our Servies</p>
        <h3 className="we-offer">Services We Offer</h3>
       <OurServices/>
</div>
     <Footer/>
	</div>
	
)
export default Home;