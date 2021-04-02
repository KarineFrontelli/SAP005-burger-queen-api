const { Router } = require('express')
const OrdersController = require('../controller/OrdersController')
const router = Router()

router.get("/", OrdersController.getAllOrders)
router.get("/:orderid", OrdersController.getOrdersById)
router.post("/", OrdersController.postOrders)
router.put("/:orderid", OrdersController.putOrdersById)
router.delete("/:orderid", OrdersController.deletedOrdersById)

module.exports = router