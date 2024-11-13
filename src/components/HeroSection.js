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
          December 15th, 2024, Lycee de Kigali
        </p>
        <p className="hero-paragraph">
          Be part of an unforgettable hackathon experience. Learn, innovate, and connect.
        </p>
      </div>
      <div className="hero-buttons">
        <a href="https://github.com/Youth-codecamp/Hack-Noel-Guidelines" className="hero-btn join-btn" target="_blank" rel="noopener noreferrer">Read Guidelines</a>
        <a href="https://www.hacknoel.live/register" className="hero-btn apply-btn" target="_blank" rel="noopener noreferrer">Apply to Join</a>
      </div>
      <div className="audio-control" onClick={toggleAudio}>
        {isPlaying ? <FaVolumeMute className="audio-icon" /> : <FaVolumeUp className="audio-icon" />}
        <audio ref={audioRef} src="/assets/song.mp3" />
      </div>
    </section>
  );
};

export default HeroSection;
