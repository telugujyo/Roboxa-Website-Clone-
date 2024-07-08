// App.jsx
import React from "react";
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';

import Header from "./Components/Header";
import Footer from './Components/Footer';
import { Route, Routes,useLocation } from "react-router-dom";
import { useEffect,useState } from "react";
import About from "./Components/About";
import HomePage from "./Components/Homepage"; 
import Contact from "./Components/Contact";
import Solutinos1 from "./Components/Solutinos1";
// import Neeraj from "./Components/Neeraj";
import Sap from "./Components/Sap";
// import Try from "./Components/Try.jsx";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
    });
  }, []); 
  //  const location = useLocation();
  // const [navBackground, setNavBackground] = useState("black"); // initialColor should be the default color you want

  // useEffect(() => {
  //   if (location.pathname === "/about" || "/contact") {
  //     setNavBackground("transparent"); // desiredAboutColor should be the color you want on the about page
  //   } else {
  //     setNavBackground("black"); // Revert back to initial color on other pages
  //   }
  // }, [location.pathname]);
  // backgroundColor={navBackground} 
  return (
    <>
    {/* <Try/> */}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/solutions1" element={<Solutinos1/>}/>
        <Route path="/sap" element={<Sap/>}/>


      </Routes>
      <Footer />
      {/* <Neeraj/> */}
    </>
  );
}

export default App;
