import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub } from 'react-icons/fa';
import { Send } from 'lucide-react';
import "../styles/ContactPage.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzzoawwq";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState('Send Message');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setError('모든 필드를 작성해 주세요.');
            return;
        }

        setIsSubmitting(true);
        setStatus('Sending...');
        setError(null);
        setIsSuccess(false);

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setIsSuccess(true);
                setFormData({ name: '', email: '', message: '' });
                setStatus('Message sent successfully!');
            } else {
                let errorData;
                try {
                    errorData = await response.json();
                } catch (e) {
                    errorData = { error: 'Unknown response error from Formspree.' };
                }

                const errorMessage = errorData.error || errorData.errors?.map(err => err.message).join(', ') || 'Failed to send message. Please try again.';

                setError(errorMessage);
                console.error('Formspree Error:', errorData);
                setStatus('Failed to send message');
            }
        } catch (err) {
            setError('네트워크 오류: 메시지를 보내는 데 실패했습니다. 잠시 후 다시 시도해 주세요.');
            console.error('Network or Fetch Error:', err);
            setStatus('Failed to send message');
        } finally {
            if (!isSuccess) {
                setIsSubmitting(false);
            }
        }
    };

    if (isSuccess) {
        return (
            <div className="contact-success-container">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="contact-success-box"
                >

                    <Send style={{ width: '4rem', height: '4rem', color: '#3b82f6', margin: '0 auto 1rem', animation: 'bounce 1s infinite' }} />
                    <h2 className="success-title">메시지 전송 성공!</h2>
                    <p className="success-text">
                        문의해주셔서 감사합니다. 빠른 시일 내에 확인 후 연락드리겠습니다.
                    </p>
                    <button
                        onClick={() => setIsSuccess(false)}
                        className="success-reset-btn"
                    >
                        새 메시지 작성
                    </button>
                </motion.div>
            </div>
        );
    }

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
                    편하게 연락 주세요!
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
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" placeholder="Name" className="form-input" name="name" value={formData.name} onChange={handleChange} required disabled={isSubmitting} />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email" className="form-input" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Message" className="form-input textarea" name="message" value={formData.message} onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit" className={`submit-btn ${isSubmitting ? 'submitting' : ''}`} disabled={isSubmitting}>{status}</button>

                    {error && (
                        <div className="form-message error-message">
                            {error}
                        </div>
                    )}

                    {!isSubmitting && !error && status !== 'Send Message' && status !== 'Message sent successfully!' && (
                        <div className="form-message status-message">
                            {status}
                        </div>
                    )}
                </form>
            </motion.div>
        </div>
    );
};

export default ContactPage;
