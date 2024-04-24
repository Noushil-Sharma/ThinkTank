const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'dummyacc171813@gmail.com',
    pass: 'qwertyabd360'
  }
});

module.exports = transporter;