import { Request, Response } from "express";

import { ImportCaregoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  constructor(private importCaregoryUseCase: ImportCaregoryUseCase) {}

  handle(request: Request, response: Response) {
    const { file } = request;
    this.importCaregoryUseCase.execute(file);
    return response.send();
  }
}

export { ImportCategoryController };
