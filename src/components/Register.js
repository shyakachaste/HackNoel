import React, { useEffect } from 'react';
import '../styles/Register.css';

const Register = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://ed0azuo2uuh.typeform.com/to/Ljkvjssd';
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="register-container">
      <h1>Redirecting to Registration...</h1>
      <p>If you are not redirected automatically, <a href="https://ed0azuo2uuh.typeform.com/to/Ljkvjssd">click here</a>.</p>
      <div className="loader"></div>
    </div>
  );
};

export default Register;
