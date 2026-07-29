# VeloriaMag — Hostinger Production Deployment Guide

This guide covers deploying VeloriaMag on a **Hostinger VPS** running Node.js.

---

## Prerequisites
- Hostinger VPS with Node.js 20+ installed
- SSH access configured
- Domain pointed to your VPS IP
- Git installed on VPS
- PM2 (process manager) installed globally:
  ```bash
  npm install -g pm2
  ```

---

## Step 1: SSH Into Your VPS
```bash
ssh root@your-vps-ip
```

---

## Step 2: Clone the Repository
```bash
cd /var/www
git clone git@github.com:trueclickseo-ctrl/VeloriaMag.git veloriamag
cd veloriamag
```

---

## Step 3: Set Up Environment Variables
```bash
cp .env.example .env
nano .env
```

Fill in production values:
```
DATABASE_URL="file:./prisma/prod.db"
NEXT_PUBLIC_SITE_URL="https://veloriamag.com"
NEXT_PUBLIC_SITE_NAME="VeloriaMag"
ADMIN_SECRET="your-very-secure-secret-here"
```

---

## Step 4: Install Dependencies
```bash
npm install --production
```

---

## Step 5: Run Database Migrations
```bash
npx prisma migrate deploy
npx prisma generate
node prisma/seed.js
```

---

## Step 6: Build the Application
```bash
npm run build
```

---

## Step 7: Start with PM2
```bash
pm2 start npm --name "veloriamag" -- start
pm2 save
pm2 startup
```

The site will run on port 3000 internally.

---

## Step 8: Configure Nginx Reverse Proxy
Install Nginx and configure a virtual host:

```nginx
server {
    listen 80;
    server_name veloriamag.com www.veloriamag.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

---

## Step 9: SSL Certificate (Let's Encrypt)
```bash
apt install certbot python3-certbot-nginx
certbot --nginx -d veloriamag.com -d www.veloriamag.com
```

---

## Step 10: Automated Deployments (Optional)
Create a deploy script at `/var/www/veloriamag/deploy.sh`:

```bash
#!/bin/bash
cd /var/www/veloriamag
git pull origin main
npm install --production
npx prisma migrate deploy
npx prisma generate
npm run build
pm2 restart veloriamag
echo "Deployment complete!"
```

Then run: `chmod +x deploy.sh`

---

## Monitoring
```bash
pm2 status          # Check process status
pm2 logs veloriamag # View application logs
pm2 monit           # Real-time monitoring
```

---

## Backups
Schedule daily database backups:
```bash
crontab -e
# Add: 0 2 * * * cp /var/www/veloriamag/prisma/prod.db /var/backups/veloriamag-$(date +%Y%m%d).db
```

---

## Support
For deployment issues, check the `/admin/site-health` dashboard and `/admin/deployment` checklist in the admin panel.
