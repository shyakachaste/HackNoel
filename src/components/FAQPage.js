import React from 'react';
import '../styles/FAQPage.css';

const FAQPage = () => {
  const faqs = [
    {
      question: 'What kind of prizes can we win?',
      answer: 'We have some amazing prizes lined up! The exact details will be announced shortly before the hackathon begins.',
    },
    {
      question: 'Who can join HackNoel?',
      answer: 'HackNoel is open to all high school students interested in technology, coding, and solving real-world problems.',
    },
    {
      question: 'Do I need to be an expert to participate?',
      answer: 'Not at all! HackNoel is for everyone, whether you’re a beginner or an experienced programmer. Just bring your enthusiasm!',
    },
    {
      question: 'What should I bring to the hackathon?',
      answer: 'Make sure to bring a positive attitude! We will provide the computers, chargers, food, and drinks.',
    },
    {
      question: 'Is there a registration fee?',
      answer: 'No, HackNoel is completely free for all participants! Just register online to secure your spot.',
    },
  ];

  return (
    <section className="faq-section">
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
