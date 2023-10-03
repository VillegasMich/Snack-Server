import { t } from 'elysia';

enum Rating {
  EXCELLENT,
  AVARAGE,
  BAD,
}

const nameOptions = {
  maxLength: 20,
  minLength: 3,
};

const descriptionOptions = {
  maxLength: 250,
};

const instructionOptions = {
  maxLength: 500,
  minLength: 10,
};

export const dishDTO = t.Object({
  id: t.Number(),
  name: t.String(nameOptions),
  rating: t.Optional(t.Enum(Rating)),
  instruction: t.String(instructionOptions),
});

export const ingredientDTO = t.Object({
  id: t.Number(),
  name: t.String(nameOptions),
  description: t.Optional(t.String(descriptionOptions)),
});

export const userDTO = t.Object({
  id: t.String(),
  email: t.String(),
  name: t.String(nameOptions),
  phone: t.String(),
  createdAt: t.Date(),
});

export const userIngredient = t.Object({
  userID: t.String(),
  ingredientID: t.Number(),
  addedAt: t.Date(),
  amount: t.Number(),
});

export const categoryDTO = t.Object({
  id: t.Number(),
  name: t.String(nameOptions),
});
