import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

// Neon PostgreSQL connection configuration
const connectionString = process.env.DATABASE_URL;

// In-memory fallback stores when DATABASE_URL is not yet provided
let memorySellers: any[] = [];
let memoryProducts: any[] = [];
let memoryIncidents: any[] = [];

let pool: pg.Pool | null = null;
let isDbConnected = false;
let lastDbError: string | null = null;

if (connectionString) {
  try {
    pool = new Pool({
      connectionString,
      ssl: connectionString.includes('localhost') 
        ? false 
        : { rejectUnauthorized: false }, // Standard requirement for Neon cloud connection
      connectionTimeoutMillis: 8000,
      idleTimeoutMillis: 30000,
      max: 10, // Optimized for serverless/pooled Neon branches
    });

    pool.on('error', (err) => {
      console.error('[Neon Database Pool Error]:', err.message);
      lastDbError = err.message;
    });

    // Test initial connection
    pool.query('SELECT NOW()', (err, res) => {
      if (err) {
        console.warn('[Neon Connection Warning]: Could not reach Neon PostgreSQL directly:', err.message);
        isDbConnected = false;
        lastDbError = err.message;
      } else {
        isDbConnected = true;
        lastDbError = null;
        console.log('[Neon PostgreSQL]: Connected successfully at', res.rows[0].now);
      }
    });
  } catch (error: any) {
    console.error('[Neon Database Init Error]:', error.message);
    lastDbError = error.message;
  }
} else {
  console.log('[Database Notice]: DATABASE_URL is not set. Operating in In-Memory Demo Mode with sample data.');
}

export async function query(text: string, params?: any[]) {
  if (!pool) {
    throw new Error('DATABASE_NOT_CONFIGURED: Please set DATABASE_URL environment variable from Neon Console.');
  }
  const start = Date.now();
  try {
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    return res;
  } catch (err: any) {
    lastDbError = err.message;
    throw err;
  }
}

export async function checkDbHealth() {
  if (!pool || !connectionString) {
    return {
      connected: false,
      mode: 'in-memory-fallback',
      message: 'DATABASE_URL is not configured. Running with in-memory store.',
      error: lastDbError,
      latencyMs: null,
      serverTime: new Date().toISOString()
    };
  }

  const start = Date.now();
  try {
    const result = await pool.query('SELECT NOW() as now, version() as version');
    const latencyMs = Date.now() - start;
    isDbConnected = true;
    lastDbError = null;
    return {
      connected: true,
      mode: 'neon-postgresql',
      message: 'Successfully connected to Neon PostgreSQL.',
      latencyMs,
      version: result.rows[0].version,
      serverTime: result.rows[0].now,
      pool: {
        totalCount: pool.totalCount,
        idleCount: pool.idleCount,
        waitingCount: pool.waitingCount,
      }
    };
  } catch (err: any) {
    isDbConnected = false;
    lastDbError = err.message;
    return {
      connected: false,
      mode: 'neon-postgresql-disconnected',
      message: 'Failed to query Neon PostgreSQL: ' + err.message,
      error: err.message,
      latencyMs: null,
      serverTime: new Date().toISOString()
    };
  }
}

export function getPool() {
  return pool;
}

export { memorySellers, memoryProducts, memoryIncidents };
