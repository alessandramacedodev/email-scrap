// emailSender.js
require('dotenv').config();
const nodemailer = require('nodemailer');

/**
 * Enviando um e-mail com as manchetes recebidas do R7
 * @param {string[]} headlines 
 */
async function sendEmail(headlines) {
  if (!headlines || headlines.length === 0) {
    console.log('Nenhuma manchete para enviar.');
    return;
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const message = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: 'Top Manchetes do R7',
    html: `<h2>Últimas manchetes do R7:</h2><ul>${headlines.map(h => `<li>${h}</li>`).join('')}</ul>`,
  };

  try {
    await transporter.sendMail(message);
    console.log('✅ E-mail enviado com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
  }
}

module.exports = sendEmail;
