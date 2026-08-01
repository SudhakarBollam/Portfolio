# 🚀 DEPLOYMENT QUICK START

## Complete Checklist Before Deployment

### Pre-Deployment
- [ ] All npm dependencies installed (`npm install`)
- [ ] Email service configured in `.env`
- [ ] Frontend customization complete (`constants.ts`)
- [ ] Resume PDF added to `/public/resume.pdf`
- [ ] All images updated
- [ ] Tested locally: `npm run dev` on both servers
- [ ] Contact form tested and emails working
- [ ] No console errors or warnings

---

## DEPLOYMENT STEPS

### STEP 1: Push to GitHub

```bash
cd e:\Portfolio

# Initialize git if needed
git config --global user.name "Your Name"
git config --global user.email "your.email@gmail.com"

# Create repository
git init
git add .
git commit -m "Modern full-stack portfolio - production ready"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

---

### STEP 2: Deploy Frontend on Vercel

1. **Go to**: https://vercel.com/new
2. **Import your GitHub repo**: `portfolio`
3. **Click Import** (settings auto-fill)
4. **Deploy** (takes ~2-3 minutes)
5. **Get your URL**: e.g., `portfolio-gamma-nine.vercel.app`

✅ **You now have a live frontend!**

---

### STEP 3: Deploy Backend on Render

1. **Go to**: https://render.com/dashboard
2. **New Web Service**
3. **Connect GitHub Account** (if not already)
4. **Select repository**: `portfolio`
5. **Configure:**
   - **Name**: `portfolio-api`
   - **Branch**: `main`
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`

6. **Environment Variables**: Click "Add Environment Variable" and add:

```
PORT=10000
NODE_ENV=production
FRONTEND_URL=https://YOUR_VERCEL_DOMAIN.vercel.app
EMAIL_SERVICE=gmail
EMAIL_USER=your.email@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
PORTFOLIO_EMAIL=your.email@gmail.com
EMAIL_FROM_NAME=Sudhakar
EMAIL_FROM_ADDRESS=your.email@gmail.com
SEND_CONFIRMATION_EMAIL=true
```

7. **Deploy** (takes ~3-5 minutes)
8. **Get your URL**: e.g., `portfolio-api.onrender.com`

✅ **You now have a live backend!**

---

### STEP 4: Connect Frontend to Backend

1. **Go to Vercel Dashboard**
2. **Select your project**: `portfolio`
3. **Settings → Environment Variables**
4. **Add new variable**:
   - **Name**: `NEXT_PUBLIC_API_URL`
   - **Value**: `https://portfolio-api.onrender.com/api` (use YOUR backend URL)
5. **Save**
6. **Redeploy**: Click "Deployments" → Select latest → Click "Redeploy"

✅ **Connected!**

---

### STEP 5: Test Everything

1. **Open**: https://YOUR_VERCEL_DOMAIN.vercel.app
2. **Fill contact form**
3. **Submit**
4. **Check email** - You should receive the message
5. **Success!** 🎉

---

## URLs Reference

**Frontend**: https://YOUR_VERCEL_DOMAIN.vercel.app  
**Backend**: https://portfolio-api.onrender.com/api  
**GitHub**: https://github.com/YOUR_USERNAME/portfolio

---

## Common Issues & Fixes

### "Cannot POST /api/contact" Error
**Problem**: Frontend can't reach backend  
**Solution**: Check `NEXT_PUBLIC_API_URL` in Vercel environment variables

### Email not sending
**Problem**: Email configuration incorrect  
**Solution**: Check Render environment variables are correct

### Render app goes to sleep
**Problem**: Free tier Render goes offline after 15 mins inactivity  
**Solution**: Upgrade to paid, or use Heroku/Railway instead

### GitHub not connecting
**Problem**: Permission denied  
**Solution**: 
1. Go to https://github.com/settings/tokens
2. Generate new token (repo access)
3. Copy token
4. Go to https://render.com/dashboard/settings/repos
5. Re-authenticate with token

---

## Next: Custom Domain (Optional)

### Add Custom Domain on Vercel
1. **Vercel Dashboard → Settings → Domains**
2. **Add Domain**: `yourportfolio.com`
3. **Follow DNS instructions**
4. **Takes ~24-48 hours to propagate**

### Add Custom Domain on Render
1. **Render Dashboard → Settings → Custom Domains**
2. **Add Domain**: `api.yourportfolio.com`
3. **Follow DNS instructions**

---

## Performance Monitoring

### Vercel Analytics
- Automatic in dashboard
- Shows page load times
- Shows Core Web Vitals

### Render Logs
- Dashboard → Log tail
- Shows server errors
- Check if emails sending

### Test API Response
```bash
curl https://portfolio-api.onrender.com/api/health
```

Should return:
```json
{
  "status": "ok",
  "message": "Portfolio API is running"
}
```

---

## Troubleshooting Email After Deployment

**If emails not working:**

1. **Check Render logs**
   ```
   Render Dashboard → Logs
   ```

2. **Check Vercel logs**
   ```
   Vercel Dashboard → Deployments → Details
   ```

3. **Test backend directly**
   ```
   curl -X POST https://portfolio-api.onrender.com/api/contact/test
   ```
   (Development only)

4. **Verify email credentials**
   - Gmail: Use App Password, not regular password
   - Ethereal: Check credentials at ethereal.email

5. **Check CORS**
   - Render's `FRONTEND_URL` must match your Vercel domain

---

## 🎉 You're Live!

Your portfolio is now:
- ✅ Hosted on Vercel (Frontend)
- ✅ Hosted on Render (Backend)
- ✅ Receiving emails
- ✅ Ready for recruiters

**Share your portfolio URL and get those opportunities! 🚀**

---

## Updating After Deployment

Any changes to code:
```bash
git add .
git commit -m "Your changes"
git push origin main
```

Both Vercel and Render auto-deploy on push!

---

**Questions? Check the main README.md for detailed documentation.**
