import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header,{HeaderPhone} from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Timeline from "./components/Timeline";
import Work from "./components/Work";
import "./styles/app.scss"

function App() {

  const [menuOpen, setMenuOpen] = useState(false)
  
  
  
  return <>
  
  <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
  <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
  <Home/>
  <Work/>
  <Timeline/>
  <Services/>
  <Testimonial/>
  <Contact/>
  <Footer/>
  <Toaster/>
  </>
}

export default App;
