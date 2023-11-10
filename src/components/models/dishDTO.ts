import { t } from 'elysia';
import { Rating, instructionOptions, nameOptions } from './options';

export const dishDTO = t.Object({
  id: t.Number(),
  name: t.String(nameOptions),
  rating: t.Optional(t.Enum(Rating)),
  instruction: t.String(instructionOptions),
});

export type DishDTO = (typeof dishDTO)['static'];
