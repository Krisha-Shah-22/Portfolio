import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hello! I'm a passionate B.Tech Computer Engineering student with a strong interest in web development. I love turning ideas into reality using code and have been honing my skills in front-end technologies like **React, JavaScript, HTML, and CSS**.
        </p>
        <p>
          Throughout my studies, I've worked on various projects that have taught me the importance of clean code, user-friendly design, and problem-solving. I'm a quick learner and a team player, always eager to take on new challenges and contribute to innovative projects.
        </p>
        <p>
          When I'm not coding, you can find me exploring new tech trends, contributing to open-source projects, or working on personal side projects to expand my knowledge.
        </p>
      </div>
      <div className="skills-list">
        <h3>My Skills</h3>
        <ul>
          <li>**Languages:** JavaScript, C++, Python</li>
          <li>**Frameworks/Libraries:** React, Node.js, Express</li>
          <li>**Tools:** Git, GitHub, VS Code</li>
          <li>**Databases:** MongoDB, SQL</li>
          <li>**Deployment:** Vercel, Netlify</li>
        </ul>
      </div>
    </section>
  );
};

export default About;