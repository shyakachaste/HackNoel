import React from 'react';
import '../styles/FAQPage.css';

const FAQPage = () => {
  const faqs = [
    {
      question: 'What kind of prizes can we win?',
      answer: 'We have some amazing prizes lined up! The exact details will be announced shortly before the hackathon begins.',
    },
    {
      question: 'What is the theme of Hack Noel?',
      answer: 'HackNoel happens every year in December, and the theme changes each year. This year, the theme is "Coding for a Brighter Future," where students solve real-world problems using web apps, mobile apps, chatbots, IoT, or AI.',
    },
    {
      question: 'What should I bring to the hackathon?',
      answer: 'Please bring your computers and chargers. We will provide food, drinks, and other essentials.',
    },
    {
      question: 'Is there a registration fee?',
      answer: 'No, HackNoel is completely free for all participants! Just register online to secure your spot.',
    },
    {
      question: 'Is there a parent guide for HackNoel?',
      answer: 'Yes, we have a parent guide to help parents understand the event and support their children during HackNoel.',
    },
    {
      question: 'How can I join HackNoel next year?',
      answer: 'HackNoel is organized every year in December. Stay updated by following our social media pages or checking our website for announcements.',
    },
    {
      question: 'Do I need to come with a team?',
      answer: 'No, you can register as an individual, and we will help you form a team during the hackathon.',
    },
    {
      question: 'What kind of projects can we build?',
      answer: 'You can build web apps, mobile apps, chatbots, or even solutions involving IoT and AI to solve problems in healthcare, education, and community services.',
    },
  ];

  return (
    <section className="faq-section" id="FAQ">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h2 className="faq-question">{faq.question}</h2>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQPage;
