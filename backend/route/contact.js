const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const db = require('../db');
require('dotenv').config();

const { EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

router.post('/', async (req, res) => {
  const { name, email, message, phone } = req.body;

  if (!name || !email || !message || !phone) {
    return res.status(400).json({ msg: 'Please fill all fields' });
  }

  try {
    const query = 'INSERT INTO contact (name, email, message, phone) VALUES (?, ?, ?, ?)';
    await db.execute(query, [name, email, message, phone]);

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

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Email error:', error);
        return res.status(500).json({ msg: 'message failed to send', error: error.toString() });
      } else {
        console.log('Email sent:', info.response);
        return res.status(200).json({ msg: 'Message sent successfully' });
      }
    });

  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ msg: 'Internal server error', error: err.toString() });
  }
});

module.exports = router;