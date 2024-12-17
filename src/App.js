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
import ProjectPage from './components/ProjectPage';
import GalleryPage from './components/GalleryPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutPage />
                <Schedule />
                <FAQPage />
                <Partners />
                <Footer />
              </>
            }
          />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
