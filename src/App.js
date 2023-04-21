import {Route,BrowserRouter,Routes} from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import IndustriesExpo from "./components/Industries"
import ContactUs from './components/ContactUs'
import './App.css';

const App =()=>(
  <BrowserRouter>
    <Header/>
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/industries" element={<IndustriesExpo/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
    </Routes>
  </BrowserRouter>
)
export default App;
