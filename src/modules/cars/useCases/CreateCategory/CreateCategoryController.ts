import { Response, Request } from 'express'
import { CreateCategoryService } from './CreateCategoryUseCase'
class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryService) {}

  handle(req: Request, res: Response): Response {
    const { name, description } = req.body

    this.createCategoryUseCase.execute({ name, description })
    return res.status(201).send()
  }
}
export { CreateCategoryController }
