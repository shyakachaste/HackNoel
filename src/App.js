import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutPage from './components/AboutPage';
import PrizesPage from './components/PrizesPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutPage />
      <PrizesPage />
    </div>
  );
}

export default App;
