import { Elysia, t } from 'elysia';
import { prisma } from '../../database/databaseConnection';
import {
  CreateIngredientDTO,
  IngredientDTO,
  createIngredientDTO,
  ingredientDTO,
} from '../models/ingredientDTO';

export const ingredientRouter = new Elysia()
  .get(
    '/get',
    async (): Promise<IngredientDTO[]> => {
      const ingredients = await prisma.ingredient.findMany({});

      return ingredients;
    },
    {
      response: [ingredientDTO],
    }
  )
  .post(
    '/post',
    async ({ body }): Promise<CreateIngredientDTO> => {
      const newIngredient = await prisma.ingredient.create({
        data: {
          name: body.name,
          description: body.description,
        },
      });
      return newIngredient;
    },
    {
      body: createIngredientDTO,
      response: ingredientDTO,
    }
  );
