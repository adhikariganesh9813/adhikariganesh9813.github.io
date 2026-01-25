// My backend for handling contact form submissions

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();

// Security: Helmet for security headers
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const validator = require('validator');

// Apply security headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:"],
    },
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  },
  frameguard: { action: 'deny' },
  noSniff: true,
  xssFilter: true
}));

// Rate limiting to prevent spam/DoS attacks
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: { status: 'error', message: 'Too many requests, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// CORS setup - only allow requests from my GitHub Pages site
const corsOptions = {
  origin: 'https://adhikariganesh9813.github.io', // Only allow my portfolio frontend
  methods: ['POST', 'GET'], // Only allow necessary methods
  credentials: true,
  optionsSuccessStatus: 204,
  maxAge: 86400 // Cache preflight for 24 hours
};
app.use(cors(corsOptions));

// Middleware to parse JSON bodies with size limit
app.use(express.json({ limit: '10kb' })); // Prevent large payload attacks

// Input sanitization helper
function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  // Remove any HTML tags and scripts
  let sanitized = input.replace(/<[^>]*>/g, '');
  // Remove any potentially dangerous characters
  sanitized = sanitized.replace(/[<>"'`]/g, '');
  // Trim whitespace
  sanitized = sanitized.trim();
  return sanitized;
}

// Escape HTML for safe display in emails
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
    '/': '&#x2F;'
  };
  return text.replace(/[&<>"'\/]/g, (char) => map[char]);
}

// Validate email format
function isValidEmail(email) {
  return validator.isEmail(email) && email.length <= 254;
}

// Validate name (letters, spaces, hyphens only)
function isValidName(name) {
  return /^[a-zA-Z\s\-'.]{2,50}$/.test(name);
}

// Nodemailer setup - credentials are set in Render's environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // My Gmail address (from Render ENV)
    pass: process.env.EMAIL_PASS  // App password (from Render ENV)
  },
  // Security: Require TLS
  secure: true,
  requireTLS: true,
  // Fail fast instead of hanging on blocked SMTP ports
  connectionTimeout: 5000,
  greetingTimeout: 5000,
  socketTimeout: 8000
});

// --- API Endpoints ---

// Root route: just a quick check to see if backend is running
app.get('/', (req, res) => {
  res.send('Node.js Backend for contact form is running!');
});

// SMTP health check (fails fast if SMTP is blocked)
app.get('/health/smtp', async (req, res) => {
  try {
    await transporter.verify();
    res.status(200).json({ status: 'success', message: 'SMTP connection OK' });
  } catch (error) {
    console.error('SMTP verify failed:', error);
    res.status(500).json({ status: 'error', message: 'SMTP verify failed', code: error.code || 'UNKNOWN' });
  }
});

// Main endpoint for sending emails from my contact form (with rate limiting)
app.post('/api/send-message', limiter, async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Comprehensive validation
    if (!name || !email || !message) {
      return res.status(400).json({ status: 'error', message: 'Name, email, and message are all required.' });
    }

    // Type validation
    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
      return res.status(400).json({ status: 'error', message: 'Invalid input format.' });
    }

    // Length validation
    if (name.length > 100 || email.length > 254 || message.length > 5000) {
      return res.status(400).json({ status: 'error', message: 'Input exceeds maximum allowed length.' });
    }

    if (name.length < 2 || message.length < 10) {
      return res.status(400).json({ status: 'error', message: 'Name must be at least 2 characters and message at least 10 characters.' });
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedMessage = sanitizeInput(message);
    const sanitizedEmail = email.trim().toLowerCase();

    // Validate email format
    if (!isValidEmail(sanitizedEmail)) {
      return res.status(400).json({ status: 'error', message: 'Invalid email address format.' });
    }

    // Validate name format
    if (!isValidName(sanitizedName)) {
      return res.status(400).json({ status: 'error', message: 'Invalid name format. Use only letters, spaces, hyphens, and apostrophes.' });
    }

    // Check for spam patterns
    const spamPatterns = [
      /http[s]?:\/\//gi,
      /www\./gi,
      /<script/gi,
      /javascript:/gi,
      /onclick/gi,
      /onerror/gi
    ];

    const isSpam = spamPatterns.some(pattern => 
      pattern.test(sanitizedMessage) || pattern.test(sanitizedName)
    );

    if (isSpam) {
      console.warn(`Spam attempt blocked from ${sanitizedEmail}`);
      return res.status(400).json({ status: 'error', message: 'Message contains prohibited content.' });
    }

    // Escape HTML for safe email display
    const escapedName = escapeHtml(sanitizedName);
    const escapedEmail = escapeHtml(sanitizedEmail);
    const escapedMessage = escapeHtml(sanitizedMessage);

    // Compose the email with sanitized and escaped content
    const mailOptions = {
      from: process.env.EMAIL_USER, // Send from my Gmail
      to: process.env.EMAIL_USER,   // Send to myself
      replyTo: sanitizedEmail,      // So I can reply directly to the sender
      subject: `New Message from Portfolio: ${escapedName}`,
      text: `You have received a new message from your portfolio website:\n\nName: ${sanitizedName}\nEmail: ${sanitizedEmail}\nMessage:\n${sanitizedMessage}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #4b6cb7; color: white; padding: 10px; text-align: center; }
            .content { padding: 20px; background: #f9f9f9; }
            .label { font-weight: bold; color: #4b6cb7; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Portfolio Contact Message</h2>
            </div>
            <div class="content">
              <p><span class="label">Name:</span> ${escapedName}</p>
              <p><span class="label">Email:</span> ${escapedEmail}</p>
              <p><span class="label">Message:</span></p>
              <p>${escapedMessage.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully from ${sanitizedEmail} by ${sanitizedName}`);
    res.status(200).json({ status: 'success', message: 'Your message has been sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to send your message. Please try again later.',
      code: error.code || 'UNKNOWN'
    });
  }
});

// Security: Disable x-powered-by header
app.disable('x-powered-by');

// 404 handler
app.use((req, res) => {
  res.status(404).json({ status: 'error', message: 'Endpoint not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ status: 'error', message: 'Internal server error' });
});

// Validate environment variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error('ERROR: EMAIL_USER and EMAIL_PASS environment variables must be set!');
  process.exit(1);
}

// Start the server (Render provides the port in ENV)
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Node.js Backend listening on port ${PORT}`);
  console.log(`Access locally at: http://localhost:${PORT}`);
  console.log('Security features enabled: Helmet, Rate Limiting, Input Validation');
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, closing server gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
