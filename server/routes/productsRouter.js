const { Router } = require('express')
const ProductsController = require('../controller/ProductsController')

const router = Router()

// aqui vai as requisições
router.get("/", ProductsController.getAllProducts)
router.get("/:productsid", ProductsController.getProductsById)
router.post("/", ProductsController.postNewProducts)
//router.put("/:productsid", ProductsController.putProductsById)
router.delete("/:productsid", ProductsController.deleteProductsbyId)

module.exports = router