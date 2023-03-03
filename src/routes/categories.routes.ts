import { Router, Request, Response } from 'express'
import { v4 as uuidV4 } from 'uuid'
const categoriesRoutes = Router()

const categories = []
categoriesRoutes.post('/categories', (req: Request, res: Response) => {
  const { name, description } = req.body
  categories.push({
    id: uuidV4(),
    name,
    description
  })

  return res.status(201).json(categories).send()
})

export { categoriesRoutes }