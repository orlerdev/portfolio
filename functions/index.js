const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(functions.config().sendgrid.key);

const app = express();

app.use(cors({ origin: true }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many requests from the IP, please try again later.'
});
app.use('/send-email', limiter);

app.post('/send-email', (req, res) => {
  const { email, name, message } = req.body;

  const mailOptions = {
    from: 'orlerdev@gmail.com',
    to: 'orlerdev@gmail.com',
    subject: 'Contact Form Submission',
    text: `${name} ${email} says: ${message}`
  };

  sgMail.send(mailOptions)
    .then(() => res.status(200).send('Email sent successfully!'))
    .catch(error => {
      console.error(error);
      res.status(500).send('An error occurred while sending the email.');
    });
});

exports.contactForm = functions.https.onRequest(app);
