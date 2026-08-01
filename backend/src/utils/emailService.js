// src/utils/emailService.js
import nodemailer from 'nodemailer';
import { getEmailTemplate } from './emailTemplates.js';

/**
 * Initialize email transporter based on environment
 */
const createTransporter = () => {
  // Using Gmail with App Password (recommended for production)
  if (process.env.EMAIL_SERVICE === 'gmail') {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD, // Use App Password, not regular password
      },
    });
  }

  // Using SendGrid
  if (process.env.EMAIL_SERVICE === 'sendgrid') {
    return nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY,
      },
    });
  }

  // Using Ethereal (development/testing only)
  if (process.env.EMAIL_SERVICE === 'ethereal') {
    return nodemailer.createTransport({
      host: process.env.ETHEREAL_HOST,
      port: process.env.ETHEREAL_PORT,
      auth: {
        user: process.env.ETHEREAL_USER,
        pass: process.env.ETHEREAL_PASS,
      },
    });
  }

  // Default: SMTP server
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

let transporter;

/**
 * Send email with template support
 */
export const sendEmail = async ({ to, subject, template, data }) => {
  try {
    // Initialize transporter once
    if (!transporter) {
      transporter = createTransporter();
    }

    // Get email template
    const htmlContent = getEmailTemplate(template, data);

    const mailOptions = {
      from: `${process.env.EMAIL_FROM_NAME || 'Sudhakar'} <${process.env.EMAIL_FROM_ADDRESS || process.env.EMAIL_USER}>`,
      to,
      subject,
      html: htmlContent,
      // Optional: plain text fallback
      text: `${subject}: ${JSON.stringify(data)}`,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log(`✅ Email sent successfully to ${to}`);
    console.log(`📧 Message ID: ${info.messageId}`);

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    console.error(`❌ Email sending failed:`, error);
    throw new Error(`Failed to send email: ${error.message}`);
  }
};

/**
 * Verify email configuration
 */
export const verifyEmailConfig = async () => {
  try {
    if (!transporter) {
      transporter = createTransporter();
    }

    await transporter.verify();
    console.log('✅ Email configuration verified successfully');
    return true;
  } catch (error) {
    console.error('❌ Email configuration verification failed:', error);
    return false;
  }
};
