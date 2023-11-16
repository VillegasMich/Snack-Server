import { Elysia } from 'elysia';
import { ingredientController } from '../controllers/ingredient';

import { createIngredientDTO, ingredientDTO } from '../models/ingredientDTO';

export const ingredientRouter = new Elysia()
  .onError(({ error }) => {
    return new Response(error.toString(), {
      status: 400,
    });
  })
  .get('/get', ingredientController.getAll, {
    response: [ingredientDTO],
  })
  .post('/post', ({ body }) => ingredientController.post(body), {
    body: createIngredientDTO,
    response: ingredientDTO,
  });
