import React from 'react';
import '../styles/Schedule.css';
import { FaClock } from 'react-icons/fa';

const Schedule = () => {
  const events = [
    { time: '7:15 AM - 8:00 AM', description: 'Welcoming' },
    { time: '8:00 AM - 8:45 AM', description: 'Introducing HackNoel' },
    { time: '8:45 AM - 9:15 AM', description: 'Breakfast' },
    { time: '9:15 AM - 00:15 AM', description: 'Working on Projects' },
    { time: '00:15 PM - 1:15 PM', description: 'Lunch' },
    { time: '1:15 PM - 2:00 PM', description: 'Guest of Honor Speech' },
    { time: '2:00 PM - 3:00 PM', description: 'Code Networking' },
    { time: '3:00 PM - 6:00 PM', description: 'Working on Projects Part 2' },
    { time: '6:00 PM - 7:00 PM', description: 'Closing and Rewarding' },
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
