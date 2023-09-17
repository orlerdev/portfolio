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

app.post('/send-email', (req, res) => {
  const { email, name, message } = req.body;

  const msgToMe = {
    to: 'orlerdev@gmail.com',
    from: 'orlerdev@gmail.com',
    subject: 'Contact Form Submission',
    text: `Name: ${name} Email: ${email} says: ${message}`,
    html: `Name: ${name} </br> Email: ${email} </br> says: ${message}`
  };

  const msgToUser = {
    to: `${email}`,
    from: 'orlerdev@gmail.com',
    subject: 'Thank you for reaching out',
    text: `Thank you for reaching out. I have received your message and will respond as soon as possible.`,
    html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd;">
            <h2 style="color: #333;">Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <hr>
            <p>Thank you for reaching out. I have received your message and will respond as soon as possible.</p>
        </div>
    `
  }

  sgMail.send(msg)
    .then(() => res.status(200).send({ success: true }))
    .catch(error => {
      console.error(error);
      res.status(500).send('An error occurred while sending the email.');
    });
});

exports.contactForm = functions.https.onRequest(app);

