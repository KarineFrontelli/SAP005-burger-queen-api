const { Router } = require('express')
const ProductsController = require('../controller/ProductsController')

const router = Router()

// aqui vai as requisições
router.get("/", ProductsController.getAllOrders)
//router.get("/:orderId", OrdersController.getOrdersById)
//router.post("/", OrdersController.postAllOrders)
//router.put("/:orderId", OrdersController.putOrdersById)
//router.delete("/:orderId", OrdersController.deletedOrdersById)

module.exports = router