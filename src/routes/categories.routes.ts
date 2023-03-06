import { Router, Request, Response } from 'express'
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository'
import { createCategoryController } from '../modules/cars/useCases/createCategory'

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/categories', (req: Request, res: Response) => {
  return createCategoryController.handle(req, res)
})

categoriesRoutes.get('/categories', (req: Request, res: Response) => {
  const all = categoriesRepository.list()
  return res.status(200).json(all)
})

export { categoriesRoutes }
