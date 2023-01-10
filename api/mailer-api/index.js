const nodemailer = require("nodemailer");
const ejs = require("ejs");

require("dotenv").config();

const mailconfigurations = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.USER,
    pass: process.env.EMAILPASS,
  },
};

const transporter = nodemailer.createTransport(mailconfigurations);

const mailoptions = {
  from: process.env.USER,
  to: process.env.TO,
  subject: "Hello ✔",
  text: "Hello world?",
  html: "<b>Hello world?</b>",
};

 transporter
  .sendMail(mailoptions)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => console.log(error));
