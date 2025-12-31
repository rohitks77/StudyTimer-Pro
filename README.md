# StudyTimer Pro - Website

This is the landing page website for the StudyTimer Pro Chrome Extension.

## Website URL
**https://timerstudy.rohitks.com.np**

## Files

- `index.html` - Main landing page
- `style.css` - Styling and responsive design
- `script.js` - Interactive features and animations

## Features

The website includes:

✅ **Hero Section** - Eye-catching introduction with CTA buttons
✅ **Features Grid** - Showcases all 12+ extension features
✅ **How It Works** - 3-step guide to get started
✅ **Screenshots** - Visual preview of the extension
✅ **Privacy Section** - Highlights privacy-first approach
✅ **Contact Section** - Email and support information
✅ **Responsive Design** - Works on mobile, tablet, and desktop
✅ **Smooth Animations** - Scroll-triggered animations
✅ **SEO Optimized** - Meta tags and Open Graph tags

## Deployment

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload website files
3. Enable GitHub Pages in repository settings
4. Point your domain to GitHub Pages

### Option 2: Netlify (Free)
1. Sign up at netlify.com
2. Drag & drop the `website` folder
3. Connect your custom domain
4. Auto-deploys on updates

### Option 3: Your Own Server
1. Upload files via FTP/SFTP
2. Point domain to server IP
3. Configure web server (Apache/Nginx)

## Domain Configuration

Point `timerstudy.rohitks.com.np` to your hosting:

**For GitHub Pages:**
```
CNAME: timerstudy -> yourusername.github.io
```

**For Netlify:**
```
CNAME: timerstudy -> your-site-name.netlify.app
```

**For Custom Server:**
```
A Record: timerstudy -> YOUR_SERVER_IP
```

## Before Publishing

1. **Replace Chrome Web Store URL:**
   - In `script.js`, replace `YOUR_EXTENSION_ID` with actual extension ID
   - Update all `.install-btn` links in `index.html`

2. **Add Screenshots:**
   - Take 4-5 screenshots of extension
   - Save as `screenshot-1.png`, `screenshot-2.png`, etc.
   - Update image paths in HTML

3. **Create Preview Image:**
   - Create `images/preview.png` (1200x630px)
   - For social media sharing

4. **Test Locally:**
   - Open `index.html` in browser
   - Test all links and buttons
   - Check responsive design

## Local Testing

Simply open `index.html` in your browser, or use a local server:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

## License

Copyright © 2025 Rohit K.S. All rights reserved.

---

Made with ❤️ for students
