import { t } from 'elysia';
import { descriptionOptions, nameOptions } from './options';

export const ingredientDTO = t.Object({
  id: t.Number(),
  name: t.String(nameOptions),
  description: t.Optional(t.String(descriptionOptions)),
});

export type IngredientDTO = (typeof ingredientDTO)['static'];

export const createIngredientDTO = t.Object({
  name: t.String(nameOptions),
  description: t.Optional(t.String(descriptionOptions)),
});

export type CreateIngredientDTO = (typeof createIngredientDTO)['static'];
