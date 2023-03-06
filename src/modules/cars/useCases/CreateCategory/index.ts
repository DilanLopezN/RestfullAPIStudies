import { CategoriesRepository } from '../../repositories/CategoriesRepository'
import { CreateCategoryController } from './CreateCategoryController'
import { CreateCategoryService } from './CreateCategoryUseCase'
const categoriesRepository = new CategoriesRepository()
const createCategoryUseCase = new CreateCategoryService(categoriesRepository)

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
)

export { createCategoryController, createCategoryUseCase }
