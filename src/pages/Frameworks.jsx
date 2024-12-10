import React, {useState, useEffect} from "react";
import frameworks from "./frameworksData";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import "./frameWorks.css";
import Button from "./Button";

function Frameworks() {
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
                <div>
                    <h1 style={{color: "yellow"}}>FrameWorks/Technologies</h1>
                </div>
                <ul>
                    {frameworks.map((framework, index) => (
                    <li key={index}>{framework.name}: {framework.experience}</li>
                    ))}
                </ul>
                <div className="button-container">
                    <Link to="skills">
                        <Button text="Languages" />
                    </Link>
                    <Link to="/skills/developer">
                        <Button text="Dev Tools" />
                    </Link>
                </div>
            </div>
    )
}
export default Frameworks;