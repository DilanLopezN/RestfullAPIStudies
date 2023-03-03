import { Router, Request, Response } from 'express'
import { CategoriesRepository } from '../repositories/CategoriesRepository'
const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/categories', (req: Request, res: Response) => {
  const { name, description } = req.body

  categoriesRepository.create({ name, description })

  return res.status(201).send()
})

categoriesRoutes.get('/categories', (req: Request, res: Response) => {
  const all = categoriesRepository.list()
  return res.status(200).json(all)
})

export { categoriesRoutes }
