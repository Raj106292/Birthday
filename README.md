# Shruti Birthday Wish

A private React birthday microsite for Pratishruti Sharma, built with Vite.

## Features

- Animated birthday intro gate for 29 May
- Personalized message for Shruti
- Music playback with visualizer
- Automatic fireworks and confetti
- Animated nine-photo gallery with lightbox
- Seven-year relationship timeline
- Love counter and birthday countdown
- Private notes, hidden secret message, memory jar, and birthday certificate
- Responsive layout for desktop and mobile

## Local Setup

```bash
npm install
npm run dev
```

Open:

```text
http://127.0.0.1:5173
```

## Build

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Assets

The app uses static files from:

```text
public/assets/images/optimized/
public/assets/music/
```

Expected music file:

```text
public/assets/music/birthday-song.mp3
```

Optimized images used by the app are in `public/assets/images/optimized/`. Original full-size photos can be kept locally in `local-originals/images/`, which is intentionally ignored by Git.

## Deployment

This app can be deployed as a static Vite site on GitHub Pages, Netlify, Vercel, or Cloudflare Pages.

For GitHub Pages, set the build command to:

```bash
npm run build
```

And publish the `dist` folder.
