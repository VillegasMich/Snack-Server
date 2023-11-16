import { prisma } from '../../database/databaseConnection';

const getAll = () => prisma.dish.findMany({});

export const dishRepo = {
  getAll,
};
