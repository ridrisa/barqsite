import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="section-title">
          <h2>Get in Touch</h2>
          <p>Ready to revolutionize your advertising? Let's talk!</p>
        </div>
        <div className="row">
          <div className="col-md-6 animate__animated animate__fadeInLeft">
            <form id="contactForm" className="contact-form" aria-label="Contact form" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  id="name" 
                  placeholder="Your Name" 
                  required 
                  aria-label="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  placeholder="Your Email" 
                  required 
                  aria-label="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <textarea 
                  className="form-control" 
                  id="message" 
                  rows="5" 
                  placeholder="Your Message" 
                  required 
                  aria-label="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
          <div className="col-md-6 animate__animated animate__fadeInRight">
            <div className="contact-info">
              <h3>Our Office</h3>
              <p><i className="fas fa-map-marker-alt me-2"></i>Tahlia Street, Riyadh, KSA</p>
              <p><i className="fas fa-phone me-2"></i>+966556791650</p>
              <p><i className="fas fa-envelope me-2"></i>info@barqads.com</p>
              <div className="social-links mt-4">
                <a href="#" className="me-3" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="me-3" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" className="me-3" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="me-3" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;