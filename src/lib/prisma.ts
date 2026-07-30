import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import net from 'net';

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

let isDbAvailable: boolean | null = null;
let dbCheckPromise: Promise<boolean> | null = null;

export function checkDbAvailability(): Promise<boolean> {
  // Always mock database as offline during compilation phase to prevent socket contention
  const isBuildPhase = process.env.NEXT_PHASE === 'phase-production-build';
  if (isBuildPhase) {
    return Promise.resolve(false);
  }

  if (isDbAvailable !== null) {
    return Promise.resolve(isDbAvailable);
  }
  if (dbCheckPromise) {
    return dbCheckPromise;
  }

  const dbUrl = process.env.DATABASE_URL || 'mysql://u104700239_coaAv:password@localhost:3306/u104700239_coaAv';
  const poolConfig = parseDbUrl(dbUrl);

  dbCheckPromise = new Promise((resolve) => {
    const socket = new net.Socket();
    socket.setTimeout(500); // Fail fast in 500ms if unreachable

    socket.on('connect', () => {
      socket.destroy();
      isDbAvailable = true;
      resolve(true);
    });

    socket.on('timeout', () => {
      socket.destroy();
      isDbAvailable = false;
      resolve(false);
    });

    socket.on('error', () => {
      socket.destroy();
      isDbAvailable = false;
      resolve(false);
    });

    socket.connect(poolConfig.port, poolConfig.host);
  });

  return dbCheckPromise;
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

  // Startup diagnostic connection test
  client.$connect()
    .then(() => {
      console.log('[Prisma Diagnostic] ✅ Connection test succeeded!');
    })
    .catch((err: any) => {
      console.error('[Prisma Diagnostic] ❌ Connection test failed:', err);
    });

  // Wrap client with Proxy only during next build phase to prevent database connection timeouts when DB is absent
  const isBuildPhase = process.env.NEXT_PHASE === 'phase-production-build';
  if (!isBuildPhase) {
    return client;
  }

  // Wrap client with Proxy to intercept queries when DB is unreachable
  return new Proxy(client, {
    get(target: any, prop: string): any {
      const model = target[prop];
      if (model && typeof model === 'object') {
        return new Proxy(model, {
          get(modelTarget: any, methodProp: string): any {
            const method = modelTarget[methodProp];
            if (typeof method === 'function') {
              return async function (...args: any[]) {
                const available = await checkDbAvailability();
                if (!available) {
                  // If database is offline, resolve query with empty results to prevent timeout errors
                  if (methodProp.startsWith('findMany')) {
                    return [];
                  }
                  return null;
                }
                return method.apply(modelTarget, args);
              };
            }
            return method;
          }
        });
      }
      return model;
    }
  });
}

export const prisma: PrismaClient = (globalForPrisma.prisma ?? createPrismaClient()) as PrismaClient;

globalForPrisma.prisma = prisma;
