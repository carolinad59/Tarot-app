# 🔮 Tarot de Marsella - iPhone PWA

A mystical tarot reading app optimized for iPhone home screen installation with complete offline support.

## ✨ Features

### Game Features
- **22 Major Arcana Cards** - Full tarot deck with authentic imagery
- **Two Tirada Modes** - Single card or two-card readings
- **Interpretations** - Deep meanings and advice for each card
- **Smooth Animations** - Shuffle, deal, flip, and glow effects

### Design & Experience
- **Mystical Aesthetic** - Dark theme with gold accents
- **Animated Background** - Starfield (40s) + nebula drift (20s)
- **Responsive Layout** - Optimized for iPhone 390px width
- **Smooth Animations** - 60fps CSS-only animations

### PWA Features
- **Offline Support** - Service Worker caches all assets
- **Fullscreen Mode** - No address bar on iPhone
- **Custom Splash Screen** - Professional launch experience
- **Home Screen Icon** - Native app-like installation
- **Fast Loading** - <500ms from cache on subsequent visits

## 🚀 Quick Start

### For Users (iPhone)
1. Open Safari and visit the deployed URL
2. Tap Share → Add to Home Screen
3. Tap app from home screen to launch

See [QUICK_START.md](./QUICK_START.md) for detailed instructions.

### For Developers (Local Testing)

#### Prerequisites
- Python 3
- No other dependencies (vanilla JS, CSS, HTML)

#### Setup
```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/tarot-app.git
cd tarot-app

# Start local server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

#### Test Service Worker
1. Open DevTools (F12 or Cmd+Option+I)
2. Go to Application tab
3. Check Service Worker is installed
4. Go to Network tab and toggle offline mode
5. App should still work completely

## 📁 Project Structure

```
tarot-app/
├── index.html                 # Main app interface
├── app.js                     # Game logic (16KB)
├── style.css                  # Responsive design (3.2KB)
├── service-worker.js          # Offline support
├── manifest.json              # PWA metadata
├── splash-screen.png          # Launch screen (20KB)
├── icon-192.png              # Home icon (192x192)
├── icon-512.png              # App icon (512x512)
├── screenshot-540x720.png    # Install preview
└── fotos/                     # Tarot card images
    ├── 0 Loco.jpg
    ├── 1 Mago.jpg
    └── ... (22 cards total)
```

## 🎨 Design Specs

### Colors
- **Primary**: Dark Blue `#0b132b`
- **Accent**: Gold `#d4af37`
- **Secondary**: Blue `#1c2541`

### Animations
- **Shuffle**: 3 throws, 1.4s total
- **Deal**: Sequential, 140ms stagger
- **Flip**: 1.4s slow rotation
- **Glow**: 1.2s pulsing on reveal

### Layout
- **Play Area**: 360x720px (4-column grid)
- **Card Size**: 55x106px
- **Viewport**: 390px width (iPhone 15)

## 🔧 Technology

### Core Stack
- **HTML5**: Semantic markup
- **CSS3**: Animations, gradients, responsive design
- **JavaScript**: Vanilla (no frameworks)
- **Service Worker**: Offline caching

### Browser Support
- **iOS**: Safari 13+
- **Android**: Chrome 67+
- **Desktop**: All modern browsers

## 📊 Performance

- **Initial Load**: 1-2 seconds (on 4G)
- **Cached Load**: <500ms
- **Animation FPS**: 60fps
- **App Size**: ~3.5MB (with images)
- **Cache Strategy**: Cache-first with network fallback

## 🌐 Deployment

### Recommended: GitHub Pages (Free)
```bash
git push origin main
# Enable Pages in Settings → Pages
# Available at: https://USERNAME.github.io/tarot-app/
```

### Alternative: Netlify
- Connect GitHub repo
- Auto-deploys on push
- Free custom domain available

### Alternative: Vercel
- Zero-config deployment
- Fastest CDN
- Free hosting

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## ✅ PWA Checklist

- [x] Manifest.json with all metadata
- [x] Service Worker with offline support
- [x] HTTPS available
- [x] Responsive design (390px viewport)
- [x] Fast loading (<3s first, <1s cached)
- [x] App icon and splash screen
- [x] No console errors
- [x] Works offline
- [x] Installable on home screen
- [x] Fullscreen mode on iOS

See [PWA_IPHONE_CHECKLIST.md](./PWA_IPHONE_CHECKLIST.md) for detailed verification.

## 🐛 Troubleshooting

### App won't install?
- Ensure HTTPS (not HTTP)
- Use Safari (not Chrome)
- Check internet connection

### Offline not working?
- First visit must be connected
- Service Worker must be installed
- Check DevTools → Application → Service Workers

### Splash screen missing?
- File must be named `splash-screen.png`
- Must be in root directory
- Clear Safari cache and reinstall

See [QUICK_START.md](./QUICK_START.md) for more troubleshooting.

## 📚 Documentation

- [QUICK_START.md](./QUICK_START.md) - Installation guide for users
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment instructions
- [PWA_IPHONE_CHECKLIST.md](./PWA_IPHONE_CHECKLIST.md) - Technical checklist

## 🎯 Future Enhancements

- [ ] Minor arcana (56 additional cards)
- [ ] Multiple language support
- [ ] Daily tarot reminders
- [ ] App Store distribution
- [ ] Custom deck designs
- [ ] Dark/light theme toggle
- [ ] Sharing readings feature

## 📄 License

Free to use and modify. Feel free to customize for personal or commercial use.

## 👤 Author

Created with ✨ for mystical tarot enthusiasts.

---

**Version**: 1.0
**Last Updated**: December 2025
**Service Worker**: v18
**iOS Minimum**: iOS 13+

---

## Getting Help

1. Check [QUICK_START.md](./QUICK_START.md) for user issues
2. Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment
3. Check [PWA_IPHONE_CHECKLIST.md](./PWA_IPHONE_CHECKLIST.md) for technical
4. Review browser console for error messages
5. Test with hard refresh: Cmd+Shift+R (Safari)

---

Made with 🔮 for iPhone users everywhere.
