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
      answer: 'The theme of HackNoel is "Coding for a Brighter Future." Students will use their coding skills to solve real-world problems in healthcare, education, and community services. The goal is to create web apps, mobile apps, chatbots or solutions involving IoT and AI that can make life better for people in Rwanda.',
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
