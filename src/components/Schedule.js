import React from 'react';
import '../styles/Schedule.css';
import { FaClock } from 'react-icons/fa';

const Schedule = () => {
  const events = [
    { time: '8:15 AM - 9:00 AM', description: 'Welcoming' },
    { time: '9:00 AM - 9:45 AM', description: 'Introducing HackNoel' },
    { time: '9:45 AM - 10:15 AM', description: 'Breakfast' },
    { time: '10:15 AM - 1:15 AM', description: 'Working on Projects' },
    { time: '1:15 PM - 2:15 PM', description: 'Lunch' },
    { time: '2:15 PM - 3:00 PM', description: 'Guest of Honor Speech' },
    { time: '3:00 PM - 4:00 PM', description: 'Pizza & Code Networking' },
    { time: '4:00 PM - 7:00 PM', description: 'Working on Projects Part 2' },
    { time: '7:00 PM - 8:00 PM', description: 'Closing and Rewarding' },
  ];

  return (
    <section className="schedule-section">
      <h1 className="schedule-title">Event Schedule</h1>
      <div className="schedule-container">
        {events.map((event, index) => (
          <div className="schedule-item" key={index}>
            <FaClock className="schedule-icon" />
            <div className="schedule-details">
              <p className="schedule-time">{event.time}</p>
              <p className="schedule-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
