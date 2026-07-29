-- CreateTable
CREATE TABLE "AnalyticsEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "eventType" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "referrer" TEXT,
    "visitorId" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "ReaderProfile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "interests" TEXT NOT NULL,
    "savedArticles" TEXT,
    "history" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Recommendation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "articleId" TEXT NOT NULL,
    "recommendedSlugs" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "AffiliateProduct" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productName" TEXT NOT NULL,
    "brand" TEXT,
    "category" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "commission" REAL NOT NULL DEFAULT 0.0,
    "relatedArticles" TEXT
);

-- CreateTable
CREATE TABLE "RevenueRecord" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "adRevenue" REAL NOT NULL DEFAULT 0.0,
    "affiliateRevenue" REAL NOT NULL DEFAULT 0.0,
    "rpm" REAL NOT NULL DEFAULT 0.0,
    "pageViews" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE UNIQUE INDEX "ReaderProfile_email_key" ON "ReaderProfile"("email");

-- CreateIndex
CREATE UNIQUE INDEX "RevenueRecord_date_key" ON "RevenueRecord"("date");
