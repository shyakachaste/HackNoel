import React from 'react';
import '../styles/Schedule.css';
import { FaClock } from 'react-icons/fa';

const Schedule = () => {
  const events = [
    { time: '8:00 AM - 8:30 AM', description: 'Doors Open' },
    { time: '8:30 AM - 9:30 AM', description: 'Opening Remarks & Breakfast' },
    { time: '9:30 AM - 11:00 AM', description: 'Web3 Development Workshop' },
    { time: '11:00 AM - 1:30 AM', description: 'Working on Projects Part 1' },
    { time: '1:30 PM - 2:30 PM', description: 'Lunch Break' },
    { time: '2:30 AM - 3:15 PM', description: 'Special Guest Speech & Sponsor Showcase' },
    { time: '3:15 PM - 4:15 PM', description: 'Working on Projects Part 2 & Code Networking' },
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
