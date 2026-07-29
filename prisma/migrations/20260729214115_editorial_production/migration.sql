-- CreateTable
CREATE TABLE "ArticleBrief" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "topic" TEXT NOT NULL,
    "keyword" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "pillar" TEXT NOT NULL,
    "searchIntent" TEXT NOT NULL,
    "audience" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'BRIEF_READY',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "ArticleProduction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "articleId" TEXT NOT NULL,
    "seoScore" INTEGER NOT NULL DEFAULT 0,
    "eeatScore" INTEGER NOT NULL DEFAULT 0,
    "entityScore" INTEGER NOT NULL DEFAULT 0,
    "citationScore" INTEGER NOT NULL DEFAULT 0,
    "internalLinkScore" INTEGER NOT NULL DEFAULT 0,
    "readyToPublish" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "ContentQueue" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "morningArticle" TEXT NOT NULL,
    "afternoonArticle" TEXT NOT NULL,
    "eveningArticle" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'DRAFT'
);

-- CreateIndex
CREATE UNIQUE INDEX "ArticleProduction_articleId_key" ON "ArticleProduction"("articleId");

-- CreateIndex
CREATE UNIQUE INDEX "ContentQueue_date_key" ON "ContentQueue"("date");
