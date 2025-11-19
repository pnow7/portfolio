import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub } from 'react-icons/fa';
import "../styles/ContactPage.css";

const ContactPage = () => {
    return (
        <div className="contact-container">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Get In Touch
            </motion.h2>

            <motion.div
                className="contact-content"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
            >
                <p className="contact-text">
                    I'm always open to new opportunities and collaborations.
                    Feel free to reach out!
                </p>

                <div className="contact-links">
                    <a href="mailto:phyunjae7333@gmail.com" className="contact-item">
                        <div className="icon-box">
                            <FaEnvelope />
                        </div>
                        <span>phyunjae7333@gmail.com</span>
                    </a>

                    <a href="https://github.com/pnow7" target="_blank" rel="noopener noreferrer" className="contact-item">
                        <div className="icon-box">
                            <FaGithub />
                        </div>
                        <span>GitHub</span>
                    </a>

                    {/* Add LinkedIn if available */}
                </div>

                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <input type="text" placeholder="Name" className="form-input" />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email" className="form-input" />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Message" className="form-input textarea"></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </motion.div>
        </div>
    );
};

export default ContactPage;
