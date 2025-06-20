import dotenv from 'dotenv';
import * as path from 'path';
import fs from 'fs';

// Try to load .env from both root and dist (for manual runs)
const envPathRoot = path.resolve(__dirname, '../.env');
const envPathDist = path.resolve(__dirname, '../../.env');
if (fs.existsSync(envPathRoot)) {
  dotenv.config({ path: envPathRoot });
} else if (fs.existsSync(envPathDist)) {
  dotenv.config({ path: envPathDist });
} else {
  dotenv.config();
}

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import axios from 'axios';
import { router as apiRoutes } from './routes';

const app = express();
const PORT = process.env.PORT || 8000;
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

// Security middleware
app.use(helmet());
app.use(cors());

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req: express.Request, res: express.Response) => {
  res.json({
    status: 'healthy',
    name: 'generated-mcp-server',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    baseUrl: BASE_URL
  });
});

// MCP tool endpoints
app.use('/tools', apiRoutes);

// ... (rest of the reference server.ts content, see previous read_file result)
// For brevity, you may want to copy the full content from the reference server.ts

export default app;
