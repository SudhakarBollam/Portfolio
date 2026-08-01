# 🚀 Sudhakar's Modern Full-Stack Portfolio

A production-ready, modern portfolio built with **Next.js**, **Tailwind CSS**, **Framer Motion**, **Node.js**, and **Express**.

## 📋 Features

### Frontend
- ✨ Modern, futuristic dark-themed design with neon accents
- 🎨 Component-based architecture with React & TypeScript
- 🔄 Smooth animations and micro-interactions with Framer Motion
- 📱 Fully responsive (mobile, tablet, desktop)
- ♿ Accessibility-first (ARIA labels, keyboard navigation)
- 🔍 SEO-optimized with proper meta tags
- ⚡ Image optimization and lazy loading
- 🌙 Dark theme with custom design tokens
- 🎯 Smooth scroll navigation

### Sections Included
1. **Hero** - Animated intro with CTA buttons
2. **About** - Professional biography with education timeline
3. **Skills** - Categorized with visual skill bars
4. **Experience** - Timeline of achievements
5. **Projects** - Featured projects with links
6. **Contact** - Functional contact form with email integration
7. **Footer** - Social links and quick navigation

### Backend
- 🔌 REST API with Express.js
- 📧 Email sending with Nodemailer
- ✅ Form validation with express-validator
- 🛡️ Rate limiting on contact endpoint
- 🔐 Environment variable protection
- 📝 HTML email templates
- ⚙️ CORS configuration

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Axios** - HTTP client
- **Lucide React** - Icons

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **Nodemailer** - Email service
- **express-validator** - Input validation
- **dotenv** - Environment variables
- **CORS** - Cross-origin requests

## 📁 Project Structure

```
portfolio/
├── frontend/                 # Next.js Application
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/          # Reusable React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   ├── constants.ts     # Portfolio data
│   │   ├── animations.ts    # Framer Motion configs
│   │   └── api.ts           # Backend API calls
│   ├── public/              # Static files
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── package.json
│
├── backend/                 # Express API
│   ├── src/
│   │   ├── server.js        # Entry point
│   │   ├── routes/
│   │   │   └── contact.js   # Contact endpoints
│   │   ├── controllers/
│   │   │   └── contactController.js
│   │   └── utils/
│   │       ├── emailService.js
│   │       ├── emailTemplates.js
│   │       └── validators.js
│   ├── .env.example
│   └── package.json
│
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Git**
- Email account (Gmail, SendGrid, or SMTP server)

### Frontend Setup

#### 1. Install dependencies
```bash
cd frontend
npm install
```

#### 2. Create environment file
```bash
cp .env.example .env.local
```

#### 3. Update `.env.local`
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

#### 4. Run development server
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

#### 5. Build for production
```bash
npm run build
npm start
```

### Backend Setup

#### 1. Install dependencies
```bash
cd backend
npm install
```

#### 2. Create environment file
```bash
cp .env.example .env
```

#### 3. Configure email service

**Option A: Gmail (Recommended)**
1. Enable 2-Factor Authentication on your Google account
2. Create an App Password: https://myaccount.google.com/apppasswords
3. Copy the 16-character password
4. Update `.env`:
```env
EMAIL_SERVICE=gmail
EMAIL_USER=your.email@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
PORTFOLIO_EMAIL=your.email@gmail.com
```

**Option B: SendGrid**
1. Create SendGrid account: https://sendgrid.com
2. Generate API key
3. Update `.env`:
```env
EMAIL_SERVICE=sendgrid
SENDGRID_API_KEY=your_api_key
PORTFOLIO_EMAIL=your.email@example.com
```

**Option C: Custom SMTP**
```env
EMAIL_SERVICE=smtp
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your.email@example.com
SMTP_PASS=your_password
PORTFOLIO_EMAIL=your.email@example.com
```

**Option D: Ethereal (Testing only)**
1. Create free account: https://ethereal.email
2. Update `.env`:
```env
EMAIL_SERVICE=ethereal
ETHEREAL_HOST=smtp.ethereal.email
ETHEREAL_PORT=587
ETHEREAL_USER=your.ethereal.email@ethereal.email
ETHEREAL_PASS=your_password
```

#### 4. Run development server
```bash
npm run dev
```

Server runs on `http://localhost:5000`

#### 5. Test email configuration (development only)
```bash
curl -X POST http://localhost:5000/api/contact/test
```

#### 6. Build for production
```bash
npm run build
npm start
```

## 📧 Contact Form Email Flow

When a user submits the contact form:

1. **Frontend** validates form data
2. **Frontend** sends POST request to `/api/contact`
3. **Backend** validates input again
4. **Backend** sends email to portfolio owner
5. **Backend** optionally sends confirmation to user
6. **Backend** returns success response
7. **Frontend** shows success message

## 🔧 Customization Guide

### Update Portfolio Content

Edit `frontend/lib/constants.ts`:

```typescript
export const PROFILE = {
  name: 'Your Name',
  role: 'Your Role',
  // ... update other fields
};

export const SKILLS = {
  'Frontend': [ /* your skills */ ],
  // ... add more categories
};

export const PROJECTS = [ /* your projects */ ];
```

### Change Theme Colors

Edit `frontend/tailwind.config.ts`:

```typescript
colors: {
  'neon-cyan': '#your-color',
  'neon-pink': '#your-color',
  // ... customize other colors
}
```

### Customize Animations

Edit `frontend/lib/animations.ts` and `frontend/app/globals.css` to adjust animation speeds and effects.

## 🌐 Deployment

### Frontend Deployment (Vercel)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. **Deploy on Vercel**
   - Go to https://vercel.com
   - Import your repository
   - Set build command: `npm run build`
   - Set output directory: `.next`
   - Add environment variables:
     ```
     NEXT_PUBLIC_API_URL=https://your-backend-url.com/api
     ```
   - Deploy!

### Backend Deployment (Render)

1. **Create Render account**: https://render.com

2. **Create new Web Service**
   - Connect your GitHub repository
   - Set build command: `npm install`
   - Set start command: `npm start`
   - Set environment variables in Render dashboard:
     ```
     PORT=5000
     NODE_ENV=production
     FRONTEND_URL=https://your-frontend-url.vercel.app
     EMAIL_SERVICE=gmail
     EMAIL_USER=your.email@gmail.com
     EMAIL_PASSWORD=your_app_password
     PORTFOLIO_EMAIL=your.email@gmail.com
     ```
   - Deploy!

3. **Copy backend URL** (e.g., `https://portfolio-api.onrender.com`)

4. **Update frontend environment**
   - Redeploy frontend with updated `NEXT_PUBLIC_API_URL`

### Alternative Backend Options
- **Railway**: https://railway.app
- **Heroku**: https://heroku.com (free tier ended)
- **AWS Elastic Beanstalk**: https://aws.amazon.com/elasticbeanstalk
- **DigitalOcean App Platform**: https://www.digitalocean.com/products/app-platform

## 🔍 Environment Variables Checklist

### Frontend
- [ ] `NEXT_PUBLIC_API_URL` - Backend API URL

### Backend
- [ ] `PORT` - Server port (default: 5000)
- [ ] `NODE_ENV` - Environment (development/production)
- [ ] `FRONTEND_URL` - Frontend URL for CORS
- [ ] `EMAIL_SERVICE` - Email provider (gmail/sendgrid/smtp/ethereal)
- [ ] `EMAIL_USER` / `EMAIL_PASSWORD` - Email credentials
- [ ] `PORTFOLIO_EMAIL` - Email to receive submissions
- [ ] `EMAIL_FROM_NAME` - Sender name
- [ ] `EMAIL_FROM_ADDRESS` - Sender email
- [ ] `SEND_CONFIRMATION_EMAIL` - Send confirmation to user (true/false)

## 📊 Performance Optimization

- ✅ Image optimization with Next.js Image component
- ✅ Lazy loading for images
- ✅ Code splitting with React
- ✅ CSS purging with Tailwind
- ✅ Minification in production
- ✅ Compression with gzip
- ✅ Caching headers

## ♿ Accessibility Features

- ✅ Semantic HTML structure
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Focus visible states
- ✅ Color contrast compliance
- ✅ Skip to main content link
- ✅ Proper heading hierarchy
- ✅ Alt text for images

## 🔐 Security Best Practices

- ✅ Environment variables for sensitive data
- ✅ CORS configuration
- ✅ Input validation & sanitization
- ✅ Rate limiting on API endpoints
- ✅ No sensitive data in frontend code
- ✅ HTTPS in production
- ✅ Secure headers

## 🐛 Troubleshooting

### "Cannot POST /api/contact"
- ✅ Backend server is running on correct port
- ✅ CORS is properly configured
- ✅ Frontend API URL is correct

### Email not sending
- ✅ Check email service configuration
- ✅ Verify credentials are correct
- ✅ Check backend logs for errors
- ✅ For Gmail: ensure App Password is used, not regular password
- ✅ Test with Ethereal first for debugging

### Build errors
- ✅ Clear `.next` and `node_modules` folders
- ✅ Run `npm install` again
- ✅ Check TypeScript errors with `npm run type-check`

## 📚 Learning Resources

- **Next.js**: https://nextjs.org/docs
- **Framer Motion**: https://www.framer.com/motion
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Express.js**: https://expressjs.com
- **Nodemailer**: https://nodemailer.com
- **TypeScript**: https://www.typescriptlang.org/docs

## 📄 License

This project is open source and available for your use.

## 👤 Author

**Sudhakar Bollam**
- Portfolio: https://sudhakar-portfolio.vercel.app
- LinkedIn: https://linkedin.com/in/sudhakarbollam
- GitHub: https://github.com/sudhakarbollam
- Email: sudhakarbollam711948@gmail.com

## 🤝 Support

If you encounter any issues or have questions, feel free to:
1. Check the troubleshooting section
2. Review environment variables
3. Check backend/frontend logs
4. Create an issue on GitHub

---

**Happy coding! 🎉**
