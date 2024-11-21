import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("light");
  const [fireworks, setFireworks] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Generate a firework
  const createFirework = (e) => {
    const { clientX, clientY } = e;
    const newFirework = {
      id: Date.now(),
      x: clientX,
      y: clientY,
    };
    setFireworks((prev) => [...prev, newFirework]);

    // Remove firework after animation
    setTimeout(() => {
      setFireworks((prev) => prev.filter((fw) => fw.id !== newFirework.id));
    }, 1000);
  };

  return (
    <div
      className={`app ${theme}`}
      onClick={createFirework} // Trigger firework on click
      onTouchEnd={createFirework} // Trigger firework on touch
    >
      {loading ? (
        <div id="loader">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <div id="main-content" className="show">
          <header className="header">
            <div className="text">
              <h1>Saurabh Gaikwad</h1>
              <p>Welcome to my portfolio! Here are some of my projects.</p>
              <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
          </header>
          <hr />
          <main>
            <section>
              <h2>Projects</h2>
              <div className="project">
                <ol>
                  <li>
                    <h3>
                      <u>Python Snake Game</u>
                    </h3>
                    <p>
                      A brief description of Project 2. It highlights the main
                      features and results.
                    </p>
                    <a
                      rel="noopener noreferrer"
                      href="https://photos.google.com/share/AF1QipM11mhVlUv7OVS4qszvBmgUGPhx8kYgunqC2AX_nOuYj_eBaYuYNtiAT35UdQBivw?key=ME1Kc19MOHl4TGx0NUNWd29IRVhCMEk1dkJRMVJn"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </li>
                  <li>
                    <h3>
                      <u>Football-Prediction</u>
                    </h3>
                    <p>
                      A brief description of Project 1. It includes
                      technologies used, goals, and outcomes.
                    </p>
                    <a
                      rel="noopener noreferrer"
                      href="https://github.com/Psudhanshu/Football-Prediction/tree/main"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </li>
                </ol>
              </div>
            </section>
          </main>
          {/* Render fireworks */}
          {fireworks.map((fw) => (
            <div
              key={fw.id}
              className="firework"
              style={{
                top: fw.y + "px",
                left: fw.x + "px",
              }}
            ></div>
          ))}
          <footer>
            <div className="grid-container">
              <div className="grid-item">
                <section>
                  <h2>About Me</h2>
                  <p>
                    I am currently pursuing my master’s in Information Systems
                    at Pace University. Interested in Full Stack Development,
                    Java, Python, JavaScript development.
                  </p>
                </section>
              </div>
              <div className="grid-item">
                <p>Contact Me: +1 201 687 1359</p>
                <p>Email: sg97415n@pace.edu</p>
              </div>
              <div className="grid-item">
                <p>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/saurabh-gaikwad-0993441a6/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>{" "}
                  | <a rel="noopener noreferrer" href="">GitHub</a>
                </p>
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;
