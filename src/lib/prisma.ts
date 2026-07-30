import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

function parseDbUrl(url: string) {
  // Expected format: mysql://user:password@host:port/database
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
    // Fallback if parsing fails
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

function createPrismaClient() {
  const dbUrl = process.env.DATABASE_URL || 'mysql://u104700239_coaAv:password@localhost:3306/u104700239_coaAv';
  const poolConfig = parseDbUrl(dbUrl);
  
  // Pass configuration object directly to PrismaMariaDb adapter
  const adapter = new PrismaMariaDb(poolConfig);
  
  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;




