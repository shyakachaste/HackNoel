import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutPage from './components/AboutPage';
import Schedule from './components/Schedule';
import Partners from './components/Partners';
import Footer from './components/Footer';
import FAQPage from './components/FAQPage';
import TeamSection from './components/TeamSection';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <HeroSection />
              <AboutPage />
              <Schedule />
              <TeamSection />
              <FAQPage />
              <Partners />
              <Footer />
            </>
          } />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
