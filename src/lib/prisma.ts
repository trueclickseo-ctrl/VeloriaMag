import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

function parseDbUrl(url: string) {
  try {
    const parsed = new URL(url);
    return {
      host: parsed.hostname,
      port: parseInt(parsed.port || '3306', 10),
      user: parsed.username,
      password: decodeURIComponent(parsed.password),
      database: parsed.pathname.replace(/^\//, ''),
      connectionLimit: 1, // Restrict connectionLimit to 1 to avoid pool starvation on Hostinger
    };
  } catch (e) {
    return {
      host: 'localhost',
      port: 3306,
      user: 'u104700239_coaAv',
      password: '',
      database: 'u104700239_coaAv',
      connectionLimit: 1,
    };
  }
}

function createPrismaClient() {
  const dbUrl = process.env.DATABASE_URL || 'mysql://u104700239_coaAv:password@localhost:3306/u104700239_coaAv';
  const poolConfig = parseDbUrl(dbUrl);

  console.log('[Prisma Diagnostic] Host:', poolConfig.host);
  console.log('[Prisma Diagnostic] Port:', poolConfig.port);
  console.log('[Prisma Diagnostic] User:', poolConfig.user);
  console.log('[Prisma Diagnostic] Database:', poolConfig.database);
  console.log('[Prisma Diagnostic] ConnectionLimit:', poolConfig.connectionLimit);

  const adapter = new PrismaMariaDb(poolConfig);
  const client = new PrismaClient({ adapter });

  return client;
}

export const prisma: PrismaClient = (globalForPrisma.prisma ?? createPrismaClient()) as PrismaClient;

globalForPrisma.prisma = prisma;
