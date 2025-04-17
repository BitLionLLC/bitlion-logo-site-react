const MAILERSEND_API_URL = '/v1/email';

export async function sendSupportEmail(formData) {
  const { name, email, subject, message } = formData;

  const emailData = {
    to: [{
      email: "grant@thebitlion.com",
      name: "BitLion Support"
    }],
    from: {
      email: "noreply@thebitlion.com", // You should use a verified domain email
      name: name
    },
    reply_to: {
      email: email,
      name: name
    },
    subject: `Support Request: ${subject}`,
    html: `
      <h2>New Support Request</h2>
      <p><strong>From:</strong> ${name} (${email})</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
    text: `
      New Support Request
      From: ${name} (${email})
      Subject: ${subject}
      Message: ${message}
    `
  };

  try {
    const response = await fetch(MAILERSEND_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${process.env.REACT_APP_MAILERSEND_API_KEY}`
      },
      body: JSON.stringify(emailData)
    });

    if (response.status === 202) {
      return { success: true, message: 'Email sent successfully' };
    }

    // If the response is not 202, try to get error details from the response
    const errorData = await response.json();
    throw new Error(JSON.stringify(errorData, null, 2));
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
} 