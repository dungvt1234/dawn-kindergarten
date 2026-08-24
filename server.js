// DAWN Kindergarten - Mầm non Bình Minh
// Web server: Express + static files
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3008;

// Serve static files: root project (design/, docs/, assets/) + public/
app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', app: 'dawn-kindergarten', time: new Date().toISOString() });
});

// 404 fallback
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(PORT, () => {
  console.log(`🌅 DAWN Kindergarten website running at http://localhost:${PORT}`);
});
