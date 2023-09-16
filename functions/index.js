const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(functions.config().sendgrid.key);


const app = express();


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many requests from the IP, please try again later.'
});

app.set('trust proxy', 1);
app.use('/send-email', limiter);
app.use(cors({ origin: true }));

app.get('/send-email', (req, res) => {
  res.send('GET request is working!');
});

app.post('/send-email', (req, res) => {
  const { email, name, message } = req.body;

  const msg = {
    to: 'orlerdev@gmail.com',
    from: 'orlerdev@gmail.com',
    subject: 'Contact Form Submission',
    text: `${name} ${email} says: ${message}`,
    html: `${message}`
  };

  sgMail.send(msg)
    .then(() => res.status(200).send({ success: true }))
    .catch(error => {
      console.error(error);
      res.status(500).send('An error occurred while sending the email.');
    });
});

exports.contactForm = functions.https.onRequest(app);

