import React, {useState, useEffect} from "react";
import Loader from "./Loader";
import Header from "./Header";
//import experiences from "./Latest_Exp";
import Work from "./Work";
import "./About.css";
import Companies from "./WorkExperience";



function Experience() {
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
    <div className="experience">
      <Header text="Work Experience" />
      <div className="card-container">
      {Companies.map((company, index) => (
        <Work key={index} title={company.title} text={company.description} photo={company.src}/>
      ))}
      </div>
    </div>
  );
}

export default Experience;