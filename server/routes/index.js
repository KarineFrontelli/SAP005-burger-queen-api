const { Router } = require('express');
const usersRouter = require('./UsersRouter');
// const productsRouter = require('./ProductsRouter')
// const ordersRouter = require('./OrdersRouter')

const router = Router();

// aqui vai todas as rotas
router.use('/users', usersRouter);
// router.use('/products', productsRouter);
// router.use('/orders', ordersRouter);

module.exports = router;
