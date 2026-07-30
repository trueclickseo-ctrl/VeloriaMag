const { execSync } = require('child_process');
const net = require('net');

function parseDbUrl(url) {
  try {
    const parsed = new URL(url);
    return {
      host: parsed.hostname,
      port: parseInt(parsed.port || '3306', 10),
    };
  } catch (e) {
    return {
      host: '127.0.0.1',
      port: 3306,
    };
  }
}

const dbUrl = process.env.DATABASE_URL || '';
if (!dbUrl) {
  console.log('⚠️ DATABASE_URL is not set. Skipping migrations/seeding.');
  process.exit(0);
}

const poolConfig = parseDbUrl(dbUrl);

console.log(`Checking connection to database at ${poolConfig.host}:${poolConfig.port}...`);
const socket = new net.Socket();
socket.setTimeout(2000);

socket.on('connect', () => {
  socket.destroy();
  console.log('🔌 Database is reachable. Running migrations and seed...');
  try {
    execSync('npx prisma db push --skip-generate', { stdio: 'inherit' });
    execSync('node prisma/seed.js', { stdio: 'inherit' });
    console.log('✅ Migration and seeding completed successfully!');
  } catch (err) {
    console.error('❌ Migration/Seed failed:', err.message);
    process.exit(1);
  }
});

socket.on('timeout', () => {
  socket.destroy();
  console.log('⚠️ Database connection timed out. Skipping migrations/seeding.');
});

socket.on('error', (err) => {
  socket.destroy();
  console.log(`⚠️ Database is unreachable (${err.message}). Skipping migrations/seeding.`);
});

socket.connect(poolConfig.port, poolConfig.host);
