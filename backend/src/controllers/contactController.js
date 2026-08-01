// src/controllers/contactController.js
import { validationResult } from 'express-validator';
import { sendEmail } from '../utils/emailService.js';

/**
 * Handle contact form submission
 */
export const submitContact = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array(),
      });
    }

    const { fullName, email, subject, message } = req.body;

    // Send email to portfolio owner
    await sendEmail({
      to: process.env.PORTFOLIO_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      template: 'contact-notification',
      data: {
        fullName,
        email,
        subject,
        message,
        timestamp: new Date().toLocaleString(),
      },
    });

    // Optional: Send confirmation email to user
    if (process.env.SEND_CONFIRMATION_EMAIL === 'true') {
      await sendEmail({
        to: email,
        subject: 'We received your message',
        template: 'contact-confirmation',
        data: {
          fullName,
        },
      });
    }

    res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully!',
      data: {
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Contact submission error:', error);

    res.status(500).json({
      success: false,
      message: 'Failed to send your message. Please try again later.',
      ...(process.env.NODE_ENV === 'development' && { error: error.message }),
    });
  }
};

/**
 * Test endpoint to verify contact form is working
 */
export const testContact = async (req, res) => {
  try {
    // Send test email
    await sendEmail({
      to: process.env.PORTFOLIO_EMAIL,
      subject: 'Portfolio Contact Form - Test Email',
      template: 'test',
      data: {
        message: 'This is a test email from your portfolio contact form.',
        timestamp: new Date().toISOString(),
      },
    });

    res.status(200).json({
      success: true,
      message: 'Test email sent successfully!',
    });
  } catch (error) {
    console.error('Test email error:', error);

    res.status(500).json({
      success: false,
      message: 'Failed to send test email',
      error: error.message,
    });
  }
};
