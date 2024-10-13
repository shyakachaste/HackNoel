import React, { useEffect } from 'react';
import '../styles/Register.css';

const Register = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://lu.ma/2dt6d5hc';
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="register-container">
      <h1>Redirecting to Registration...</h1>
      <p>If you are not redirected automatically, <a href="https://lu.ma/2dt6d5hc">click here</a>.</p>
      <div className="loader"></div>
    </div>
  );
};

export default Register;
