import type { IncomingMessage } from 'http';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

interface VercelRequest extends IncomingMessage {
  query: Record<string, string | string[]>;
  cookies: Record<string, string>;
  body: any;
  url: string;
}

interface VercelResponse {
  status: (code: number) => VercelResponse;
  setHeader: (key: string, value: string) => VercelResponse;
  send: (body: string | Buffer) => void;
  json: (data: any) => void;
}

// Importa o handler do TanStack Start
const serverModule = await import('../dist/server/server.js');
const handler = serverModule.default;

function getContentType(filePath: string): string {
  if (filePath.endsWith('.js')) return 'application/javascript; charset=utf-8';
  if (filePath.endsWith('.css')) return 'text/css; charset=utf-8';
  if (filePath.endsWith('.json')) return 'application/json';
  if (filePath.endsWith('.svg')) return 'image/svg+xml';
  if (filePath.endsWith('.png')) return 'image/png';
  if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) return 'image/jpeg';
  if (filePath.endsWith('.gif')) return 'image/gif';
  if (filePath.endsWith('.woff')) return 'font/woff';
  if (filePath.endsWith('.woff2')) return 'font/woff2';
  return 'application/octet-stream';
}

export default async function apiHandler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    const url = new URL(req.url || '/', `http://${req.headers.host}`);
    const pathname = url.pathname;

    // Serve assets estáticos
    if (pathname.startsWith('/assets/')) {
      const assetPath = join(process.cwd(), 'dist/client', pathname);
      
      try {
        if (existsSync(assetPath)) {
          const content = readFileSync(assetPath);
          res.status(200);
          res.setHeader('Content-Type', getContentType(assetPath));
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
          res.send(content);
          return;
        }
      } catch (e) {
        console.error('Error serving asset:', e);
      }
    }

    // Serve todas outras requisições através do handler SSR
    const webRequest = new Request(
      `${process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : 'http://localhost:3000'}${req.url}`,
      {
        method: req.method || 'GET',
        headers: req.headers as Record<string, string>,
        body:
          req.method && req.method !== 'GET' && req.method !== 'HEAD'
            ? JSON.stringify(req.body)
            : undefined,
      }
    );

    const webResponse = await handler.fetch(webRequest, {}, {});

    res.status(webResponse.status);

    webResponse.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    const body = await webResponse.text();
    res.send(body);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
