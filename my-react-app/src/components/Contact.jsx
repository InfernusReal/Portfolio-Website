
import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: ''
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault(); // still prevents button default behavior
    try {
      await axios.post('http://www.infernusreal.com/api/contact', formData);
      alert('Message sent!');
    } catch (err) {
      console.error(err);
      alert('Failed to send.');
    }
  }

  return (
    <div className='Contact'>
      <div className='ContactPage'>
        <h1 className='ContactHeading'>Get in touch with us!</h1>
        <form className='contact-form'>
          <input
            type="text"
            name="name"
            className='ContactInput'
            placeholder='Enter your name'
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            className='ContactInput'
            placeholder='Enter your email'
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            className='ContactInput'
            placeholder='Enter your message'
            rows="5"
            value={formData.message}
            onChange={handleChange}
          />
          <input
            type='text'
            name="phone"
            className='ContactInput'
            placeholder='Enter your phone number'
            value={formData.phone}
            onChange={handleChange}
          />
          <button
            className='ContactButton'
            type="button" // important: prevent default submission
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

