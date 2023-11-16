import { CreateIngredientDTO, IngredientDTO } from '../models/ingredientDTO';
import { ingredientService } from '../services/ingredient';

const getAll = () => {
  return ingredientService.getAll();
};

const post = (body: CreateIngredientDTO) => {
  return ingredientService.post(body);
};

export const ingredientController = {
  getAll,
  post,
};
