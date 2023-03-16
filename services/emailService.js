import nodemailer from 'nodemailer';
import 'dotenv/config';

let transporter = nodemailer.createTransport({
  host: process.env.SMPT_HOST,
  port: process.env.SMPT_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMPT_USER,
    pass: process.env.SMPT_PASSWORD,
  },
});

function send({email, subject, html}) {
  return transporter.sendMail({
    from: 'Authorization API',
    to: email,
    subject,
    text: "",
    html
  });
}

function sendActivationLink(token, email) {
  let link = `https://yelnikov-andrii.github.io/pizza2/#/activation/${token}`
  send({
    email,
    subject: 'Account activation',
    html: 
    `
    <h1>Activation</h1>
    <a href="${link}" target="_blank">${link}</a>
    `
  })
}

export const emailService = {
  send,
  sendActivationLink
}