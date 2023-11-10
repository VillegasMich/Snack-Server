import { Elysia, t } from 'elysia';
import { ingredientRouter } from './src/components/routes/ingredient';

const app = new Elysia()
  .group('/ingredients', (app) => app.use(ingredientRouter))
  .listen(8080);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
