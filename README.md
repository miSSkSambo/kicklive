# ⚽ KickLive — Create teams & live score

**KickLive** lets you create teams, start a match, track live scores with a timer, and save match history — all in a single static HTML file. It works offline via `localStorage`, and you can optionally enable realtime sync across browsers using a lightweight WebSocket relay.

<p align="left">
  <img src="assets/logo.svg" alt="KickLive logo" width="96" height="96">
</p>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Made with HTML5](https://img.shields.io/badge/HTML5-✔-e34f26)](#)
[![CSS3](https://img.shields.io/badge/CSS3-✔-2965f1)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-✔-f7df1e)](#)

## ✨ Features
- Team builder with saved roster
- Live scoreboard, timer, goal events, reset
- Animated ball, pulse ring on goals, and confetti on big leads
- Match history with quick details
- Optional realtime sync (WebSocket relay)

## 🚀 Quick start
**No build step needed.**
```bash
# 1) Open locally
open index.html  # or double-click in your file explorer

# 2) Or serve (recommended)
python -m http.server 8080
# visit http://localhost:8080
```

## 🌐 Deploy to GitHub Pages
1. Create a new GitHub repo (e.g., `kicklive`) and push this project.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source = Deploy from a branch**.
4. Choose **Branch = main** and **Folder = /**, then **Save**.
5. Your site will be live at: `https://<your-username>.github.io/kicklive/`.

> Tip: If your site is nested (e.g., `/kicklive/`), it will still work since all links are relative.

## 🔁 Optional: Realtime WebSocket
Edit `WS_URL` at the top of `index.html` to your relay (e.g., `ws://localhost:8787`). A tiny Node relay is included:

```bash
npm install
node server.js
```

## 📁 Structure
```
.
├─ index.html          # App UI + logic
├─ assets/
│  ├─ logo.svg         # App logo
│  └─ favicon.png      # Favicon (placeholder)
├─ README.md
├─ LICENSE
├─ .gitignore
├─ package.json        # For optional WS relay
└─ server.js           # Minimal Node WebSocket relay
```

## 📝 License
MIT — see [LICENSE](LICENSE).
