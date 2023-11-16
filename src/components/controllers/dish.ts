import { dishService } from '../services/dish';

const getAll = () => {
  return dishService.getAll();
};

export const dishController = {
  getAll,
};
