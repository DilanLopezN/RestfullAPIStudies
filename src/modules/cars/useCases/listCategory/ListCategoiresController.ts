import { Response, Request } from 'express'
class ListCategoriesController {
  handle(req: Request, res: Response): Response {
    const all = categoriesRepository.list()
    return res.status(200).json(all)
  }
}

export { ListCategoriesController }
