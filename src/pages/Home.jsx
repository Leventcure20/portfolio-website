import React, {useState, useEffect} from "react";
import LinkedInPhoto from "../components/Linkedin_Profile.jpg";
import Loader from "./Loader";
import Header from "./Header";
import "./Home.css";
import Button from "./Button";
import "./Button.css";
import { Link } from "react-router-dom";
import Gbutton from "./Github";
import CButton from "./ContactButton";




function Home() {
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
      <div className="home">
        <Header text="Levent Cure" />
          <img style={{width: "300px", height: "400px"}}src={LinkedInPhoto}/>
          <p>Hi, I'm Levent! A passionate software developer and designer dedicated to building innovative solutions.
          </p>
          <div className="button-container">
            <Link to="/about">
              <Button className="home" text="About Me"/>
            </Link>
            <Link to="/skills">
              <Button className="skills" text="Skills"/>
            </Link>
            <Link to="/experience">
              <Button className="work" text="Experience"/>
            </Link>
            <a href="https://github.com/Leventcure20/" target="_blank" rel="noopener noreferrer">
              <Gbutton  />
            </a>
          </div>
          <div>
            <Link to="/contact">
              <CButton />
            </Link>
          </div>  
      </div>
  );
}

export default Home;