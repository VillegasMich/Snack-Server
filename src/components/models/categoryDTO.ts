import { t } from 'elysia';
import { nameOptions } from './options';

export const categoryDTO = t.Object({
  id: t.Number(),
  name: t.String(nameOptions),
});

export type CategoryDTO = (typeof categoryDTO)['static'];
