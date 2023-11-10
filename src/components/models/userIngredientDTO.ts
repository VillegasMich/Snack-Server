import { t } from 'elysia';

export const userIngredientDTO = t.Object({
  userID: t.String(),
  ingredientID: t.Number(),
  addedAt: t.Date(),
  amount: t.Number(),
});

export type UserIngredientDTO = (typeof userIngredientDTO)['static'];
