import type { IncomingMessage } from 'http';

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

export default async function apiHandler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    // Converte Node.js request/response para Web Standard Request/Response
    const url = `${process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : 'http://localhost:3000'}${req.url}`;
    
    const webRequest = new Request(url, {
      method: req.method,
      headers: req.headers as Record<string, string>,
      body: req.method !== 'GET' && req.method !== 'HEAD' ? JSON.stringify(req.body) : undefined,
    });

    // Chama o handler do TanStack Start
    const webResponse = await handler.fetch(webRequest, {}, {});

    // Converte Web Standard Response para Node.js response
    res.status(webResponse.status);

    // Copia headers
    webResponse.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    // Envia o body
    const body = await webResponse.text();
    res.send(body);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
