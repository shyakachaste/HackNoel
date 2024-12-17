import React, { useState, useRef } from 'react';
import { FaMapMarkerAlt, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import '../styles/HeroSection.css';
const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="hero-section">
      <h1 className="hero-title">HackNoel</h1>
      <img src="/assets/santa.gif" alt="Santa Claus" className="santa-animation" />
      <div className="hero-info">
        <p className="hero-paragraph">
          <FaMapMarkerAlt className="location-icon" />
          Coming Soon
        </p>
        <p className="hero-paragraph">
          Be part of an unforgettable hackathon experience. Learn, innovate, and connect.
        </p>
      </div>
      <div className="hero-buttons">
      <a href="https://lu.ma/2dt6d5hc" className="hero-btn join-btn" target="_blank" rel="noopener noreferrer">Claim Your Spot</a>
      </div>

      <div className="audio-control" onClick={toggleAudio}>
        {isPlaying ? <FaVolumeMute className="audio-icon" /> : <FaVolumeUp className="audio-icon" />}
        <audio ref={audioRef} src="/assets/song.mp3" />
      </div>
    </section>
  );
};

export default HeroSection;
