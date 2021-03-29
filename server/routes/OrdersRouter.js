const { Router } = require('express');
const OrdersController = require('../controller/OrdersController');

const router = Router();

// aqui vai as requisições
router.get('/', OrdersController.getAllOrders);
router.get('/:orderId', OrdersController.getOrdersById);
router.post('/', OrdersController.postAllOrders);
router.put('/:orderId', OrdersController.putOrdersById);
router.delete('/:orderId', OrdersController.deleteOrdersbyId);

module.exports = router;
