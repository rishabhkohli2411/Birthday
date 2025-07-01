# 💖 Birthday Website for My Girlfriend

A beautiful, romantic, and interactive birthday website built with HTML, CSS, and JavaScript.

## 🎨 Features

- **Hero Section** with animated confetti and floating hearts
- **Countdown Timer** to her birthday
- **Photo Gallery** with hover effects
- **Interactive "Reasons I Love You"** section
- **Romantic Closing Note**
- **Fully Responsive** design for all devices
- **Smooth Animations** using AOS.js

## 🚀 Setup Instructions

### 1. Customize the Content

Before deploying, make sure to customize:

- **Her Name**: In `index.html`, change "Sarah" to her actual name
- **Birthday Date**: In `script.js`, update the `birthdayDate` variable:
  ```javascript
  const birthdayDate = new Date('2024-12-25 00:00:00').getTime(); // Change this date
  ```
- **Love Reasons**: In `script.js`, customize the `reasons` array with your personal messages
- **Photos**: Add your photos to the `images/` folder (photo1.jpg, photo2.jpg, etc.)
- **Closing Message**: Update the closing paragraph in `index.html`

### 2. Add Photos

Create an `images/` folder and add:
- `photo1.jpg` (recommended size: 400x400px)
- `photo2.jpg`
- `photo3.jpg`
- `photo4.jpg`
- Optionally: `hero-bg.jpg` for a custom hero background

### 3. Deploy to GitHub Pages

1. **Create a new repository** on GitHub
2. **Upload all files** to the repository:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `images/` folder with photos
   - `README.md`

3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Access your website**:
   - Your site will be available at: `https://yourusername.github.io/repositoryname`
   - It may take 5-10 minutes to be live

### 4. Alternative Deployment Options

- **Netlify**: Drag and drop the folder to netlify.app
- **Vercel**: Connect your GitHub repository
- **GitHub Codespaces**: Preview directly in the browser

## 🎭 Customization Tips

- **Colors**: Modify the CSS gradient colors in `styles.css`
- **Fonts**: Change the Google Font in `index.html`
- **Animations**: Adjust AOS animation types and durations
- **Layout**: Modify the grid layouts for different photo arrangements

## 💝 What Makes This Special

- **No frameworks needed** - pure HTML, CSS, and JavaScript
- **Fast loading** - optimized for quick deployment
- **Mobile-first** - looks great on all devices
- **Interactive elements** - keeps her engaged
- **Personal touch** - easily customizable with your content

## 🛠️ Technical Details

- **HTML5** semantic structure
- **CSS3** with Flexbox and Grid
- **Vanilla JavaScript** for interactivity
- **AOS.js** for scroll animations
- **Confetti.js** for celebration effects
- **Google Fonts** (Poppins) for typography

---

Made with 💖 for the most amazing software engineer in the world!