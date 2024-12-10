import React, {useState, useEffect} from "react";
import Loader from "./Loader";
import Header from "./Header";
import Card from "./Card";
import "./About.css";
import projects from "./Projects";
import "./h3.css";


function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time
    const timer = setTimeout(() => setLoading(false), 2000); // 3 seconds delay
    return () => clearTimeout(timer); // Cleanup
  }, []);

  if (loading) {
    return <Loader />; // Show Loader while loading
  }
  return (
    <div className="about">
      <Header text="About Me" />
      <p>
      I am a very ambitious software developer with a unique background <br />
      that has prepared me to be a team player who communicates <br />
      effectively, faces problems analytically and has the technical skills to <br />
      tackle any challenge.
      </p>
      <h2 style={{color: "yellow"}}>Projects: </h2>
      <div className="card-container" >
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <a href={project.src}>
            <Card text={project.github} photo={project.image} />
          </a>
      </div>
      ))}
      </div>
    </div>
  );
}

export default About;