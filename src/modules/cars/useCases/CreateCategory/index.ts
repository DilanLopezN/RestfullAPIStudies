import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'
import { CreateCategoryController } from './CreateCategoryController'
import { CreateCategoryService } from './CreateCategoryUseCase'
const categoriesRepository = CategoriesRepository.getInstance()
const createCategoryUseCase = new CreateCategoryService(categoriesRepository)

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
)

export { createCategoryController, createCategoryUseCase }
