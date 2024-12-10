import React, { useState, useEffect} from "react";
import myTools from "./developer";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Button from "./Button";

function Tools() {
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
            <h1 style={{color: "yellow"}}>Developer Tools</h1>
            <ul>
                {myTools.map((tool, index) => (
                <li key={index}>{tool.name}: {tool.experience}</li>
                ))}
            </ul>
            
            <div className="button-container">
                <Link to="/skills">
                    <Button text="Languages"/>
                </Link>
                <Link to="/skills/frameworks">
                    <Button text="Frameworks" />
                </Link>
            </div>
        </div>
    )
}

export default Tools;