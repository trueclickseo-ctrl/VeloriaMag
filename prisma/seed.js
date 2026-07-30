const { PrismaClient } = require('@prisma/client');
const { PrismaMariaDb } = require('@prisma/adapter-mariadb');

function parseDbUrl(url) {
  try {
    const parsed = new URL(url);
    return {
      host: parsed.hostname,
      port: parseInt(parsed.port || '3306', 10),
      user: parsed.username,
      password: decodeURIComponent(parsed.password),
      database: parsed.pathname.replace(/^\//, ''),
      connectionLimit: 5,
    };
  } catch (e) {
    return {
      host: 'localhost',
      port: 3306,
      user: 'u104700239_coaAv',
      password: '',
      database: 'u104700239_coaAv',
      connectionLimit: 5,
    };
  }
}

const dbUrl = process.env.DATABASE_URL || 'mysql://u104700239_coaAv:password@localhost:3306/u104700239_coaAv';
const poolConfig = parseDbUrl(dbUrl);
const adapter = new PrismaMariaDb(poolConfig);
const prisma = new PrismaClient({ adapter });

async function main() {
  // Clean database
  await prisma.article.deleteMany({});
  await prisma.pillar.deleteMany({});
  await prisma.category.deleteMany({});
  await prisma.author.deleteMany({});
  await prisma.entity.deleteMany({});
  await prisma.product.deleteMany({});
  await prisma.source.deleteMany({});
  await prisma.subscriber.deleteMany({});

  console.log('Seeding categories...');
  const healthCat = await prisma.category.create({
    data: {
      name: 'Health',
      slug: 'health',
      description: 'Medical guides, drug facts, safety sheets, and healthy living tips.',
    },
  });

  const beautyCat = await prisma.category.create({
    data: {
      name: 'Beauty',
      slug: 'beauty',
      description: 'Skincare routines, brand analysis, ingredient studies, and beauty guidelines.',
    },
  });

  const celebrityCat = await prisma.category.create({
    data: {
      name: 'Celebrity',
      slug: 'celebrity',
      description: 'In-depth celebrity profiles, biographies, lifestyle trends, and career timelines.',
    },
  });

  const financeCat = await prisma.category.create({
    data: {
      name: 'Finance',
      slug: 'finance',
      description: 'Personal finance education, investing strategies, entrepreneur profiles, and corporate wealth valuations.',
    },
  });

  const faithCat = await prisma.category.create({
    data: {
      name: 'Faith',
      slug: 'faith',
      description: 'Theological symbolisms, dream interpretations, biblical numbers, and cultural perspectives.',
    },
  });

  console.log('Seeding pillars...');
  const medicinePillar = await prisma.pillar.create({
    data: {
      title: 'Medicine Uses in Urdu',
      slug: 'medicine-uses-in-urdu',
      description: 'Comprehensive directory of medicines, tablets, syrups, and creams explained in Urdu.',
      categoryId: healthCat.id,
    },
  });

  const skincarePillar = await prisma.pillar.create({
    data: {
      title: 'Skincare Comparisons',
      slug: 'skincare-comparisons',
      description: 'Side-by-side product testing and brand comparisons for beginners.',
      categoryId: beautyCat.id,
    },
  });

  const profilePillar = await prisma.pillar.create({
    data: {
      title: 'Celebrity Profiles',
      slug: 'celebrity-profiles',
      description: 'Detailed career and biography articles of public interest.',
      categoryId: celebrityCat.id,
    },
  });

  const celebrityNetWorthPillar = await prisma.pillar.create({
    data: {
      title: 'Celebrity Net Worth',
      slug: 'celebrity-net-worth',
      description: 'Individual celebrity wealth profiles, earnings history, assets, and career income.',
      categoryId: celebrityCat.id,
    },
  });

  const financeWealthPillar = await prisma.pillar.create({
    data: {
      title: 'Wealth',
      slug: 'wealth',
      description: 'Billionaire profiles, company valuations, asset analysis, and financial education.',
      categoryId: financeCat.id,
    },
  });

  const meaningsPillar = await prisma.pillar.create({
    data: {
      title: 'Biblical Meanings',
      slug: 'biblical-meanings',
      description: 'Spiritual guides exploring biblical numbers, dream meanings, and religious symbolisms.',
      categoryId: faithCat.id,
    },
  });

  console.log('Seeding authors...');
  const drBilal = await prisma.author.create({
    data: {
      name: 'Dr. Bilal Hassan',
      slug: 'dr-bilal-hassan',
      photo: '/images/authors/dr-bilal.jpg',
      bio: 'Dr. Bilal Hassan is a clinical pharmacist and medical writer with 8+ years of experience in patient counseling and pharmacology.',
      expertise: 'Pharmacology & Patient Safety',
      qualifications: 'Pharm.D, RPh',
    },
  });

  const ayesha = await prisma.author.create({
    data: {
      name: 'Ayesha Khan',
      slug: 'ayesha-khan',
      photo: '/images/authors/ayesha.jpg',
      bio: 'Ayesha Khan is a skincare consultant and aesthetician focusing on product formulation analysis and sensitive skin routines.',
      expertise: 'Aesthetic Skincare & Ingredient Science',
      qualifications: 'Licensed Aesthetician',
    },
  });

  const james = await prisma.author.create({
    data: {
      name: 'James Miller',
      slug: 'james-miller',
      photo: '/images/authors/james.jpg',
      bio: 'James Miller is an entertainment journalist and biographer tracking Hollywood history, career timelines, and lifestyle transformations.',
      expertise: 'Celebrity Journalism & Biographies',
      qualifications: 'B.A. in Journalism',
    },
  });

  const sarah = await prisma.author.create({
    data: {
      name: 'Sarah Jenkins',
      slug: 'sarah-jenkins',
      photo: '/images/authors/sarah.jpg',
      bio: 'Sarah Jenkins is a religious studies teacher specializing in biblical numerology, Semitic language translations, and theological symbols.',
      expertise: 'Theology & Biblical Symbolism',
      qualifications: 'M.Div in Biblical Studies',
    },
  });

  const warren = await prisma.author.create({
    data: {
      name: 'Warren Vance',
      slug: 'warren-vance',
      photo: '/images/authors/warren.jpg',
      bio: 'Warren Vance is a financial analyst and investment advisor specializing in macroeconomics, stock market valuations, and corporate filings.',
      expertise: 'Corporate Finance & Wealth Management',
      qualifications: 'CFA, MBA',
    },
  });

  console.log('Seeding entities...');
  await prisma.entity.create({
    data: {
      name: 'Cytopan',
      type: 'Drug',
      description: 'A combination tablet containing Diclofenac Sodium and Misoprostol used for pain management.',
      relatedEntities: 'Diclofenac Sodium, Misoprostol, Arthritis',
    },
  });

  await prisma.entity.create({
    data: {
      name: 'Nivea',
      type: 'Brand',
      description: 'A global personal care brand known for its occlusive blue-tin creams and hydration products.',
      relatedEntities: 'Garnier, Beiersdorf, Moisturizer',
    },
  });

  console.log('Seeding products...');
  await prisma.product.create({
    data: {
      brand: 'CeraVe',
      name: 'Hydrating Facial Cleanser',
      category: 'Beauty',
      affiliateUrl: 'https://amazon.com/dp/B01MSSDEPK?tag=veloriamag-20',
      disclosureStatus: 'APPROVED',
    },
  });

  console.log('Seeding sources...');
  await prisma.source.create({
    data: {
      name: 'Food and Drug Administration (FDA)',
      type: 'Medical',
      url: 'https://fda.gov',
      authorityLevel: 'HIGH',
    },
  });

  await prisma.source.create({
    data: {
      name: 'Securities and Exchange Commission (SEC)',
      type: 'Finance',
      url: 'https://sec.gov',
      authorityLevel: 'HIGH',
    },
  });

  console.log('Seeding subscribers...');
  await prisma.subscriber.create({
    data: {
      email: 'reader1@example.com',
      interests: 'health,finance',
    },
  });

  console.log('Seeding articles...');

  // Health: VM-001 - Cytopan
  await prisma.article.create({
    data: {
      title: 'Cytopan Tablet Uses in Urdu: فائدے، نقصان اور استعمال کا طریقہ',
      slug: 'cytopan-tablet-uses-in-urdu',
      excerpt: 'سائٹوپین گولی کے فائدے، نقصان، اور خوراک کے بارے میں تفصیلی معلومات۔ جانے کہ یہ گولی جوڑوں کے درد کے لیے کیسے کام کرتی ہے۔',
      markdownContent: `
        <p><strong>سائٹوپین (Cytopan)</strong> ایک مشہور اور اہم دوا ہے جو جوڑوں کے درد اور گٹھیا کے لیے استعمال کی جاتی ہے۔</p>
      `,
      categoryId: healthCat.id,
      pillarId: medicinePillar.id,
      topicCluster: 'Medicine Uses',
      primaryKeyword: 'Cytopan tablet uses in urdu',
      secondaryKeywords: 'cytopan side effects, cytopan tablet dosage',
      searchIntent: 'Informational',
      schemaType: 'MedicalWebPage, Drug',
      citations: 'FDA prescribing info, Searle Pakistan Product Index',
      entities: 'Cytopan, Diclofenac Sodium, Misoprostol',
      authorId: drBilal.id,
      metaTitle: 'Cytopan Tablet Uses in Urdu: فائدے اور سائیڈ ایفیکٹس',
      metaDescription: 'سائٹوپین گولی کے استعمال، فوائد اور احتیاطی تدابیر۔',
      
      // Indexing Fields
      indexingStatus: 'INDEXED',
      googleIndexed: true,
      lastCrawledDate: new Date(),
      canonicalStatus: 'VALID',

      // Authority Growth Fields
      seoScore: 94,
      contentScore: 91,
      trustScore: 98,
      searchVolume: 4200,
      keywordDifficulty: 22,
      competitionLevel: 'LOW',
      entityValue: 8,
      topicalAuthorityValue: 9,
      internalLinkPotential: 7,
      priorityScore: 88,
      topicApproved: true,
      discoverTitle: 'The Medical Paradox of Cytopan: Pain Relief With Stomach Protection',
      emotionalHook: 'Discover why doctors combine these two specific substances.',
      trendingTopic: 'NSAID safety guidelines',
      featuredAngle: 'Patient pharmacology safety analysis',
      imageConcept: 'Stomach protection barrier medical illustration',
      imageStyle: 'Educational medical illustration style',
      imageAlt: 'Cytopan gastroprotection mechanism illustration',
      lastFactCheckedDate: new Date(),
    },
  });

  // Beauty: VM-009 - Nivea vs Garnier
  await prisma.article.create({
    data: {
      title: 'Is Nivea a Good Starting Brand Compared to Garnier?',
      slug: 'nivea-vs-garnier',
      excerpt: 'Comparing Nivea and Garnier skincare products for beginners.',
      markdownContent: `
        <p>For skincare beginners, choosing between pharmacy giants Nivea and Garnier can be challenging.</p>
      `,
      categoryId: beautyCat.id,
      pillarId: skincarePillar.id,
      topicCluster: 'Skincare Product Comparisons',
      primaryKeyword: 'nivea vs garnier',
      secondaryKeywords: 'nivea starting brand, garnier skincare beginner',
      searchIntent: 'Comparison',
      schemaType: 'ComparisonPage',
      citations: 'Cosmetic ingredient review journals, brand formulation indexes',
      entities: 'Nivea, Garnier, Mineral Oil, Salicylic Acid',
      authorId: ayesha.id,
      metaTitle: 'Is Nivea a Good Starting Brand Compared to Garnier?',
      metaDescription: 'Unbiased beginner skincare comparison between Nivea and Garnier.',
      
      // Indexing Fields
      indexingStatus: 'PENDING',
      googleIndexed: false,
      canonicalStatus: 'VALID',

      // Authority Growth Fields
      seoScore: 96,
      contentScore: 93,
      trustScore: 95,
      searchVolume: 3500,
      keywordDifficulty: 18,
      competitionLevel: 'MEDIUM',
      entityValue: 7,
      topicalAuthorityValue: 8,
      internalLinkPotential: 8,
      priorityScore: 84,
      topicApproved: true,
      discoverTitle: 'Garnier vs Nivea: Which Skincare Giant Actually Cures Dry Skin?',
      emotionalHook: 'The hidden chemical difference that might be blocking moisture.',
      trendingTopic: 'Skincare brand showdowns',
      featuredAngle: 'Ingredient formulation breakdown',
      imageConcept: 'Two product bottles side-by-side on marble',
      imageStyle: 'Premium skincare comparison style',
      imageAlt: 'Nivea cream and Garnier bottles',
      lastFactCheckedDate: new Date(),
    },
  });

  console.log('Database successfully seeded with Production Intelligence parameters!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
