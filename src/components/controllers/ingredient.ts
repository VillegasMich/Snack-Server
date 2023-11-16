import { CreateIngredientDTO, IngredientDTO } from '../models/ingredientDTO';
import { ingredientService } from '../services/ingredient';

const getAll = async () => {
  return ingredientService.getAll();
};

const post = async (body: CreateIngredientDTO) => {
  return ingredientService.post(body);
};

export const ingredientController = {
  getAll,
  post,
};
