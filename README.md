# ganadhik.github.io

Personal portfolio website showcasing my projects, research, and professional experience.

## 🛡️ Security

This website implements comprehensive security measures including:

- **XSS Protection**: Input sanitization and output encoding
- **CSRF Protection**: Same-origin policy and CORS restrictions
- **Rate Limiting**: Prevents spam and DoS attacks
- **Secure Headers**: CSP, HSTS, X-Frame-Options, etc.
- **Input Validation**: Client and server-side validation
- **Email Security**: TLS encryption and injection prevention

See [SECURITY.md](SECURITY.md) for detailed security documentation.

## 🚀 Features

- **Responsive Design**: Works on all devices
- **Focus Mode**: Productivity timer with water break reminders
- **Contact Form**: Secure backend integration
- **Project Portfolio**: Filterable project showcase
- **Session Stats**: Real-time productivity tracking

## 🏗️ Tech Stack

### Frontend
- HTML5, CSS3, JavaScript (ES6+)
- Google Fonts (Poppins)
- Font Awesome icons
- Responsive grid layout

### Backend
- Node.js + Express
- Nodemailer for email
- Helmet.js for security headers
- express-rate-limit for DoS protection
- validator for input validation

## 📦 Installation

### Prerequisites
- Modern web browser
- Node.js 14+ (for backend)
- Gmail account (for contact form)

### Frontend (GitHub Pages)

1. Clone the repository
```bash
git clone https://github.com/adhikariganesh9813/adhikariganesh9813.github.io.git
cd adhikariganesh9813.github.io
```

2. Open `index.html` in your browser or deploy to GitHub Pages

### Backend Setup

See [ganadhik.github.io.backend/README.md](ganadhik.github.io.backend/README.md) for detailed backend setup instructions.

## 🔒 Security Configuration

### Before Deployment

1. **Backend Environment Variables**
   - Set up Gmail App Password
   - Configure environment variables in Render
   - See backend README for details

2. **Frontend Configuration**
   - Update `BACKEND_URL` in `script.js`
   - Verify CORS settings match your domain

3. **Install Dependencies**
```bash
cd ganadhik.github.io.backend
npm install
```

## 🌐 Deployment

### Frontend (GitHub Pages)
1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. Site will be live at `https://adhikariganesh9813.github.io`

### Backend (Render)
1. Connect GitHub repository to Render
2. Configure environment variables
3. Deploy web service
4. Update frontend with backend URL

## 📁 Project Structure

```
.
├── index.html              # Main page
├── electron-app/focus.html # Focus mode page (Electron only)
├── css/style.css           # Main styles
├── js/script.js            # Main JavaScript (with security)
├── SECURITY.md             # Security documentation
├── .well-known/
│   └── security.txt        # Security disclosure policy
└── ganadhik.github.io.backend/
    ├── server.js           # Secure Express server
    ├── package.json        # Backend dependencies
    ├── .env.example        # Environment template
    └── README.md           # Backend documentation
```

## 🔧 Configuration

### Contact Form Backend URL

In `script.js`, update:
```javascript
const BACKEND_URL = 'https://your-backend.onrender.com';
```

### CORS Origin

In `server.js`, update:
```javascript
const corsOptions = {
  origin: 'https://your-github-username.github.io',
  // ...
};
```

## 🧪 Testing

### Test Contact Form Locally

1. Start backend:
```bash
cd ganadhik.github.io.backend
npm start
```

2. Open `index.html` in browser

3. Fill out contact form and submit

### Security Testing

```bash
# Check for vulnerabilities
cd ganadhik.github.io.backend
npm audit

# Update dependencies
npm update
```

## 📝 License

ISC

## 👤 Author

**Ganesh Adhikari**
- GitHub: [@adhikariganesh9813](https://github.com/adhikariganesh9813)
- LinkedIn: [Ganesh Adhikari](https://www.linkedin.com/in/ganesh-adhikari-148918101)

## 🤝 Contributing

This is a personal portfolio. For security issues, please report responsibly via GitHub.

## 📜 Changelog

### January 2026
- ✅ Added comprehensive security measures
- ✅ Implemented rate limiting
- ✅ Added input validation and sanitization
- ✅ Added security headers and CSP
- ✅ Implemented spam detection

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Render for backend hosting
- GitHub Pages for frontend hosting
