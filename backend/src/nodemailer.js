const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  service:'gmail',
  auth: {
     user: 'contact.munabeauty@gmail.com',
     pass: 'Hassan2014'
  }
});

module.exports = transport