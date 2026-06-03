import fs from 'fs';
import path from 'path';

const server = await import('./dist/server/server.js').then(m => m.default);

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Serve assets if they exist
    if (pathname.startsWith('/assets/')) {
      const assetsDir = path.join(process.cwd(), 'dist/client/assets');
      const filePath = path.join(assetsDir, pathname.replace('/assets/', ''));
      
      try {
        const content = fs.readFileSync(filePath);
        const ext = path.extname(filePath);
        const contentTypeMap = {
          '.js': 'application/javascript; charset=utf-8',
          '.css': 'text/css; charset=utf-8',
          '.json': 'application/json',
          '.svg': 'image/svg+xml',
          '.png': 'image/png',
          '.jpg': 'image/jpeg',
          '.gif': 'image/gif',
          '.woff': 'font/woff',
          '.woff2': 'font/woff2',
        };
        const contentType = contentTypeMap[ext] || 'application/octet-stream';
        
        return new Response(content, {
          headers: {
            'Content-Type': contentType,
            'Cache-Control': 'public, max-age=31536000, immutable',
          },
        });
      } catch (e) {
        return new Response('Asset not found', { status: 404 });
      }
    }

    // Pass all other requests to the server
    return server.fetch(request, env, ctx);
  },
};
