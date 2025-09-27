const nodemailer = require('nodemailer');

nodemailer.createTestAccount((err, account) => {
  if (err) {
    console.error('Fehler beim Erstellen des Test-Accounts:', err);
    return;
  }

  console.log('Ethereal Test Account');
  console.log('User:', account.user);
  console.log('Pass:', account.pass);
});
