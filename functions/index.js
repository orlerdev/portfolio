const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const sgMail = require('@sendgrid/mail');
const axios = require("axios");
sgMail.setApiKey(functions.config().sendgrid.key);
const token = functions.config().github.key;


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
  sgMail.send([msgToMe, msgToUser])
    .then(() => res.status(200).send({ success: true }))
    .catch(error => {
      console.error(error);
      res.status(500).send('An error occurred while sending the email.');
    });
});

const fetchGitHubData = async (username) => {
  const query = `
      query GetUserContributions($username: String!) {
          user(login: $username) {
            contributionsCollection {
              contributionCalendar {
                weeks {
                  contributionDays {
                    date
                    contributionCount
                  }
                }
              }
            }
            repositories {
              totalCount
            }
          }
        }
    `;
  const headers = {
    Authorization: `Bearer ${token}`
  };

  try {
    const res = await axios.post('https://api.github.com/graphql', {
      query,
      variables: {username}
    }, {headers});
    const user = res.data.data.user;
    console.log('API Response:', res.data);
    console.log('GitHub User:', user);

    const weeks = res.data.data.user.contributionsCollection.contributionCalendar.weeks;

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = new Date(currentYear, currentDate.getMonth(), 1, 0, 0, 0);
    const last3Months = new Date(currentYear, currentDate.getMonth() - 3, 1, 0, 0, 0);
    const last6Months = new Date(currentYear, currentDate.getMonth() - 6, 1, 0, 0, 0);
    const lastYear = new Date(currentYear - 1, currentDate.getMonth(), 1, 0, 0, 0);

    const contributionsData = {
      currentMonth: 0,
      last3Months: 0,
      last6Months: 0,
      lastYear: 0
    };

    weeks.forEach(week => {
      week.contributionDays.forEach(day => {
        const date = new Date(day.date);
        if (date.getTime() >= lastYear.getTime()) {
          contributionsData.lastYear += day.contributionCount;
        }
        if (date.getTime() >= last6Months.getTime()) {
          contributionsData.last6Months += day.contributionCount;
        }
        if (date.getTime() >= last3Months.getTime()) {
          contributionsData.last3Months += day.contributionCount;
        }
        if (date.getTime() >= currentMonth.getTime()) {
          contributionsData.currentMonth += day.contributionCount;
        }
      })
    })

    return {contributionsData}
  } catch (err) {
    console.error('API Error:', err);
    throw new Error('Failed to fetch GitHub data.');
  }
}

app.get('/fetch-github/:username', async (req, res) => {
  const {username} = req.params;

  try {
    const data = await fetchGitHubData(username);
    res.status(200).send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while fetching the GitHub data.')
  }
})


exports.api = functions.https.onRequest(app);

