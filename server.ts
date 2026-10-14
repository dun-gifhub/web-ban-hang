import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { query, checkDbHealth, memorySellers, memoryProducts, memoryIncidents } from './src/server/db.js';
import { runMigrations } from './src/server/migrate.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);
const HOST = '0.0.0.0';

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Security & CORS headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

// Run initial migration / in-memory check at startup
runMigrations().catch((err) => {
  console.warn('[Startup Migration Warning]:', err.message);
});

// ==========================================
// HEALTH & DIAGNOSTIC ENDPOINTS
// ==========================================
app.get(['/health', '/api/health'], async (req, res) => {
  const dbHealth = await checkDbHealth();
  const statusCode = dbHealth.connected ? 200 : (process.env.DATABASE_URL ? 503 : 200);

  res.status(statusCode).json({
    status: dbHealth.connected ? 'healthy' : 'degraded',
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    serverPort: PORT,
    database: dbHealth,
  });
});

app.get('/api/status', async (req, res) => {
  const dbHealth = await checkDbHealth();
  res.json({
    appName: 'TechOps Hub - Railway + Neon PostgreSQL',
    version: '1.0.0',
    nodeVersion: process.version,
    database: {
      provider: 'Neon Serverless PostgreSQL',
      connected: dbHealth.connected,
      mode: dbHealth.mode,
      latencyMs: dbHealth.latencyMs,
      hostConfigured: !!process.env.DATABASE_URL,
    },
    systemMetrics: {
      uptimeSeconds: Math.floor(process.uptime()),
      memoryUsageMB: Math.round(process.memoryUsage().rss / 1024 / 1024),
    }
  });
});

// Trigger migration manually
app.post('/api/migrate', async (req, res) => {
  try {
    const result = await runMigrations();
    res.json(result);
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ==========================================
// SELLERS API (9 COLUMNS)
// ==========================================
app.get('/api/sellers', async (req, res) => {
  const dbHealth = await checkDbHealth();
  if (dbHealth.connected) {
    try {
      const result = await query('SELECT * FROM sellers ORDER BY id ASC');
      return res.json(result.rows);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  }
  // In-memory fallback
  res.json(memorySellers);
});

app.post('/api/sellers', async (req, res) => {
  const { sellerName, email, phone, area, status, assignee, notes } = req.body;
  if (!sellerName || !phone) {
    return res.status(400).json({ error: 'Tên cửa hàng và Số điện thoại là bắt buộc.' });
  }

  const dbHealth = await checkDbHealth();
  if (dbHealth.connected) {
    try {
      // Auto generate seller code
      const countRes = await query('SELECT COUNT(*) as count FROM sellers');
      const nextNum = parseInt(countRes.rows[0].count, 10) + 1;
      const sellerCode = `NB-${String(nextNum).padStart(3, '0')}`;

      const insertRes = await query(
        `INSERT INTO sellers (seller_code, seller_name, email, phone, area, join_date, status, assignee, notes)
         VALUES ($1, $2, $3, $4, $5, CURRENT_DATE, $6, $7, $8)
         RETURNING *`,
        [sellerCode, sellerName, email || '', phone, area || '', status || 'Chờ duyệt', assignee || 'Chưa chỉ định', notes || '']
      );
      return res.status(201).json(insertRes.rows[0]);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  }

  // In-memory fallback
  const nextNum = memorySellers.length + 1;
  const newSeller = {
    sellerCode: `NB-${String(nextNum).padStart(3, '0')}`,
    sellerName,
    email: email || '',
    phone,
    area: area || '',
    joinDate: new Date().toISOString().slice(0, 10),
    status: status || 'Chờ duyệt',
    assignee: assignee || 'Chưa chỉ định',
    notes: notes || ''
  };
  memorySellers.push(newSeller);
  res.status(201).json(newSeller);
});

// ==========================================
// PRODUCTS API (10 COLUMNS)
// ==========================================
app.get('/api/products', async (req, res) => {
  const dbHealth = await checkDbHealth();
  if (dbHealth.connected) {
    try {
      const result = await query('SELECT * FROM products ORDER BY id ASC');
      return res.json(result.rows);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  }
  res.json(memoryProducts);
});

app.post('/api/products', async (req, res) => {
  const { productName, sellerCode, category, shortDesc, price, status, assignee, notes } = req.body;
  if (!productName || !sellerCode) {
    return res.status(400).json({ error: 'Tên sản phẩm và Mã người bán là bắt buộc.' });
  }

  const dbHealth = await checkDbHealth();
  if (dbHealth.connected) {
    try {
      const countRes = await query('SELECT COUNT(*) as count FROM products');
      const nextNum = parseInt(countRes.rows[0].count, 10) + 1;
      const productCode = `SP-${String(nextNum).padStart(3, '0')}`;

      const insertRes = await query(
        `INSERT INTO products (product_code, product_name, seller_code, category, short_desc, price, post_date, status, assignee, notes)
         VALUES ($1, $2, $3, $4, $5, $6, CURRENT_DATE, $7, $8, $9)
         RETURNING *`,
        [productCode, productName, sellerCode, category || '', shortDesc || '', price || 0, status || 'Chờ duyệt', assignee || 'Chưa chỉ định', notes || '']
      );
      return res.status(201).json(insertRes.rows[0]);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  }

  const nextNum = memoryProducts.length + 1;
  const newProduct = {
    productCode: `SP-${String(nextNum).padStart(3, '0')}`,
    productName,
    sellerCode,
    category: category || '',
    shortDesc: shortDesc || '',
    price: Number(price) || 0,
    postDate: new Date().toISOString().slice(0, 10),
    status: status || 'Chờ duyệt',
    assignee: assignee || 'Chưa chỉ định',
    notes: notes || ''
  };
  memoryProducts.push(newProduct);
  res.status(201).json(newProduct);
});

// ==========================================
// INCIDENTS & COMPLAINTS API (15 COLUMNS & 11 FORM FIELDS)
// ==========================================
app.get('/api/incidents', async (req, res) => {
  const dbHealth = await checkDbHealth();
  if (dbHealth.connected) {
    try {
      const result = await query('SELECT * FROM incidents ORDER BY id DESC');
      return res.json(result.rows);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  }
  res.json(memoryIncidents);
});

// Direct API submission matching Google Forms 11 fields
app.post('/api/incidents', async (req, res) => {
  const {
    senderName,        // Field 1
    contactInfo,       // Field 2
    objectType,        // Field 3
    relatedCode,       // Field 4 (Seller code/name)
    productCode,       // Field 5 (Product code if any)
    summary,           // Field 6 (Title/summary)
    details,           // Field 7 (Full details)
    priority,          // Field 8 (Thấp, Trung bình, Cao, Khẩn cấp)
    incidentDate,      // Field 9 (Date occurred)
    evidenceUrls,      // Field 10 (Attachment URLs)
    desiredSolution    // Field 11 (Desired outcome)
  } = req.body;

  if (!senderName || !contactInfo || !summary) {
    return res.status(400).json({ error: 'Họ tên, Thông tin liên hệ và Tiêu đề phản ánh là bắt buộc.' });
  }

  // Calculate SLA deadline based on priority
  const daysToAdd = priority === 'Khẩn cấp' ? 1 : priority === 'Cao' ? 2 : 3;
  const deadlineDate = new Date();
  deadlineDate.setDate(deadlineDate.getDate() + daysToAdd);
  const deadlineStr = deadlineDate.toISOString().slice(0, 10);

  const dbHealth = await checkDbHealth();
  if (dbHealth.connected) {
    try {
      const countRes = await query('SELECT COUNT(*) as count FROM incidents');
      const nextNum = parseInt(countRes.rows[0].count, 10) + 1;
      const incidentCode = `SC-${String(nextNum).padStart(3, '0')}`;

      const insertRes = await query(
        `INSERT INTO incidents (
          incident_code, received_time, source, sender_name, contact_info,
          object_type, related_code, summary, priority, status,
          assignee, last_updated, deadline, resolution_result, internal_notes,
          desired_solution, evidence_urls
        ) VALUES (
          $1, NOW(), 'Web Portal / Forms API', $2, $3,
          $4, $5, $6, $7, 'Mới tiếp nhận',
          'Trực ban kỹ thuật', CURRENT_DATE, $8, 'Đang thẩm định nội dung', $9,
          $10, $11
        ) RETURNING *`,
        [
          incidentCode,
          senderName,
          contactInfo,
          objectType || 'Vấn đề khác',
          relatedCode || productCode || 'CHƯA_RÕ',
          summary,
          priority || 'Trung bình',
          deadlineStr,
          `Chi tiết: ${details || 'Không có'}. Ngày xảy ra: ${incidentDate || 'Không rõ'}`,
          desiredSolution || '',
          evidenceUrls || ''
        ]
      );
      return res.status(201).json(insertRes.rows[0]);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  }

  // In-memory fallback
  const nextNum = memoryIncidents.length + 1;
  const newIncident = {
    incidentCode: `SC-${String(nextNum).padStart(3, '0')}`,
    receivedTime: new Date().toISOString().replace('T', ' ').slice(0, 16),
    source: 'Web Portal / Forms API',
    senderName,
    contactInfo,
    objectType: objectType || 'Vấn đề khác',
    relatedCode: relatedCode || productCode || 'CHƯA_RÕ',
    summary,
    priority: priority || 'Trung bình',
    status: 'Mới tiếp nhận',
    assignee: 'Trực ban kỹ thuật',
    lastUpdated: new Date().toISOString().slice(0, 10),
    deadline: deadlineStr,
    resolutionResult: 'Đang thẩm định nội dung',
    internalNotes: `Chi tiết: ${details || 'Không có'}. Mong muốn: ${desiredSolution || 'N/A'}`
  };
  memoryIncidents.unshift(newIncident);
  res.status(201).json(newIncident);
});

// Update incident status/resolution
app.put('/api/incidents/:code', async (req, res) => {
  const { code } = req.params;
  const { status, resolutionResult, internalNotes, assignee } = req.body;

  const dbHealth = await checkDbHealth();
  if (dbHealth.connected) {
    try {
      const updateRes = await query(
        `UPDATE incidents
         SET status = COALESCE($1, status),
             resolution_result = COALESCE($2, resolution_result),
             internal_notes = COALESCE($3, internal_notes),
             assignee = COALESCE($4, assignee),
             last_updated = CURRENT_DATE,
             updated_at = NOW()
         WHERE incident_code = $5
         RETURNING *`,
        [status, resolutionResult, internalNotes, assignee, code]
      );
      if (updateRes.rows.length === 0) {
        return res.status(404).json({ error: 'Không tìm thấy sự cố với mã đã cho.' });
      }
      return res.json(updateRes.rows[0]);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  }

  const inc = memoryIncidents.find(i => i.incidentCode === code);
  if (!inc) {
    return res.status(404).json({ error: 'Không tìm thấy sự cố với mã đã cho.' });
  }
  if (status) inc.status = status;
  if (resolutionResult) inc.resolutionResult = resolutionResult;
  if (internalNotes) inc.internalNotes = internalNotes;
  if (assignee) inc.assignee = assignee;
  inc.lastUpdated = new Date().toISOString().slice(0, 10);
  res.json(inc);
});

// ==========================================
// KPI & METRICS API
// ==========================================
app.get('/api/stats', async (req, res) => {
  const dbHealth = await checkDbHealth();
  if (dbHealth.connected) {
    try {
      const [sellersCount, productsCount, incidentsRes] = await Promise.all([
        query('SELECT COUNT(*) as count FROM sellers WHERE status = $1', ['Đang hoạt động']),
        query('SELECT COUNT(*) as count FROM products WHERE status = $1', ['Đang bán']),
        query(`
          SELECT 
            COUNT(*) as total,
            COUNT(CASE WHEN status = 'Đang xử lý' THEN 1 END) as pending,
            COUNT(CASE WHEN status = 'Đã giải quyết' OR status = 'Đã đóng' THEN 1 END) as resolved,
            COUNT(CASE WHEN deadline < CURRENT_DATE AND status NOT IN ('Đã giải quyết', 'Đã đóng') THEN 1 END) as overdue
          FROM incidents
        `)
      ]);

      const incData = incidentsRes.rows[0];
      return res.json({
        database: 'Neon PostgreSQL (Connected)',
        activeSellers: parseInt(sellersCount.rows[0].count, 10),
        activeProducts: parseInt(productsCount.rows[0].count, 10),
        totalIncidents: parseInt(incData.total, 10),
        pendingIncidents: parseInt(incData.pending, 10),
        resolvedIncidents: parseInt(incData.resolved, 10),
        overdueIncidents: parseInt(incData.overdue, 10)
      });
    } catch (err: any) {
      console.warn('[Stats query error]:', err.message);
    }
  }

  // Fallback calculation
  const total = memoryIncidents.length;
  const pending = memoryIncidents.filter(i => i.status === 'Đang xử lý').length;
  const resolved = memoryIncidents.filter(i => i.status === 'Đã giải quyết' || i.status === 'Đã đóng').length;
  const today = new Date().toISOString().slice(0, 10);
  const overdue = memoryIncidents.filter(i => i.deadline < today && i.status !== 'Đã giải quyết' && i.status !== 'Đã đóng').length;

  res.json({
    database: 'In-Memory Store (Demo)',
    activeSellers: memorySellers.filter(s => s.status === 'Đang hoạt động').length,
    activeProducts: memoryProducts.filter(p => p.status === 'Đang bán').length,
    totalIncidents: total,
    pendingIncidents: pending,
    resolvedIncidents: resolved,
    overdueIncidents: overdue
  });
});

// ==========================================
// VITE OR STATIC SERVING
// ==========================================
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    // Serve production static build
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  } else {
    // Development mode: Vite middleware
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  const server = app.listen(PORT, HOST, () => {
    console.log(`[Railway Server]: Running at http://${HOST}:${PORT}`);
    console.log(`[Environment]: ${process.env.NODE_ENV || 'development'}`);
    console.log(`[Health check]: http://${HOST}:${PORT}/health`);
  });

  // Graceful shutdown
  const shutdown = async () => {
    console.log('[Railway Server]: Shutting down gracefully...');
    server.close(async () => {
      const { getPool } = await import('./src/server/db.js');
      const pool = getPool();
      if (pool) {
        await pool.end();
        console.log('[Neon Pool]: Connection pool closed.');
      }
      process.exit(0);
    });
  };

  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);
}

startServer();
