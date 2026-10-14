import { query, checkDbHealth, memorySellers, memoryProducts, memoryIncidents } from './db.js';
import { sampleSellers, sampleProducts, sampleIncidents } from '../data/techOpsGuide.js';

export const SCHEMA_SQL = `
-- 1. Table: sellers (9 columns standard)
CREATE TABLE IF NOT EXISTS sellers (
  id SERIAL PRIMARY KEY,
  seller_code VARCHAR(50) UNIQUE NOT NULL,
  seller_name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  phone VARCHAR(50) NOT NULL,
  area TEXT,
  join_date DATE DEFAULT CURRENT_DATE,
  status VARCHAR(50) DEFAULT 'Chờ duyệt',
  assignee VARCHAR(100),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for fast lookup by code and status
CREATE INDEX IF NOT EXISTS idx_sellers_code ON sellers(seller_code);
CREATE INDEX IF NOT EXISTS idx_sellers_status ON sellers(status);

-- 2. Table: products (10 columns standard)
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  product_code VARCHAR(50) UNIQUE NOT NULL,
  product_name VARCHAR(255) NOT NULL,
  seller_code VARCHAR(50) REFERENCES sellers(seller_code) ON DELETE SET NULL,
  category VARCHAR(100),
  short_desc TEXT,
  price NUMERIC(12, 2) NOT NULL DEFAULT 0,
  post_date DATE DEFAULT CURRENT_DATE,
  status VARCHAR(50) DEFAULT 'Chờ duyệt',
  assignee VARCHAR(100),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_products_code ON products(product_code);
CREATE INDEX IF NOT EXISTS idx_products_seller ON products(seller_code);
CREATE INDEX IF NOT EXISTS idx_products_status ON products(status);

-- 3. Table: incidents (15 columns standard for tickets & complaints)
CREATE TABLE IF NOT EXISTS incidents (
  id SERIAL PRIMARY KEY,
  incident_code VARCHAR(50) UNIQUE NOT NULL,
  received_time TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  source VARCHAR(50) DEFAULT 'Google Forms',
  sender_name VARCHAR(255) NOT NULL,
  contact_info VARCHAR(255) NOT NULL,
  object_type VARCHAR(100) NOT NULL,
  related_code VARCHAR(50),
  summary TEXT NOT NULL,
  priority VARCHAR(50) DEFAULT 'Trung bình',
  status VARCHAR(50) DEFAULT 'Mới tiếp nhận',
  assignee VARCHAR(100),
  last_updated DATE DEFAULT CURRENT_DATE,
  deadline DATE,
  resolution_result TEXT,
  internal_notes TEXT,
  desired_solution TEXT,
  evidence_urls TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_incidents_code ON incidents(incident_code);
CREATE INDEX IF NOT EXISTS idx_incidents_priority ON incidents(priority);
CREATE INDEX IF NOT EXISTS idx_incidents_status ON incidents(status);
CREATE INDEX IF NOT EXISTS idx_incidents_deadline ON incidents(deadline);

-- 4. Table: admin_users (for operators and leads)
CREATE TABLE IF NOT EXISTS admin_users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'operator',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
`;

export async function runMigrations() {
  const health = await checkDbHealth();
  
  // If no PostgreSQL configured, populate in-memory fallback
  if (!health.connected) {
    console.log('[Migration Notice]: Running migration in In-Memory Store.');
    if (memorySellers.length === 0) {
      memorySellers.push(...sampleSellers);
    }
    if (memoryProducts.length === 0) {
      memoryProducts.push(...sampleProducts);
    }
    if (memoryIncidents.length === 0) {
      memoryIncidents.push(...sampleIncidents);
    }
    return {
      success: true,
      mode: 'in-memory',
      message: 'In-memory stores seeded with initial data.'
    };
  }

  console.log('[Migration]: Applying schema to Neon PostgreSQL...');
  try {
    await query(SCHEMA_SQL);
    console.log('[Migration]: Tables and indexes verified.');

    // Seed sample sellers if empty
    const sellerCountRes = await query('SELECT COUNT(*) as count FROM sellers');
    if (parseInt(sellerCountRes.rows[0].count, 10) === 0) {
      console.log('[Migration]: Seeding sample sellers...');
      for (const s of sampleSellers) {
        await query(
          `INSERT INTO sellers (seller_code, seller_name, email, phone, area, join_date, status, assignee, notes)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
           ON CONFLICT (seller_code) DO NOTHING`,
          [s.sellerCode, s.sellerName, s.email, s.phone, s.area, s.joinDate, s.status, s.assignee, s.notes]
        );
      }
    }

    // Seed sample products if empty
    const productCountRes = await query('SELECT COUNT(*) as count FROM products');
    if (parseInt(productCountRes.rows[0].count, 10) === 0) {
      console.log('[Migration]: Seeding sample products...');
      for (const p of sampleProducts) {
        await query(
          `INSERT INTO products (product_code, product_name, seller_code, category, short_desc, price, post_date, status, assignee, notes)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
           ON CONFLICT (product_code) DO NOTHING`,
          [p.productCode, p.productName, p.sellerCode, p.category, p.shortDesc, p.price, p.postDate, p.status, p.assignee, p.notes]
        );
      }
    }

    // Seed sample incidents if empty
    const incidentCountRes = await query('SELECT COUNT(*) as count FROM incidents');
    if (parseInt(incidentCountRes.rows[0].count, 10) === 0) {
      console.log('[Migration]: Seeding sample incidents...');
      for (const inc of sampleIncidents) {
        await query(
          `INSERT INTO incidents (incident_code, received_time, source, sender_name, contact_info, object_type, related_code, summary, priority, status, assignee, last_updated, deadline, resolution_result, internal_notes)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
           ON CONFLICT (incident_code) DO NOTHING`,
          [
            inc.incidentCode, inc.receivedTime, inc.source, inc.senderName, inc.contactInfo,
            inc.objectType, inc.relatedCode, inc.summary, inc.priority, inc.status,
            inc.assignee, inc.lastUpdated, inc.deadline, inc.resolutionResult, inc.internalNotes
          ]
        );
      }
    }

    return {
      success: true,
      mode: 'neon-postgresql',
      message: 'Neon PostgreSQL migration and initial seeding completed successfully.'
    };
  } catch (error: any) {
    console.error('[Migration Error]:', error.message);
    return {
      success: false,
      mode: 'neon-postgresql',
      error: error.message
    };
  }
}
