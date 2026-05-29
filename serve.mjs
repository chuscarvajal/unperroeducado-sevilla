import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';

const PORT = 3031;
const ROOT = './out';
const mime = { '.html':'text/html','.js':'application/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.ico':'image/x-icon','.json':'application/json','.woff2':'font/woff2' };

createServer(async (req, res) => {
  let url = req.url.split('?')[0];
  if (url === '/' || url === '') url = '/index.html';
  try {
    const data = await readFile(join(ROOT, url));
    res.writeHead(200, { 'Content-Type': mime[extname(url)] || 'text/plain' });
    res.end(data);
  } catch {
    try {
      const data = await readFile(join(ROOT, 'index.html'));
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    } catch { res.writeHead(404); res.end('Not found'); }
  }
}).listen(PORT, () => console.log(`http://localhost:${PORT}`));
