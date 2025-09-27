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

..................................................................................................................................................................................................................................................................................................................................................................................
https://kicklive07.oneapp.dev/

Kick live is a sleek, interactive web app designed to help students and casual football (soccer) leagues easily create teams, schedule matches, and track live scores in real-time. The app offers a user-friendly interface with smooth animations and optional WebSocket support for real-time synchronization across browsers.

Features -Team Builder: Create and manage multiple teams by entering a team name and a short tag (3-4 letters). Easily clear all teams and reset your workspace.

-Match Setup: Select home and away teams from the created team list to start a live match. Prevents selection of the same team on both sides.

-Live Score Tracking: Update scores manually with goal buttons for home and away teams. View scores in a clear scoreboard layout with team names and tags.

-Match Timer: Built-in timer to track match duration, automatically starting and pausing with the match lifecycle.

-Auto-play Mode: Simulate match events randomly with an auto-play button, making the match more dynamic and engaging.

-Match History: Keep a log of past matches with scores, dates, and notes. Click on past matches for detailed match info.

-Animated Soccer Pitch: Includes a visually appealing animated soccer ball with bounce effects and goal celebration animations (confetti).

-Goal Pulse Animation: A goal pulse effect visually highlights when a goal is scored.

-Local Persistence & Optional Realtime Sync: Data is saved locally using localStorage to persist teams, match status, and history. Optionally supports WebSocket connection for syncing data across multiple clients.

-Responsive Design: Mobile-friendly layout adjusts grid and font sizes for smaller screens.

.........................................................................................................................................................................................
#How to Use
1. Create Teams: Enter a team name and a short tag, then click "Create Team." The team will appear in the saved teams list.
2. Select Teams for Match: Choose home and away teams from the dropdown selectors.
3. Start Match: Click "Start Match" to begin tracking the live score and timer.
4. Update Score: Use the "+ Goal Home" and "+ Goal Away" buttons to update scores.
5. Auto-play: Click "Auto-play" to let the app simulate scoring randomly. Click again to stop.
6. End Match: Click "End Match" to finish and save the match to history.
7. View History: Scroll through past matches on the right panel and click to view details.

   
## 📝 License
MIT — see [LICENSE](LICENSE).
