import { Elysia } from 'elysia';
import { prisma } from '../../database/databaseConnection';
import { IngredientDTO } from '../models/ingredientDTO';
// import { ingredientService } from '../services/ingredient';

// const getAll = async (): Promise<IngredientDTO[]> => {
//   const ingredients = await prisma.ingredient.findMany({});

//   return ingredients;
// };
// {
//   response: t.Array(ingredientDTO),
// }

// const post = () => {
//   try {
//     ingredientService.post;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const ingredientController = {
//   getAll,
//   post,
// };
