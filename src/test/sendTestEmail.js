import { sendEmail } from '../utils/emailService';

const sendTestEmail = async () => {
  const emailData = {
    to: 'grant@thebitlion.com',
    subject: 'Test Email from BitLion',
    htmlContent: '<h1>Hello from BitLion!</h1><p>This is a test email sent using MailerSend.</p>',
    textContent: 'Hello from BitLion! This is a test email sent using MailerSend.'
  };

  const result = await sendEmail(emailData);
  console.log('Email send result:', result);
};

sendTestEmail(); 