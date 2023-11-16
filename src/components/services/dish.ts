import { DishDTO } from '../models/dishDTO';
import { dishRepo } from '../repositories/dish';

const getAll = async (): Promise<DishDTO[]> => {
  const dishes = await dishRepo.getAll();
  return dishes;
};

export const dishService = {
  getAll,
};
