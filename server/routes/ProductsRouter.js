const { Router } = require('express');
const ProductsController = require('../controller/ProductsController');

const router = Router();

// aqui vai as requisições
router.get('/', ProductsController.getAllProducts);
router.get('/:productid', ProductsController.getProductsById);
router.post('/', ProductsController.postNewProducts);
// router.put('/:productid', ProductsController.putProductsById);
router.delete('/:productid', ProductsController.deleteProductsbyId);

module.exports = router;
