import { Router, Request, Response } from 'express'
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository'
import { CreateCategoryService } from '../modules/cars/useCases/CreateCategory/CreateCategoryUseCase'

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/categories', (req: Request, res: Response) => {})

categoriesRoutes.get('/categories', (req: Request, res: Response) => {
  const all = categoriesRepository.list()
  return res.status(200).json(all)
})

export { categoriesRoutes }
