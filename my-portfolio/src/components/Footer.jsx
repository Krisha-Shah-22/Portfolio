import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} My Portfolio</p>
      <div className="social-links">
        {/* add usernames */}
        <a href="https://github.com/Krisha-Shah-22" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;