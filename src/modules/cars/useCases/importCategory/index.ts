import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCaregoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();

const importCategoryUseCase = new ImportCaregoryUseCase(categoriesRepository);

const importCaregoryController = new ImportCategoryController(
  importCategoryUseCase
);

export { importCaregoryController };
