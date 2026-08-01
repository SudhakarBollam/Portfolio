// src/utils/emailTemplates.js
/**
 * Email template generator
 */

const baseTemplate = (content) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 40px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      margin-bottom: 30px;
      border-bottom: 2px solid #00d9ff;
      padding-bottom: 20px;
    }
    .header h1 {
      color: #0a0e27;
      margin: 0;
      font-size: 24px;
    }
    .header .accent {
      color: #00d9ff;
    }
    .content {
      margin: 20px 0;
      font-size: 16px;
      color: #555;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #ddd;
      text-align: center;
      font-size: 12px;
      color: #999;
    }
    .button {
      display: inline-block;
      padding: 12px 30px;
      background-color: #00d9ff;
      color: #0a0e27;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      margin-top: 20px;
      text-align: center;
    }
    .button:hover {
      background-color: #00b8d4;
    }
    .info-box {
      background-color: #f9f9f9;
      border-left: 4px solid #00d9ff;
      padding: 15px;
      margin: 15px 0;
      border-radius: 3px;
    }
    .info-box strong {
      color: #0a0e27;
    }
  </style>
</head>
<body>
  <div class="container">
    ${content}
    <div class="footer">
      <p>© 2024 Sudhakar Bollam Portfolio. All rights reserved.</p>
      <p>This email was sent from your portfolio contact form.</p>
    </div>
  </div>
</body>
</html>
`;

export const getEmailTemplate = (template, data) => {
  switch (template) {
    case 'contact-notification':
      return baseTemplate(`
        <div class="header">
          <h1>New Contact Form <span class="accent">Submission</span></h1>
        </div>
        <div class="content">
          <p>You have received a new message from your portfolio contact form.</p>
          
          <div class="info-box">
            <strong>From:</strong> ${data.fullName}<br>
            <strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a><br>
            <strong>Subject:</strong> ${data.subject}<br>
            <strong>Time:</strong> ${data.timestamp}
          </div>

          <h3>Message:</h3>
          <p>${data.message.replace(/\n/g, '<br>')}</p>

          <p style="margin-top: 30px; color: #999; font-size: 14px;">
            💡 Reply to this message by clicking the email address above.
          </p>
        </div>
      `);

    case 'contact-confirmation':
      return baseTemplate(`
        <div class="header">
          <h1>Thank You, <span class="accent">${data.fullName}!</span></h1>
        </div>
        <div class="content">
          <p>Thank you for reaching out! I have received your message and will get back to you as soon as possible.</p>
          
          <div class="info-box">
            <strong>What happens next?</strong><br>
            I typically respond to inquiries within 24-48 hours. Keep an eye on your inbox!
          </div>

          <p>In the meantime, feel free to:</p>
          <ul>
            <li>Check out my <strong><a href="https://sudhakar-portfolio.vercel.app" style="color: #00d9ff;">portfolio</a></strong></li>
            <li>Connect with me on <strong><a href="https://linkedin.com/in/sudhakarbollam" style="color: #00d9ff;">LinkedIn</a></strong></li>
            <li>Follow me on <strong><a href="https://github.com/sudhakarbollam" style="color: #00d9ff;">GitHub</a></strong></li>
          </ul>

          <p>Best regards,<br>
          <strong>Sudhakar Bollam</strong><br>
          Full-Stack Developer & AI Enthusiast</p>
        </div>
      `);

    case 'test':
      return baseTemplate(`
        <div class="header">
          <h1>Test <span class="accent">Email</span></h1>
        </div>
        <div class="content">
          <p>${data.message}</p>
          <div class="info-box">
            <strong>Timestamp:</strong> ${data.timestamp}
          </div>
          <p style="margin-top: 20px; color: #00d9ff; font-weight: bold;">
            ✅ Your email configuration is working correctly!
          </p>
        </div>
      `);

    default:
      return baseTemplate(`
        <div class="header">
          <h1>Notification from <span class="accent">Sudhakar</span></h1>
        </div>
        <div class="content">
          <p>${JSON.stringify(data, null, 2)}</p>
        </div>
      `);
  }
};
