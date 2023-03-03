import { Router, Request, Response } from 'express'
import { v4 as uuidV4 } from 'uuid'
import { Category } from '../model/Category'
const categoriesRoutes = Router()

const categories: Category[] = []
categoriesRoutes.post('/categories', (req: Request, res: Response) => {
  const { name, description } = req.body

  const category: Category = {
    name,
    description,
    created_at: new Date()
  }
  categories.push(category)

  return res.status(201).json(categories).send()
})

export { categoriesRoutes }
