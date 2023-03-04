import { CategoriesRepository } from '../repositories/CategoriesRepository'

interface IRequest {
  name: string
  description: string
}
const categoriesRepository = new CategoriesRepository()
class CreateCategoryService {
  execute(req, res) {
    const categoryAlreadyExists = categoriesRepository.findByName(name)
    if (categoryAlreadyExists) {
      return res.status(400).json({ message: 'Category already exists' })
    } else {
      categoriesRepository.create({ name, description })
    }
  }
}
export { CreateCategoryService }
