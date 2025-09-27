// Minimal WebSocket relay for KickLive
// Usage: npm install && node server.js
import { WebSocketServer } from 'ws';

const PORT = process.env.PORT || 8787;
const wss = new WebSocketServer({ port: PORT });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    // Broadcast to everyone else
    for (const client of wss.clients) {
      if (client !== ws && client.readyState === 1) {
        client.send(data.toString());
      }
    }
  });
});

console.log(`KickLive WS running on ws://localhost:${PORT}`);
