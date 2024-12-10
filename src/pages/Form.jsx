import React, { useState } from "react";
import emailjs from "emailjs-com";

const EmailForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState(""); // Success or error message

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Replace with your EmailJS details
        const serviceID = "service_131sr8j"; // Replace with your EmailJS Service ID
        const templateID = "template_77nqcoq"; // Replace with your EmailJS Template ID
        const userID = "2BojDvAsUXpOKqsrv"; // Replace with your EmailJS Public Key/User ID

        const emailData = {
          from_name: formData.name,   // User's name from input
          reply_to: formData.email,   // User's email from input
          message: formData.message,  // User's message from input
        };
        
        setStatus("Sending...");
        emailjs
            .send(serviceID, templateID, emailData, userID)
            .then(
                (response) => {
                    console.log("Email sent successfully!", response.status, response.text);
                    setStatus("Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" }); // Clear the form
                },
                (error) => {
                    console.error("Failed to send email:", error);
                    setStatus("Failed to send message. Please try again later.");
                }
            );
    };

    return (
        <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
            
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{ padding: "0.5rem", fontSize: "1rem" }}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ padding: "0.5rem", fontSize: "1rem" }}
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{ padding: "0.5rem", fontSize: "1rem", minHeight: "100px" }}
                />
                <button
                    type="submit"
                    style={{
                        padding: "0.75rem",
                        fontSize: "1rem",
                        backgroundColor: "#007BFF",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Send Message
                </button>
            </form>
            {status && <p style={{ marginTop: "1rem", color: status.includes("successfully") ? "green" : "red" }}>{status}</p>}
        </div>
    );
};

export default EmailForm;