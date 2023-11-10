import { t } from 'elysia';
import { nameOptions } from './options';

export const userDTO = t.Object({
  id: t.String(),
  email: t.String(),
  name: t.String(nameOptions),
  phone: t.String(),
  createdAt: t.Date(),
});

export type UserDTO = (typeof userDTO)['static'];
