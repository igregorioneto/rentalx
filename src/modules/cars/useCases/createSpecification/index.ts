import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateCategoryController } from "../createCategory/CreateCategoryController";
import { CreateCategoryUseCase } from "../createCategory/CreateCategoryUseCase";

const specificationRepository = new SpecificationRepository();

const createSpecificationUseCas = new CreateCategoryUseCase(
  specificationRepository
);

const createSpecificationController = new CreateCategoryController(
  createSpecificationUseCas
);

export { createSpecificationController };
