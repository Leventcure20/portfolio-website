import React, {useState, useEffect} from "react";
import Loader from "./Loader";
import Header from "./Header";
import "./About.css";
import LinkedIn from "./LinkedIn";
import EmailForm from "./Form";


function Contact() {
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
            <Header text="Contact Me" />
            <p>Thank you for your interest in getting in touch!</p>
            <EmailForm />
            <LinkedIn />
        </div>
    )
}

export default Contact;