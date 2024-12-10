import React, {useState, useEffect} from "react";
import Loader from "./Loader";
import languages from "./Languages";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "./Button";

function Skills() {
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
    <div className="skills">
      <Header text="Skills" />

      <h1 style={{color: "yellow"}}>Languages</h1>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>{language.name}: {language.experience}</li>
        ))}
      </ul>

        <div className="button-container">
          <Link to="frameworks">
            <Button text="Frameworks" />
          </Link>
          <Link to="developer">
            <Button text="Dev Tools" />
          </Link>
        </div>
        <Outlet />
    </div>
  );
}

export default Skills;