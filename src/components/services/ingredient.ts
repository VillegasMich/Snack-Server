import { CreateIngredientDTO, IngredientDTO } from '../models/ingredientDTO';
import { ingredientRepo } from '../repositories/ingredient';

const getAll = async (): Promise<IngredientDTO[]> => {
  return await ingredientRepo.getAll();
};

const post = async (body: CreateIngredientDTO): Promise<IngredientDTO> => {
  return await ingredientRepo.post(body);
};

export const ingredientService = {
  getAll,
  post,
};
