import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(false);
// code below is for the dark mode toggle
  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  return (
    <div className="App">
      <header className="App-header">  <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          <span className="slider round"></span>
        </label>
        <label className="switch-label">Dark Mode</label>
        <h1>Robert Blaylock's Portfolio</h1>
      
        <a href="https://github.com/rblaylock-dev" target="_blank"><img src="/Portfolio-New2025/Githublogo.png" alt="GitHub Logo"/></a><a href="https://www.linkedin.com/in/rblaylock286/" target="_blank"><img src="/Portfolio-New2025/linkedinlogo.png" alt="LinkedIn Logo"/></a>
        
      </header>
      <main>
        <section id="about-me">
          <img src="/Portfolio-New2025/RB.jpg" alt="Robert Blaylock" className="profile-pic" />
          <h2>About Me</h2>
          <p>Welcome to my portfolio! I’m a full stack developer with a passion for building clean, efficient, and user-friendly web applications. I specialize in React-based front-end development and enjoy bringing ideas to life through code—from concept to deployment.

          I'm an optimistic, outgoing, and goal-oriented person who thrives in collaborative environments and enjoys tackling challenges head-on. Whether I’m working solo or as part of a team, I’m driven by a love for learning and a desire to create meaningful digital experiences.</p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li><a href="https://github.com/RBlaylock-Dev/BackendFinals.git">To-Do List:</a> A fully functional full-stack application that I built. Skills used: React, MongoDB, Express.js, Bcrypt.js, HTML, CSS, and Axios</li>
            <li><a href="https://github.com/RBlaylock-Dev/BackendFinals.git">Resonsive Web Design Mock-Up</a> Skills used: HTMl, CSS, Responsive Web Design</li>
            <li><a href="https://github.com/RBlaylock-Dev/TheFinals.git">Product Page Mock-Up</a> Skills used: React, MUI, Axios, API, HTML, CSS, JSX</li>
          </ul>
        </section>
        <section id="skills">
          <h2>Skills</h2>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Git</li>
            <li>REST APIs</li>
          </ul>
        </section>
        <section id="resume">
          <h2>Resume</h2>
          <a href="https://drive.google.com/file/d/1-0N3GdT17u01fl0qrOfbbuLvisp7N2u4/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button>Download My Resume</button></a>
        </section>
        <section id="contact">
          <h2>Contact Me</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Send</button>
          </form>
        </section>
      </main>
      <footer>
        <div>&copy; 2025 Robert Blaylock</div>
    </footer>
    </div>
  )
}

export default App
