// src/routes/contact.js
import express from 'express';
import { submitContact, testContact } from '../controllers/contactController.js';
import { validateContactForm, rateLimitCheck } from '../utils/validators.js';

const router = express.Router();

/**
 * POST /api/contact
 * Submit contact form
 * Rate limited to 5 requests per hour per IP
 */
router.post('/', rateLimitCheck(5, 3600000), validateContactForm, submitContact);

/**
 * POST /api/contact/test
 * Test email configuration
 * Only available in development
 */
router.post('/test', (req, res, next) => {
  if (process.env.NODE_ENV !== 'development') {
    return res.status(403).json({
      success: false,
      message: 'Test endpoint is only available in development mode',
    });
  }
  testContact(req, res);
});

export default router;
