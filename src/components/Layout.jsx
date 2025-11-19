import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import Brain3D from './Brain3D';
import { FaGithub, FaSun, FaMoon, FaTimes } from 'react-icons/fa';
import AboutPage from '../pages/AboutPage';
import ProjectsPage from '../pages/ProjectsPage';
import EducationPage from '../pages/EducationPage';
import ContactPage from '../pages/ContactPage';

export default function Layout({ children }) {
    const { theme, toggleTheme } = useTheme();
    const [activeSection, setActiveSection] = useState('home');

    const handleClose = () => setActiveSection('home');

    // Lock body scroll when modal is open
    useEffect(() => {
        if (activeSection !== 'home') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [activeSection]);

    return (
        <div className="layout-container">
            <Brain3D activeSection={activeSection} onSectionChange={setActiveSection} />

            <header className="main-header">
                <div className="logo">PNOW</div>
                <button onClick={toggleTheme} className="theme-toggle">
                    {theme === 'dark' ? <FaSun /> : <FaMoon />}
                </button>
            </header>

            <AnimatePresence>
                {activeSection !== 'home' && (
                    <motion.div
                        className="modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            className="overlay-panel"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="close-btn" onClick={handleClose}>
                                <FaTimes />
                            </button>

                            <div className="panel-content">
                                {activeSection === 'about' && <AboutPage />}
                                {activeSection === 'projects' && <ProjectsPage />}
                                {activeSection === 'education' && <EducationPage />}
                                {activeSection === 'contact' && <ContactPage />}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {activeSection === 'home' && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="home-overlay"
                    style={{
                        color: theme === 'light' ? '#000' : '#fff',
                        position: 'absolute',
                        bottom: '20%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '100%',
                        zIndex: 10
                    }}
                >
                    <h3>pnow's Interactive Portfolio</h3>
                    <p>Click nodes to explore</p>
                </motion.div>
            )}

            <footer className="main-footer">
                <p>PNOW. All rights reserved.</p>
                <div className="footer-links">
                    <a href="https://github.com/pnow7" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <FaGithub />
                    </a>
                </div>
            </footer>
        </div>
    );
}
