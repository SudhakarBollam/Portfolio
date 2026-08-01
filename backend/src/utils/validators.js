// src/utils/validators.js
import { body, validationResult } from 'express-validator';

/**
 * Contact form validation rules
 */
export const validateContactForm = [
  body('fullName')
    .trim()
    .notEmpty()
    .withMessage('Full name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Full name must be between 2 and 100 characters'),

  body('email')
    .trim()
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),

  body('subject')
    .trim()
    .notEmpty()
    .withMessage('Subject is required')
    .isLength({ min: 5, max: 200 })
    .withMessage('Subject must be between 5 and 200 characters'),

  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ min: 10, max: 5000 })
    .withMessage('Message must be between 10 and 5000 characters'),
];

/**
 * Middleware to check validation errors
 */
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map((err) => ({
        field: err.param,
        message: err.msg,
      })),
    });
  }
  next();
};

/**
 * Rate limiting checker (basic implementation)
 */
const requestMap = new Map();

export const rateLimitCheck = (maxRequests = 5, timeWindow = 3600000) => {
  return (req, res, next) => {
    const ip = req.ip;
    const now = Date.now();

    if (!requestMap.has(ip)) {
      requestMap.set(ip, []);
    }

    const requests = requestMap.get(ip).filter((time) => now - time < timeWindow);

    if (requests.length >= maxRequests) {
      return res.status(429).json({
        success: false,
        message: 'Too many requests. Please try again later.',
        retryAfter: Math.ceil((requests[0] + timeWindow - now) / 1000),
      });
    }

    requests.push(now);
    requestMap.set(ip, requests);
    next();
  };
};
