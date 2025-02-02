const { Router } = require('express')
const ordersRouter = require("./ordersRouter")
const productsRouter = require("./productsRouter")
const usersRouter = require("./usersRouter")
const router = Router()

router.use('/users', usersRouter);
router.use('/products', productsRouter);
router.use('/orders', ordersRouter);

module.exports = router
