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
  console.log('🔌 Database is reachable. Starting database setup...');
  
  let success = false;
  
  // Try npx prisma migrate deploy first
  try {
    console.log('🔄 Attempting to run migrations (prisma migrate deploy)...');
    execSync('npx prisma migrate deploy', { stdio: 'inherit' });
    success = true;
    console.log('✅ Migrations applied successfully.');
  } catch (err) {
    console.warn('⚠️ Migration deploy failed or returned an error. Attempting db push fallback...');
    console.warn(`Reason: ${err.message || err}`);
  }

  // Fallback to npx prisma db push if migrate deploy failed
  if (!success) {
    try {
      console.log('🔄 Running database schema push (prisma db push)...');
      execSync('npx prisma db push', { stdio: 'inherit' });
      success = true;
      console.log('✅ Database schema pushed successfully.');
    } catch (pushErr) {
      console.error('❌ Database schema push failed:', pushErr.message || pushErr);
      process.exit(1);
    }
  }

  // Run database seeding if database setup succeeded
  if (success) {
    try {
      console.log('🌱 Seeding database (node prisma/seed.js)...');
      execSync('node prisma/seed.js', { stdio: 'inherit' });
      console.log('✅ Database seeding completed successfully.');
    } catch (seedErr) {
      console.error('❌ Seeding failed:', seedErr.message || seedErr);
      // Don't fail the build just because seeding failed if tables were successfully created
    }
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
