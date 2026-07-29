-- CreateTable
CREATE TABLE "NewsletterPreference" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "subscriberId" TEXT NOT NULL,
    "frequency" TEXT NOT NULL DEFAULT 'WEEKLY',
    "interests" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Campaign" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "subject" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "sentAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Author" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "photo" TEXT,
    "bio" TEXT NOT NULL,
    "expertise" TEXT NOT NULL,
    "qualifications" TEXT NOT NULL,
    "credentials" TEXT,
    "expertiseAreas" TEXT,
    "yearsExperience" INTEGER NOT NULL DEFAULT 0,
    "socialProfiles" TEXT,
    "publishedCount" INTEGER NOT NULL DEFAULT 0,
    "reviewedCount" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Author" ("bio", "expertise", "id", "name", "photo", "qualifications", "slug") SELECT "bio", "expertise", "id", "name", "photo", "qualifications", "slug" FROM "Author";
DROP TABLE "Author";
ALTER TABLE "new_Author" RENAME TO "Author";
CREATE UNIQUE INDEX "Author_slug_key" ON "Author"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
