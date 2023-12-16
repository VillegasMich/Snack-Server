import { Elysia, t } from 'elysia';
import { ingredientRouter } from './src/components/routes/ingredient';
import { dishRouter } from './src/components/routes/dish';
import { cors } from '@elysiajs/cors';

const app = new Elysia()
  .use(cors())
  .group('/ingredients', (app) => app.use(ingredientRouter))
  .group('/dishes', (app) => app.use(dishRouter))
  .listen(8080);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
