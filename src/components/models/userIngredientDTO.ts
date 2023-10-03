import { t } from 'elysia';

export const userIngredient = t.Object({
  userID: t.String(),
  ingredientID: t.Number(),
  addedAt: t.Date(),
  amount: t.Number(),
});
