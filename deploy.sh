#!/bin/bash
# deploy.sh — Run this on Hostinger after every git pull
# Usage: bash deploy.sh

echo "=== VeloriaMag Deployment Script ==="
echo "📦 Installing dependencies..."
npm install

echo "🔨 Building Next.js app..."
npm run build

echo "🗄️  Running Prisma migrations..."
npx prisma migrate deploy
npx prisma generate

echo "✅ Build complete! Restart your Node.js app in hPanel."
echo "Go to: hPanel → Node.js → Restart"
