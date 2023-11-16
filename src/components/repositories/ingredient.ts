import { prisma } from '../../database/databaseConnection';
import { CreateIngredientDTO, IngredientDTO } from '../models/ingredientDTO';

const getAll = (): Promise<IngredientDTO[]> => prisma.ingredient.findMany({});

const post = (body: CreateIngredientDTO): Promise<IngredientDTO> =>
  prisma.ingredient.create({
    data: {
      name: body.name,
      description: body.description,
    },
  });

export const ingredientRepo = {
  getAll,
  post,
};
