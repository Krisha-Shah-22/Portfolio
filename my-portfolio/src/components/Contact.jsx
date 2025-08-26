import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <h2>Get In Touch</h2>
      <p>
        I'm currently seeking new opportunities and projects. Feel free to reach out, whether you have a question or just want to connect!
      </p>
      <div className="contact-links">
        <a href="mailto:your-email@example.com" className="contact-link email-link">
          Email Me
        </a>
        <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" className="contact-link linkedin-link">
          LinkedIn
        </a>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="contact-link github-link">
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;