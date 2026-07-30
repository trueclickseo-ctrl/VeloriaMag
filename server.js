// server.js — Hostinger hPanel Node.js entry point
// This file is required by Hostinger's Phusion Passenger runtime.
// It starts the Next.js production server on the PORT assigned by the host.

const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOST || '0.0.0.0';
const port = parseInt(process.env.PORT || '3000', 10);

const fs = require('fs');
const path = require('path');

try {
  const envContent = Object.keys(process.env)
    .filter(key => key.startsWith('DATABASE_') || key.startsWith('NEXT') || key.startsWith('DIRECT_') || key === 'PORT')
    .map(key => `${key}="${process.env[key]}"`)
    .join('\n');

  if (envContent) {
    fs.writeFileSync(path.join(__dirname, '.env.production'), envContent, 'utf-8');
    console.log('> Synchronized environment variables to .env.production successfully.');
  }
} catch (err) {
  console.error('> Failed to sync environment variables to .env.production:', err.message);
}

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('Internal server error');
    }
  })
    .once('error', (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, hostname, () => {
      console.log(`> VeloriaMag ready on http://${hostname}:${port}`);
    });
});
