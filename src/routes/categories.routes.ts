import { Router, Request, Response } from 'express'
import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategory'

const categoriesRoutes = Router()

categoriesRoutes.post('/categories', (req: Request, res: Response) => {
  return createCategoryController.handle(req, res)
})

categoriesRoutes.get('/categories', (req: Request, res: Response) => {
  return listCategoriesController.handle(req, res)
})

export { categoriesRoutes }
