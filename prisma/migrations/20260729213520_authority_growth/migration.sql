-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "brand" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "affiliateUrl" TEXT NOT NULL,
    "disclosureStatus" TEXT NOT NULL DEFAULT 'PENDING'
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Article" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "markdownContent" TEXT NOT NULL,
    "featuredImage" TEXT,
    "categoryId" TEXT NOT NULL,
    "pillarId" TEXT,
    "topicCluster" TEXT NOT NULL,
    "primaryKeyword" TEXT NOT NULL,
    "secondaryKeywords" TEXT NOT NULL,
    "searchIntent" TEXT NOT NULL,
    "schemaType" TEXT NOT NULL,
    "citations" TEXT NOT NULL,
    "entities" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "reviewerId" TEXT,
    "metaTitle" TEXT NOT NULL,
    "metaDescription" TEXT NOT NULL,
    "readingTime" INTEGER NOT NULL DEFAULT 5,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "discoverTitle" TEXT,
    "emotionalHook" TEXT,
    "trendingTopic" TEXT,
    "featuredAngle" TEXT,
    "discoverImage" TEXT,
    "socialHeadline" TEXT,
    "imageConcept" TEXT,
    "imageStyle" TEXT,
    "imageComposition" TEXT,
    "imageElements" TEXT,
    "imageAlt" TEXT,
    "imageCaption" TEXT,
    "seoScore" INTEGER NOT NULL DEFAULT 0,
    "contentScore" INTEGER NOT NULL DEFAULT 0,
    "trustScore" INTEGER NOT NULL DEFAULT 0,
    "searchVolume" INTEGER NOT NULL DEFAULT 0,
    "keywordDifficulty" INTEGER NOT NULL DEFAULT 0,
    "competitionLevel" TEXT NOT NULL DEFAULT 'LOW',
    "entityValue" INTEGER NOT NULL DEFAULT 0,
    "topicalAuthorityValue" INTEGER NOT NULL DEFAULT 0,
    "internalLinkPotential" INTEGER NOT NULL DEFAULT 0,
    "priorityScore" INTEGER NOT NULL DEFAULT 0,
    "topicApproved" BOOLEAN NOT NULL DEFAULT true,
    "lastFactCheckedDate" DATETIME,
    "publishedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Article_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Article_pillarId_fkey" FOREIGN KEY ("pillarId") REFERENCES "Pillar" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Article_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Article_reviewerId_fkey" FOREIGN KEY ("reviewerId") REFERENCES "Author" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Article" ("authorId", "categoryId", "citations", "entities", "excerpt", "featuredImage", "id", "markdownContent", "metaDescription", "metaTitle", "pillarId", "primaryKeyword", "publishedAt", "readingTime", "reviewerId", "schemaType", "searchIntent", "secondaryKeywords", "slug", "status", "title", "topicCluster", "updatedAt") SELECT "authorId", "categoryId", "citations", "entities", "excerpt", "featuredImage", "id", "markdownContent", "metaDescription", "metaTitle", "pillarId", "primaryKeyword", "publishedAt", "readingTime", "reviewerId", "schemaType", "searchIntent", "secondaryKeywords", "slug", "status", "title", "topicCluster", "updatedAt" FROM "Article";
DROP TABLE "Article";
ALTER TABLE "new_Article" RENAME TO "Article";
CREATE UNIQUE INDEX "Article_slug_key" ON "Article"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
