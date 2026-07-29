-- CreateTable
CREATE TABLE "ResearchBrief" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "articleId" TEXT NOT NULL,
    "serpSummary" TEXT NOT NULL,
    "competitorGaps" TEXT NOT NULL,
    "entitiesFound" TEXT NOT NULL,
    "questionsFound" TEXT NOT NULL,
    "sourcesFound" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ResearchBrief_articleId_key" ON "ResearchBrief"("articleId");
