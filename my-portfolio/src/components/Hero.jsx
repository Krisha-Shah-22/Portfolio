import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm [KRISHA SHAH]</h1>
        <p>A B.Tech Computer Engineering student passionate about building things for the web.</p>
        <a href="#projects" className="cta-button">View My Work</a>
      </div>
      <div className="hero-image">
        {/* You can add your professional photo here */}
        <img src="/path/to/your-photo.jpg" alt="Your Photo" />
      </div>
    </section>
  );
};

export default Hero;