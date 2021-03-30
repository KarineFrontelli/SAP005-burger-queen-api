const { Router } = require('express')
const OrdersController = require('../controller/OrdersController')

const router = Router()

// aqui vai as requisições
router.get("/", OrdersController.getAllOrders)
router.get("/:orderid", OrdersController.getOrdersById)
router.post("/", OrdersController.postAllOrders)
router.put("/:orderid", OrdersController.putOrdersById)
router.delete("/:orderid", OrdersController.deletedOrdersById)

module.exports = router