# VeloriaMag — Digital Magazine Platform

A professional digital magazine platform built with **Next.js 16**, **Prisma ORM**, and **SQLite**, featuring an AI-powered editorial pipeline, SEO automation, and enterprise-grade content management.

---

## 🌐 Live Site
[https://veloriamag.com](https://veloriamag.com)

---

## 🏗️ Tech Stack
- **Framework**: Next.js 16.2 (App Router, Turbopack)
- **Database**: SQLite via Prisma ORM
- **Language**: TypeScript
- **Styling**: Vanilla CSS + Tailwind utilities
- **Deployment**: Hostinger VPS / Node.js server

---

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables
cp .env.example .env

# 3. Run database migrations
npx prisma migrate deploy

# 4. Generate Prisma client
npx prisma generate

# 5. Seed the database
node prisma/seed.js

# 6. Start development server
npm run dev
```

The app will be available at `http://localhost:3000`.

---

## 📁 Project Structure

```
veloriamag-site/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── [category]/   # Dynamic category & article routes
│   │   ├── admin/        # Admin dashboard modules
│   │   ├── about/        # Trust & editorial pages
│   │   ├── api/v1/       # Public REST API endpoints
│   │   └── search/       # Full-text search
│   ├── components/       # Reusable UI components
│   └── lib/              # Prisma client, importer, helpers
├── prisma/
│   ├── schema.prisma     # Full database schema
│   ├── seed.js           # Database seeder
│   └── migrations/       # Migration history
├── content/
│   └── articles/         # Markdown CMS articles (VM-001+)
└── public/
    └── images/           # Article images (WebP)
```

---

## 🎛️ Admin Dashboards

| Route | Purpose |
|---|---|
| `/admin` | Main admin hub |
| `/admin/editorial-review` | Editorial approval workflow |
| `/admin/article-writer` | AI article production pipeline |
| `/admin/content-generator` | AI brief generator |
| `/admin/analytics` | Reader analytics |
| `/admin/revenue` | Revenue intelligence |
| `/admin/site-health` | Platform health monitor |
| `/admin/security` | Role management & audit trail |
| `/admin/seo-maintenance` | Automated SEO maintenance |
| `/admin/search-performance` | Google Search Console tracker |
| `/admin/social-generator` | Social media content generator |
| `/admin/discover` | Google Discover optimizer |
| `/admin/affiliate` | Affiliate content manager |
| `/admin/membership` | Paywall & membership tiers |
| `/admin/backups` | Backup & recovery |
| `/admin/localization` | Multilingual expansion |

---

## 📰 Content Categories
- Health (Medicine guides in English & Urdu)
- Beauty & Skincare (Product comparisons)
- Celebrity Net Worth (Wealth profiles)
- Finance (Investment & business)
- Faith & Lifestyle

---

## 🔌 API
```
GET /api/v1/articles    # Returns published articles catalog
```

---

## 📦 Deployment
See [HOSTINGER_DEPLOYMENT.md](./HOSTINGER_DEPLOYMENT.md) for full production deployment instructions.

---

## 📄 License
Private — All rights reserved. VeloriaMag © 2026
