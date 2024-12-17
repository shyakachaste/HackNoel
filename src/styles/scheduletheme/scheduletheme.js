import React from 'react';
import '../styles/Schedule.css';
import { FaClock } from 'react-icons/fa';

const Schedule = () => {
  const events = [
    { time: '8:00 AM - 8:30 AM', description: 'Doors Open' },
    { time: '8:30 AM - 9:0 AM', description: 'Opening Remarks' },
    { time: '9:00 AM - 9:30 AM', description: 'Breakfast' },
    { time: '9:30 AM - 11:00 AM', description: 'Workshop' },
    { time: '11:00 AM - 1:30 AM', description: 'Hacking Part 1' },
    { time: '1:30 PM - 2:30 PM', description: 'Lunch Break' },
    { time: '2:30 AM - 2:50 PM', description: 'Special Guest Speech' },
    { time: '2:50 AM - 3:15 PM', description: 'Sponsor Showcase' },
    { time: '3:15 PM - 3:55 PM', description: 'Hacking Part 2' },
    { time: '3:55 PM - 4:15 PM', description: 'Code Networking' },
    { time: '4:15 PM - 6:00 PM', description: 'Project Presentations & Judging' },
    { time: '6:00 PM - 6:30 PM', description: 'Awarding Ceremony & Closing Remarks' },
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