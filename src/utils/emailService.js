import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY,
});

export const sendEmail = async ({ to, subject, htmlContent, textContent }) => {
  try {
    const sentFrom = new Sender("grant@thebitlion.com", "BitLion");
    
    const recipients = [
      new Recipient(to)
    ];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(sentFrom)
      .setSubject(subject)
      .setHtml(htmlContent)
      .setText(textContent);

    const response = await mailerSend.email.send(emailParams);
    return { success: true, response };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}; 