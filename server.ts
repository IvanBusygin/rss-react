import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import { createServer as createViteServer, ViteDevServer } from 'vite';

const dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3000;

async function createServer() {
  const app = express();

  const vite: ViteDevServer = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req: Request, res: Response, next: NextFunction) => {
    // serve index.html

    const url = req.originalUrl;

    try {
      let template = fs.readFileSync(path.resolve(dirname, 'index.html'), 'utf-8');

      template = await vite.transformIndexHtml(url, template);

      const { render } = await vite.ssrLoadModule('./src/entry-server.tsx');

      const parts = template.split('<!--app-html-->');

      res.write(parts[0]);
      const stream = render(url, {
        bootstrapModules: ['./src/entry-client.tsx'],
        onShellReady() {
          stream.pipe(res);
        },
        onAllReady() {
          res.write(parts[1]);
          res.end();
        },
        onError(err: Error) {
          console.error(err);
        },
      });
    } catch (err) {
      const e = err as Error;
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  console.log(`listening on http://localhost:${PORT}`);
  app.listen(PORT);
}

createServer();
