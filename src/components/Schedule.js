import React from 'react';
import '../styles/Schedule.css';
import { FaClock } from 'react-icons/fa';

const Schedule = () => {
  const events = [
    { time: '8:45 AM - 9:15 AM', description: 'Doors Open' },
    { time: '9:15 AM - 9:45 AM', description: 'Opening Remarks' },
    { time: '9:45 AM - 11:00 AM', description: 'Workshop: Build a Website' },
    { time: '11:00 AM - 1:00 PM', description: 'Coding Session 1: Start Working on Your Projects' },
    { time: '1:00 PM - 2:00 PM', description: 'Lunch Break' },
    { time: '2:00 PM - 2:30 PM', description: 'Special Guest Speech' },
    { time: '2:30 PM - 4:30 PM', description: 'Coding Session 2: Continue Developing Projects' },
    { time: '4:30 PM - 6:00 PM', description: 'Project Presentations & Q&A' },
    { time: '6:00 PM - 6:30 PM', description: 'Judging, Awarding Ceremony & Closing Remarks' },
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
