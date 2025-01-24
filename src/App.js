import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Components for each page
const Home = () => (
  <section>
    <h2>Madhu Priya</h2>
    <p>
    Hello! I am a passionate quantum computing and data science enthusiast. Explore my skills, projects, and contact information.    </p>
  </section>
);

const About = () => (
  <section>
    <h2>About Me</h2>
    <p>
    I am deeply passionate about the transformative potential of quantum computing, agentic artificial intelligence (AI), and data science. Quantum computing represents a groundbreaking shift in how we approach computational problems, offering unparalleled opportunities to solve challenges that were previously deemed unsolvable. Its ability to process vast amounts of information simultaneously has the potential to revolutionize fields such as cryptography, optimization, and materials science. I am particularly fascinated by how quantum algorithms, like Grover’s and Shor’s, can redefine the efficiency of computation in industries ranging from finance to healthcare.

Equally, agentic AI, with its focus on creating systems that are autonomous, goal-directed, and capable of self-improvement, inspires my drive to innovate. The potential of agentic AI to bridge the gap between human intelligence and machine cognition paves the way for smarter decision-making systems, personalized experiences, and adaptable problem-solving frameworks. My interest lies in developing robust, ethical AI systems that not only exhibit intelligent behavior but also contribute meaningfully to addressing societal challenges.

Finally, data science is the foundational skill that unites my interests in quantum computing and AI. With its power to extract actionable insights from raw data, it serves as the backbone for designing predictive models, optimizing business processes, and uncovering hidden patterns. I am captivated by how the integration of data science with quantum computing and AI can lead to smarter algorithms and more informed decision-making processes.

    </p>
  </section>
);

const Projects = () => (
  <section>
    <h2>My Projects</h2>
    <ul>
      <li><strong>Portfolio Website</strong> - A personal portfolio website built with React.js.</li>
      <li><strong>Task Manager</strong> - A simple task management application built with Node.js and MongoDB.</li>
      <li><strong>Weather App</strong> - A weather forecasting app built with React and OpenWeather API.</li>
    </ul>
  </section>
);

const Skills = () => (
  <section>
    <h2>Skills</h2>
    <ol>
      <li>C programming</li>
      <li>JavaScript</li>
      <li>HTML/CSS</li>
      <li>Python</li>
      <li>MongoDB</li>
      <li>Git & GitHub</li>
      <li>Excel</li>
      <li>Python Airflow</li>
    </ol>
  </section>
);

const Contact = () => (
  <section>
    <h2>Contact Me</h2>
    <p>
      Email: <a href="madhupriya.t2024ai-ds@sece.ac.in">madhupriya.t2024ai-ds@sece.ac.in</a>
    </p>
  </section>
);

// Main App Component
function App() {
  return (
    <Router>
      <div className="App">
        {/* Header Section */}
        <header className="App-header">
          <h1>My Portfolio</h1>
          <h3>Data Scientist, Quantnum Computing and Agentic Ai</h3>
        </header>

        {/* Sidebar Navigation */}
        <nav className="sidebar-nav">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Page Content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="App-footer">
          <p>&copy; 2025 Madhu Priya. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
