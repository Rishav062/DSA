// server.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require("path")
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const filePath = path.join(__dirname,"/public");
console.log(filePath);

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(`${filePath}/index.html`);
});

// handle the user registration
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  
  // hash the user's password before storing it in the database
  const hashedPassword = await bcrypt.hash(password, 10);

  // save the user data to the database or do something else with it
  
  // send a welcome email to the user
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 537,
    secure: true,
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password'
    }
  });
  
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Welcome to My App',
    html: `<h1>Welcome, ${name}!</h1><p>Your account has been created successfully.</p>`
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  
  res.send('User created successfully');
});

app.listen(5000, () => {
  console.log('Server is running on port 3000');
});