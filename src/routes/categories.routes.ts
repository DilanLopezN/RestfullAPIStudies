import { Router, Request, Response } from 'express'
import multer from 'multer'
import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { importCategoryController } from '../modules/cars/useCases/importCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategory'

const categoriesRoutes = Router()
const upload = multer({
  dest: './tmp'
})

categoriesRoutes.post('/categories', (req: Request, res: Response) => {
  return createCategoryController.handle(req, res)
})

categoriesRoutes.get('/categories', (req: Request, res: Response) => {
  return listCategoriesController.handle(req, res)
})

categoriesRoutes.post(
  '/categories/import',
  upload.single('file'),
  (req: Request, res: Response) => {
    return importCategoryController.handle(req, res)
  }
)
export { categoriesRoutes }
