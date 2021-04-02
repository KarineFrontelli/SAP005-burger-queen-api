const { Router } = require('express')
const ProductsController = require('../controller/ProductsController')
const router = Router()

router.get("/", ProductsController.getAllProducts)
router.get("/:productsid", ProductsController.getProductsById)
router.post("/", ProductsController.postNewProducts)
router.put("/:productsid", ProductsController.putProductsbyId)
router.delete("/:productsid", ProductsController.deleteProductsbyId)

module.exports = router