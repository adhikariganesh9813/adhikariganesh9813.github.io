# ganadhik.github.io.backend

Secure Node.js backend for handling contact form submissions from my portfolio website.

## Security Features

✅ **Rate Limiting**: Prevents spam and DoS attacks (5 requests per 15 minutes per IP)  
✅ **Input Validation**: Comprehensive validation and sanitization of all inputs  
✅ **XSS Protection**: HTML escaping and tag removal  
✅ **Security Headers**: Helmet.js with CSP, HSTS, X-Frame-Options  
✅ **CORS Protection**: Strict origin checking  
✅ **Email Security**: TLS required, header injection prevention  
✅ **Spam Detection**: Pattern-based filtering  
✅ **Error Handling**: Secure error responses  

## Installation

### Prerequisites
- Node.js 14+
- npm or yarn
- Gmail account with App Password

### Setup

1. **Clone and install dependencies**
```bash
cd ganadhik.github.io.backend
npm install
```

2. **Set up environment variables**

Copy the example file:
```bash
cp .env.example .env
```

Edit `.env` and add your credentials:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
PORT=3000
NODE_ENV=production
```

**Important**: Never commit `.env` to version control!

3. **Generate Gmail App Password**
   - Go to Google Account settings
   - Security → 2-Step Verification (must be enabled)
   - App passwords → Generate new
   - Use the generated password in `.env`

### Local Development

```bash
npm start
```

Server will run on `http://localhost:3000`

### Testing

Test the API endpoint:
```bash
curl -X POST http://localhost:3000/api/send-message \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Test message"}'
```

## Deployment (Render)

### Steps

1. **Push to GitHub**
```bash
git add .
git commit -m "Add secure backend"
git push
```

2. **Deploy to Render**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - New → Web Service
   - Connect your GitHub repository
   - Configure:
     - **Name**: ganadhik-github-io-backend
     - **Environment**: Node
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Instance Type**: Free

3. **Set Environment Variables in Render**
   - Go to Environment section
   - Add:
     - `EMAIL_USER`: your-email@gmail.com
     - `EMAIL_PASS`: your-app-password
     - `NODE_ENV`: production

4. **Update Frontend**

In your frontend `script.js`, update the backend URL:
```javascript
const BACKEND_URL = 'https://your-app-name.onrender.com';
```

## API Documentation

### POST /api/send-message

Sends a contact form message via email.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, this is a test message."
}
```

**Validation Rules:**
- `name`: 2-100 characters, letters/spaces/hyphens/apostrophes only
- `email`: Valid email format, max 254 characters
- `message`: 10-5000 characters, no HTML/scripts

**Success Response (200):**
```json
{
  "status": "success",
  "message": "Your message has been sent successfully!"
}
```

**Error Responses:**

400 Bad Request:
```json
{
  "status": "error",
  "message": "Invalid email address format."
}
```

429 Too Many Requests:
```json
{
  "status": "error",
  "message": "Too many requests, please try again later."
}
```

500 Internal Server Error:
```json
{
  "status": "error",
  "message": "Failed to send your message. Please try again later."
}
```

## Security Maintenance

### Regular Tasks

1. **Update dependencies monthly**
```bash
npm update
npm audit fix
```

2. **Check for vulnerabilities**
```bash
npm audit
```

3. **Monitor logs in Render dashboard**

4. **Review rate limit effectiveness**

### Security Checklist

- [ ] Environment variables set in Render
- [ ] `.env` not committed to Git
- [ ] CORS origin matches your domain
- [ ] Gmail App Password (not account password)
- [ ] Dependencies up to date
- [ ] HTTPS enabled (automatic on Render)

## Troubleshooting

### "Too many requests" error
- Wait 15 minutes before trying again
- Check if you're being rate-limited
- Adjust limits in `server.js` if legitimate traffic

### Email not sending
- Verify EMAIL_USER and EMAIL_PASS in Render env vars
- Confirm Gmail App Password is correct
- Check Gmail security settings
- Review Render logs for errors

### CORS errors
- Verify frontend domain matches CORS origin in `server.js`
- Check browser console for specific CORS error
- Ensure credentials are enabled in frontend fetch

### Rate limit too strict
Adjust in `server.js`:
```javascript
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // Time window
  max: 10, // Increase max requests
});
```

## License

ISC

## Contact

For security issues, please report privately.
