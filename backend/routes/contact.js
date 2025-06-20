const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const db = require('../db'); // Adjust path if different
require('dotenv').config();

// Destructure env variables
const { EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env;

// Setup Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // or use 'hotmail', 'yahoo', etc.
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// POST route to handle contact form submission
router.post('/', async (req, res) => {
  const { name, email, message, phone } = req.body;

  if (!name || !email || !message || !phone) {
    return res.status(400).json({ msg: 'Please fill all fields' });
  }

  try {
    // Insert into MySQL database
    const query = 'INSERT INTO contact (name, email, message, phone) VALUES (?, ?, ?, ?)';
    await db.execute(query, [name, email, message, phone]);

    // Email setup
    const mailOptions = {
      from: EMAIL_USER,
      to: EMAIL_TO,
      subject: `New Contact Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Email error:', error); // Print full error
        return res.status(500).json({ msg: 'Email failed to send', error: error.toString() });
      } else {
        console.log('Email sent:', info.response);
        return res.status(200).json({ msg: 'Message saved and email sent successfully' });
      }
    });

  } catch (err) {
    console.error('Database error:', err); // Print full error
    res.status(500).json({ msg: 'Internal server error', error: err.toString() });
  }
});

module.exports = router;
