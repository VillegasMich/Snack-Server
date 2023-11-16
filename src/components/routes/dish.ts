import { Elysia } from 'elysia';
import { dishDTO } from '../models/dishDTO';
import { dishController } from '../controllers/dish';

export const dishRouter = new Elysia()
  .onError(({ error }) => {
    return new Response('❌ Dish route error! \n\n' + error.toString(), {
      status: 400,
    });
  })
  .get('/get', dishController.getAll, {
    response: [dishDTO],
  });
