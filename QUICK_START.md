# Quick Start: Install Tarot App on iPhone

## 3-Minute Installation Guide

### Prerequisites
- iPhone with iOS 13 or later
- Internet connection (for first install only)
- Safari browser

### Installation Steps

#### Step 1: Visit the App URL
Open Safari on your iPhone and navigate to one of these URLs (pick one):

- **GitHub Pages**: `https://YOUR_USERNAME.github.io/tarot-app/`
- **Netlify**: `https://your-tarot-app.netlify.app/`
- **Vercel**: `https://your-tarot-app.vercel.app/`
- **Your Server**: `https://yourdomain.com/tarot-app/`

> ⚠️ **Important**: Must be HTTPS (not HTTP). Service Worker requires secure connection.

#### Step 2: Add to Home Screen
1. Tap the **Share** button (bottom menu, arrow pointing up)
2. Scroll down and tap **Add to Home Screen**
3. Choose icon (should show app icon)
4. Confirm name: "Tarot de Marsella"
5. Tap **Add**

#### Step 3: Open App
1. Close Safari
2. Find "Tarot de Marsella" on home screen
3. Tap to open

> **First time**: App may take 1-2 seconds to load (caching assets)
> **Subsequent times**: Opens in <500ms

---

## What You'll See

### Splash Screen (During Launch)
- Dark blue background with gold accents
- Mystical tarot design
- Appears for ~1 second

### Main Menu
Three options:
- **Tirada de 1 Carta** (Single Card Reading)
- **Tirada de 2 Cartas** (Two Card Reading)
- **Interpretaciones** (Card Meanings)

### Shuffle Screen
1. Tap **Barajar** (Shuffle) - deck wiggles and throws right 3 times
2. Tap the deck - cards deal out one by one
3. Tap a card - it flips with slow animation
4. See interpretation appear below

### Interpretation Screen
- Large card image (close-up)
- Card name and meaning
- Advice/counsel
- Previous/Next arrows to navigate

---

## Features

✨ **Animations**
- Smooth shuffle with visual feedback
- Sequential card dealing
- Slow flip animation (1.4 seconds)
- Glowing card reveal effect

🌙 **Mystical Design**
- Dark blue and gold theme
- Animated starfield background
- Nebula fog effect
- Custom splash screen

📱 **Mobile Optimized**
- Fullscreen mode (no address bar)
- Touch-friendly cards
- Responsive layout
- Optimized for iPhone screen

🔌 **Offline Support**
- Works completely without internet
- All features available offline
- Fast loading from cache

---

## Tips

### Performance
- **First load**: Give it 1-2 seconds to cache images
- **Subsequent loads**: Opens instantly
- **Smooth animations**: All 60fps on iPhone

### Offline Usage
1. Works perfectly with Airplane Mode on
2. First visit should be connected to internet
3. All 22 cards and interpretations available offline

### If Something Goes Wrong
1. Force close: Swipe up from bottom (or use App Switcher)
2. Reopen from home screen
3. If still issues: Remove from home screen and reinstall

---

## What's Different from Website

| Feature | App (PWA) | Website |
|---------|-----------|---------|
| Address Bar | ❌ Hidden | ✅ Visible |
| Offline | ✅ Full | ❌ None |
| Splash Screen | ✅ Custom | ❌ None |
| App Icon | ✅ Yes | ❌ No |
| Speed | ⚡ Instant | 📊 Cached |
| Home Screen | ✅ Easy Access | ❌ Bookmark |

---

## Data & Privacy

- **No Network Required**: App works offline
- **No Cloud Sync**: All data stays on your phone
- **No Tracking**: No analytics or ads
- **No Permissions**: Doesn't request camera, location, etc.
- **No Data Collection**: Purely local application

---

## Troubleshooting

### App won't install?
- ✅ Make sure you're using Safari (not Chrome)
- ✅ Verify URL is HTTPS (not HTTP)
- ✅ Try again in a few seconds

### Splash screen doesn't appear?
- ✅ Close app completely (not just minimize)
- ✅ Clear Safari cache and reopen
- ✅ Reinstall app (remove and re-add to home screen)

### Cards not showing offline?
- ✅ First visit must be connected to internet (to cache images)
- ✅ Close and reopen app
- ✅ Check Settings → Safari → Clear History (only history, not data)

### App is slow?
- ✅ Force close and reopen
- ✅ Close other apps to free up memory
- ✅ Restart iPhone if frequent

---

## Support

If you encounter issues:
1. Note what was happening when problem occurred
2. Check browser console (Safari → Develop → Console)
3. Try uninstalling and reinstalling app
4. Report issue with steps to reproduce

---

## Version Information

- **Current Version**: 1.0
- **Service Worker Cache**: v18
- **iOS Minimum**: iOS 13+
- **iPhone Models**: iPhone 6 and newer
- **Last Updated**: December 2025

---

## Enjoy Your Mystical Tarot Reader! 🔮✨
