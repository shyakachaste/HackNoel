import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutPage from './components/AboutPage';
import Schedule from './components/Schedule';
import Partners from './components/Partners';
import Footer from './components/Footer';
import FAQPage from './components/FAQPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutPage />
      <Schedule />
      <FAQPage />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
