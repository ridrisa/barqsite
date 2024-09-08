import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="section-title text-center">
          <h2>Contact Us</h2>
          <p>Get in touch with us to start your campaign today!</p>
        </div>
        <form className="row g-3">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="col-md-6">
            <input type="email" className="form-control" placeholder="Your Email" required />
          </div>
          <div className="col-12">
            <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
