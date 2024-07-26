import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Assuming you have a Footer component
import LandingPage from './components/LandingPage';
import Services from './components/Services';
import CaseStudiesInsights from "./components/CaseStudies&Insights"
import About from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Dream from "./components/Dream"
import './App.css';

const App = () => {
  return (
    <Router>
        <Navbar />
        <main className="content-container">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/casestudiesdetails" element={<CaseStudiesInsights />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path='/casestudies' element = {<Dream/>}/>
          </Routes>
        </main>
        <Footer />
    </Router>
  );
};

export default App;
